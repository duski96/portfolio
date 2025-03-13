import express from 'express';
const router = express();
import db from '../config/db.js';

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

router.get('/review_submit', (req, res)=>{
    const {userId, nickname, car, rate, content}=req.query;
    
    const sql='insert into review (user_id, nickname, car, rate, content) values (?, ?, ?, ?, ?)';

    db.query(sql, [userId, nickname, car, Number(rate), content], (err, data)=>{
        if(err){
            res.status(500).send(err);
        }
        else{
            res.status(200).send({message:'리뷰 작성이 완료되었습니다.'});
        }
    });
});

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

router.get('/post_submit', (req, res)=>{
    const {userId, nickname, car, title, content, board}=req.query;
    
    const sql=`insert into ${board} (user_id, nickname, car, title, content) values (?, ?, ?, ?, ?)`;

    db.query(sql, [userId, nickname, car, title, content], (err, data)=>{
        if(err){
            res.status(500).send(err);
        }
        else{
            res.status(200).send({message:'글 작성이 완료되었습니다.'});
        }
    });
});

export default router;

router.post('/delete', (req, res)=>{
    const {id, userId, board}=req.body;
    console.log(req.body);

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