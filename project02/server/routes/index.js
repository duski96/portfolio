import express from 'express';
const router = express();
import db from '../config/db.js';
 
router.get('/users', (req, res) => {
    db.query('SELECT * FROM users', (err, data)=>{
        if(!err) res.send({ products : data});
        else res.send(err);
    });
});
 
export default router;