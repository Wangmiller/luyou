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
    var sql = "select * from user_info where sn<>? and login_name=?";
    var sqlpara = [params.sn, params.login_name];
    connection.query(sql, sqlpara, function (err, rows, fields) {
      if(err){
        console.log('[UPDATE ERROR] - ',err.message);
        return;
      } else {
        // console.log(rows.length);
        if(rows.length === 0) {
          var addSql = "update user_info set label=?,position=?,mobile=?,email=?,tel=?,login_name=? where sn=? and type_sn='master'";
          var addSqlParams = [params.label, params.position, params.mobile, params.email, params.tel, params.login_name, params.sn];
          connection.query(addSql, addSqlParams, function (err, result) {
            if(err){
              console.log('[UPDATE ERROR] - ',err.message);
              return;
            }
            else {
             res.send({success:"OK"});
            }
          });
        } else {
          res.send(rows);
        }
      }
    });
  });
})

module.exports = app
