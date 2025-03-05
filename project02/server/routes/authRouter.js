import express from 'express';
const router = express();
import db from '../config/db.js';
import jwt from 'jsonwebtoken';

router.post('/login', (req, res)=>{ 
    // 사용자가 input 태그에 입력한 Id와 Pw
    const userId=req.body.userId;
    const userPw=req.body.userPw;

    // 클라이언트에서 유저의 상태를 관리할 수 있도록 token에 저장할 데이터 지정
    const sql='select user_id, nickname, email, car from users where user_id=? and user_pw=?';

    db.query(sql, [userId, userPw], (err, data)=>{
        if(err){ // DB 에러
            res.status(500).send(err);
        }
        else if(!data.length){ // sql 실행 결과 data가 없는 경우 -> 로그인 실패
            const idSql='select user_id from users where user_id=?';
            db.query(idSql, [userId], (err, data)=>{
                if(data.length){
                    // idSql 실행 결과 data가 있는 경우 -> 입력한 id는 DB에 존재함 -> pw 오류
                    res.status(401).send({message:'wrongPw'});
                }
                else{
                    // idSql 실행 결과 data가 없는 경우 -> DB에 id가 없음 -> id 오류
                    res.status(401).send({message:'wrongId'});
                }
            });
        }
        else{ // id, pw 모두 맞게 입력함
            const userInfo=data[0];

            // jwt 토큰 생성
            const token=jwt.sign({userId:userInfo.user_id, nickname:userInfo.nickname, email:userInfo.email, car:userInfo.car}, process.env.JWT_SECRET, {expiresIn:'1h'});
            // httpOnly 쿠키에 저장 후 클라이언트에 토큰 전달
            res.cookie('token', token, {httpOnly:true, secure:true, sameSite:'Strict'});
            res.send(token);
        }
    });
});

const verifyToken=(req, res, next)=>{
    // HTTPOnly cookie에 저장된 토큰 값
    const verifyToken=req.cookies.token;

    if(!verifyToken) return res.status(401).send({message:'인증 토큰이 필요합니다.'});

    try{
        // jwt로 암호화된 user 정보를 복호화
        const decoded=jwt.verify(verifyToken, process.env.JWT_SECRET);
        req.user=decoded; 
        next(); // 다음 미들웨어 실행
    }
    catch(error){
        return res.status(401).send({message:'토큰이 유효하지 않습니다.'});
    }
}

router.get('/verify', verifyToken, (req, res)=>{
    // 클라이언트에게 요청했던 데이터 중 유저의 정보를 다시 전달
    res.send(req.user);
});

router.post('/register', (req, res)=>{
    const {regId, regNickname, regEmail}=req.body.registerValue;

    // db.query를 여러번 사용할 경우 각 DB 쿼리가 완료될 때 마다 응답을 보냄
    // Express 서버는 한 요청 당 한 번의 응답만 보낼 수 있으므로 모든 쿼리가 완료된 다음 응답을 보내도록 Promise 사용
    
    // ID 중복 검사 Promise
    const regIdChk=()=>{
        return new Promise((resolve, reject)=>{
            const sqlId='select user_id from users where user_id=?';
            db.query(sqlId, [regId], (err, data)=>{
                if(err)
                    reject(err);
                else
                    resolve(!!data.length); // 0, 1을 bool 타입으로 변환, 중복이 있으면 true
            });
        });
    }

    // 닉네임 중복 검사 Promise
    const regNicknameChk=()=>{
        return new Promise((resolve, reject)=>{
            const sqlNickname='select nickname from users where nickname=?';
            db.query(sqlNickname, [regNickname], (err, data)=>{
                if(err)
                    reject(err);
                else
                    resolve(!!data.length);
            });
        });
    }

    // 이메일 중복 검사 Promise
    const regEmailChk=()=>{
        return new Promise((resolve, reject)=>{
            const sqlEmail='select email from users where email=?';
            db.query(sqlEmail, [regEmail], (err, data)=>{
                if(err)
                    reject(err);
                else
                    resolve(!!data.length);
            });
        });
    }

    //각 함수의 리턴 값을 담은 배열을 클라이언트에 전달
    Promise.all([regIdChk(), regNicknameChk(), regEmailChk()])
    .then(([boolId, boolNickname, boolEmail])=>{
        res.send({
            existId:boolId,
            existNickname:boolNickname,
            existEmail:boolEmail
        });
    }).catch((err)=>{
        res.status(500).send(err);
    });
});

router.post('/register_submit', (req, res)=>{
    // 클라이언트에서 전달받은 input 값
    const {regId, regPw, regNickname, regEmail, regCar}=req.body.registerSubmit;
    
    // DB에 input 값을 추가하기 위한 쿼리문
    const sql='insert into users (user_id, user_pw, nickname, email, car) values (?, ?, ?, ?, ?)';
    
    // sql문 실행
    db.query(sql, [regId, regPw, regNickname, regEmail, regCar], (err, data)=>{
        if(err){
            res.status(500).send(err);
        }
        else{
            res.status(201).send({message:'회원가입이 완료되었습니다.'});
        }
    });
});

export default router;