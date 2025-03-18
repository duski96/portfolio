// __dirname 적용 필요
import { fileURLToPath } from 'url';

// node.js 환경에서는 import.meta.env 사용 X
// 추가로 .env 파일 경로 지정
import dotenv from 'dotenv';
import path from 'path';
dotenv.config({path:path.resolve(process.cwd(), '../.env')});

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
import userRouter from './routes/userRouter.js';
app.use('/api/user', userRouter);
import boardRouter from './routes/boardRouter.js'
app.use('/api/board', boardRouter);


// api 경로 충돌 방지 필요
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// React 앱을 위한 정적 파일 서빙
app.use(express.static(path.resolve(__dirname, 'public')));

// 그 외 모든 요청은 리액트 앱의 index.html로 리디렉션
// 리액트 라우터가 처리
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', '../index.html'));
});

const PORT=process.env.EXPRESS_PORT || 8080;

app.listen(PORT, ()=>{
    console.log(`Server run : http://localhost:${PORT}/`);
});