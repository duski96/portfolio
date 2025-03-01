import express from 'express';
const router = express();
import db from '../config/db.js';
import jwt from 'jsonwebtoken';

router.post('/login', (req, res)=>{ 
    // 사용자가 input 태그에 입력한 Id와 Pw
    const userId=req.query.userId;
    const userPw=req.query.userPw;

    // 클라이언트에서 유저의 상태를 관리할 수 있도록 token에 저장할 데이터 지정
    const sql='select user_id, nickname, email, car from users where user_id=? and user_pw=?';

    db.query(sql, [userId, userPw], (err, data)=>{
        if(err){ // DB 에러
            res.send(err);
        }
        else if(!data.length){ // sql 실행 결과 data가 없는 경우 -> 로그인 실패
            const idSql='select user_id from users where user_id=?';
            db.query(idSql, [userId], (err, data)=>{
                if(data.length){
                    // idSql 실행 결과 data가 있는 경우 -> 입력한 id는 DB에 존재함 -> pw 오류
                    res.send({Fail:'wrongPw'});
                }
                else{
                    // idSql 실행 결과 data가 없는 경우 -> DB에 id가 없음 -> id 오류
                    res.send({Fail:'wrongId'});
                }
            });
        }
        else{ // id, pw 모두 맞게 입력함
            const userInfo=data[0];

            // jwt 토큰 생성
            const token=jwt.sign({userId:userInfo.user_id, nickName:userInfo.nickname, eMail:userInfo.email, car:userInfo.car}, process.env.JWT_SECRET, {expiresIn:'1h'});
            // httpOnly 쿠키에 저장 후 클라이언트에 토큰 전달
            res.cookie('token', token, {httpOnly:true, secure:true, sameSite:'Strict'});
            res.send(token);
        }
    });
});

const verifyToken=(req, res, next)=>{
    // HTTPOnly cookie에 저장된 토큰 값
    const verifyToken=req.cookies.token;

    if(!verifyToken) return res.status(403).json({message:'인증 토큰이 필요합니다.'});

    try{
        // jwt로 암호화된 user 정보를 복호화
        const decoded=jwt.verify(verifyToken, process.env.JWT_SECRET);
        req.user=decoded; 
        next(); // 다음 미들웨어 실행
    }
    catch(error){
        return res.status(403).json({message:'토큰이 유효하지 않습니다.'});
    }
}

router.get('/verify', verifyToken, (req, res)=>{
    // 클라이언트에게 요청했던 데이터 중 유저의 정보를 다시 전달
    res.send(req.user);
});

export default router;