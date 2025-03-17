import mysql from 'mysql2';

// env 파일 경로 지정
// server.js 파일에서 외부 경로로 한 번 빠지기 때문에 같은 .env 파일을 참조하려면 경로에 신경써야 함
import dotenv from 'dotenv';
import path from 'path';
dotenv.config({path:path.resolve(process.cwd(), '../.env')});
 
const db = mysql.createPool({
    host:process.env.MYSQLHOST,
    user:process.env.MYSQLUSER,
    password:process.env.MYSQLPASSWORD,
    database:process.env.MYSQL_DATABASE
});

export default db;