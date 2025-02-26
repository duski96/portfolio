import mysql from 'mysql2';
 
const db = mysql.createPool({
    host:'localhost',
    user:'manager',
    password:'1111',
    database:'mini_lifestyle'
});

export default db;