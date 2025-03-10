import express from 'express';
const router = express();
import db from '../config/db.js';

router.get('/review_submit', (req, res)=>{
    console.log(req);
    res.send({r:'OK'});
});

export default router;