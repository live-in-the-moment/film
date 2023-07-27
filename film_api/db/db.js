const mysql = require('mysql');

// const sqlConfig=  {
//    host: 'localhost',
//    user: 'root',
//    password: 'pwd',
//    database: 'dbbase'
// }

const conn = mysql.createConnection({
   host:'localhost',    //数据库地址
   user:'root', //用户名
   password:'root', //密码
   database:'db_film' //数据库名
});


conn.connect();
module.exports = conn;