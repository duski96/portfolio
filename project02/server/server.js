// node.js 환경에서는 import.meta.env 사용 X
import dotenv from 'dotenv';
import path from 'path';
dotenv.config({path:path.resolve(process.cwd(), '../.env')}); //env 파일 경로 지정

// express 모듈 호출
import express from 'express';
const app=express();

// HTTPOnly cookie 사용
import cookieParser from 'cookie-parser';
app.use(cookieParser());

// POST 방식으로 받은 데이터를 읽기 위한 미들웨어 추가
app.use(express.json());

// 라우터 파일에서 api 처리
import authRouter from './routes/authRouter.js';
app.use('/api/auth', authRouter);

const PORT=process.env.VITE_PORT || 4000;

app.listen(PORT, ()=>{
    console.log(`Server run : http://localhost:${PORT}/`);
});