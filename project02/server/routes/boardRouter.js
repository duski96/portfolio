import express from 'express';
const router = express();
import db from '../config/db.js';

// 리뷰 표시 api
router.get('/review', (req, res)=>{
    const sql='select * from review';
    db.query(sql, [], (err, data)=>{
        if(err){
            res.status(500).send(err);
        }
        else if(!data.length){
            res.status(204).send({message: '조회된 데이터가 없습니다.'});
        }
        else{
            res.status(200).send(data);
        }
    });
});

// 리뷰 작성 api
router.get('/review_submit', (req, res)=>{
    const {userId, nickname, car, rate, content, createdDate}=req.query;
    
    const sql='insert into review (user_id, nickname, car, rate, content, created_date) values (?, ?, ?, ?, ?, ?)';

    db.query(sql, [userId, nickname, car, Number(rate), content, createdDate], (err, data)=>{
        if(err){
            res.status(500).send(err);
        }
        else{
            res.status(200).send({message:'리뷰 작성이 완료되었습니다.'});
        }
    });
});

// 포스트(글) 불러오기 api
// lifestyle 페이지에서는 4개 테이블 모두 한번에 로딩
router.get('/post', (req, res)=>{
    const getMeeting=()=>{
        return new Promise((resolve, reject)=>{
            const sql='select * from meeting';
            db.query(sql, [], (err, data)=>{
                if(err){
                    reject(err);
                }
                else{
                    resolve(data);
                }
            });
        });
    }

    const getDriving=()=>{
        return new Promise((resolve, reject)=>{
            const sql='select * from driving';
            db.query(sql, [], (err, data)=>{
                if(err){
                    reject(err);
                }
                else{
                    resolve(data);
                }
            });
        });
    }

    const getMaintenance=()=>{
        return new Promise((resolve, reject)=>{
            const sql='select * from maintenance';
            db.query(sql, [], (err, data)=>{
                if(err){
                    reject(err);
                }
                else{
                    resolve(data);
                }
            });
        });
    }

    const getDefect=()=>{
        return new Promise((resolve, reject)=>{
            const sql='select * from defect';
            db.query(sql, [], (err, data)=>{
                if(err){
                    reject(err);
                }
                else{
                    resolve(data);
                }
            });
        });
    }
    
    Promise.all([getMeeting(), getDriving(), getMaintenance(), getDefect()])
    .then(([meetingData, drivingData, maintenanceData, defectData])=>{
        res.status(200).send({
            meeting:meetingData,
            driving:drivingData,
            maintenance:maintenanceData,
            defect:defectData
        })
    }).catch((err)=>{
        res.status(500).send(err);
    });
});

// meeting, driving, maintenance, defect 테이블 각각 로딩
router.get('/meeting', (req, res)=>{
    const sql='select * from meeting';
    db.query(sql, [], (err, data)=>{
        if(err){
            res.status(500).send(err);
        }
        else if(!data.length){
            res.status(204).send({message: '조회된 데이터가 없습니다.'});
        }
        else{
            res.status(200).send(data);
        }
    });
});

router.get('/driving', (req, res)=>{
    const sql='select * from driving';
    db.query(sql, [], (err, data)=>{
        if(err){
            res.status(500).send(err);
        }
        else if(!data.length){
            res.status(204).send({message: '조회된 데이터가 없습니다.'});
        }
        else{
            res.status(200).send(data);
        }
    });
});

router.get('/maintenance', (req, res)=>{
    const sql='select * from maintenance';
    db.query(sql, [], (err, data)=>{
        if(err){
            res.status(500).send(err);
        }
        else if(!data.length){
            res.status(204).send({message: '조회된 데이터가 없습니다.'});
        }
        else{
            res.status(200).send(data);
        }
    });
});

router.get('/defect', (req, res)=>{
    const sql='select * from defect';
    db.query(sql, [], (err, data)=>{
        if(err){
            res.status(500).send(err);
        }
        else if(!data.length){
            res.status(204).send({message: '조회된 데이터가 없습니다.'});
        }
        else{
            res.status(200).send(data);
        }
    });
});

// 글 작성 완료 api
router.get('/post_submit', (req, res)=>{
    const {userId, nickname, car, title, content, createdDate, board}=req.query;
    
    const sql=`insert into ${board} (user_id, nickname, car, title, content, created_date) values (?, ?, ?, ?, ?, ?)`;

    db.query(sql, [userId, nickname, car, title, content, createdDate], (err, data)=>{
        if(err){
            res.status(500).send(err);
        }
        else{
            res.status(200).send({message:'글 작성이 완료되었습니다.'});
        }
    });
});

// 글 삭제 api
router.get('/delete', (req, res)=>{
    const {id, userId, board}=req.query;

    const sql=`delete from ${board} where id=? and user_id=?`;

    db.query(sql, [id, userId], (err, data)=>{
        if(err){
            res.status(500).send(err);
        }
        else{
            res.status(200).send({message:'삭제가 완료되었습니다.'});
        }
    });
});

// 글 업데이트(수정) api
router.get('/post_update', (req, res)=>{
    const {id, userId, title, content, board}=req.query;

    const sql=`update ${board} set title=?, content=? where id=? and user_id=?`;

    db.query(sql, [title, content, id, userId], (err, data)=>{
        if(err){
            res.status(500).send(err);
        }
        else{
            res.status(200).send({message:'수정이 완료되었습니다.'});
        }
    });
});

export default router;