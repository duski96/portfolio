// express 모듈 호출
import express from 'express';
const app=express();

// routes/index.js에서 api 처리
import api from './routes/index.js';
app.use('/api', api);

// node.js 환경에서는 import.meta.env 사용 X
import dotenv from 'dotenv';
import path from 'path';
dotenv.config({path:path.resolve(process.cwd(), '../.env')}); //env 파일 경로 지정

const PORT=process.env.VITE_PORT || 4000;

app.listen(PORT, ()=>{
    console.log(`Server run : http://localhost:${PORT}/`);
});