//select.js
const express = require('express');
const http = require('http');
const app = express();
var router = express.Router();
const connection = require('../@api/mysql.js');//导入mysql 配置文件
var querystring = require('querystring');

app.post('/', function(req, res) {
  var params = "";
  req.on('data', function (chunk) {
    params += chunk;
  });
  req.on('end', function () {
    params = querystring.parse(params);
    var addSql = "update user_info set label=?,position=?,mobile=?,email=?,tel=? where sn=?";
    var addSqlParams = [params.label, params.position, params.mobile, params.email, params.tel, params.sn];
    connection.query(addSql, addSqlParams, function (err, result) {
      if(err){
        console.log('[UPDATE ERROR] - ',err.message);
        return;
      }
      else {
        res.send(rows);
      }
    });
  });
})

module.exports = app
