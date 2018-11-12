//select.js
const express = require('express');
const http = require('http');
const app = express()
var router = express.Router();
const connection = require('../@api/mysql.js');//导入mysq配置文件

app.post('/', function(req, res) {
 var req=req;
 var res=res;

    var sql = "select * from user_info where sn<>'0'";
    connection.query(sql, function(err, rows, fields) {
        if (err) {
            console.log('[query] - :' + err);
            return;
        }
        else{
        // console.log(rows)
        res.send(rows);  //这里在页面上输出数据


    }});
})

module.exports = app
