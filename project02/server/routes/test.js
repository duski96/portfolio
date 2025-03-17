import express from 'express';
const router = express();

router.get('/api/test', (req, res) => {
    res.json({ message: 'API is working!' });
    console.log('API is working!');
});