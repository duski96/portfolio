// express 모듈 호출
import express from 'express';
const app=express();

// routes/index.js에서 api 처리
import api from './routes/index.js';
app.use('/api', api);

const PORT=import.meta.env.VITE_PORT;

app.listen(PORT, ()=>{
    console.log(`Server run : http://localhost:${PORT}/`);
});