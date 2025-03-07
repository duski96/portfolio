import express from 'express';
const router = express();
import db from '../config/db.js';

router.post('/profile_update', (req, res)=>{
    const {userId, newPw, newCar}=req.body.updateSubmit;
    let dataParams=[];
    let sql;
    if(newPw && newCar){
        sql='update users set user_pw=?, car=? where user_id=?';
        dataParams.push(newPw, newCar, userId);
    }
    else if(!newPw){
        sql='update users set car=? where user_id=?';
        dataParams.push(newCar, userId);
    }
    else if(!newCar){
        sql='update users set user_pw=? where user_id=?';
        dataParams.push(newPw, userId);
    }

    db.query(sql, dataParams, (err, data)=>{
        if(err){
            res.status(500).send(err);
        }
        else{
            res.status(200).send({message:'정보가 업데이트되었습니다.'});
        }
    });
});

export default router;