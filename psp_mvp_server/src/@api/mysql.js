﻿//mysql.js
var mysql = require('mysql'); //调用MySQL模块
//创建一个connection
var connection = mysql.createConnection({
    host: 'localhost', //主机
    user: 'root',     //数据库用户名
    password: 'root',     //数据库密码
    port: '3306',       
    database: 'selectionpool3', //数据库名称
    charset: 'UTF8_GENERAL_CI' //数据库编码
});

module.exports = connection

 
