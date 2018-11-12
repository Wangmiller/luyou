//select.js
const express = require('express');
const app = express();
const connection = require('../@api/mysql.js');//导入mysql 配置文件
var URL = require('url');
var lib = require('../@api/lib');
var querystring = require('querystring');

app.post('/', function(req, res) {
  var params = "";
  req.on('data', function (chunk) {
    params += chunk;
  });
  req.on('end', function () {
    params = querystring.parse(params);
    var sql = "select * from user_info where login_name=?";
    var sqlpara = [params.login_name];
    connection.query(sql, sqlpara, function (err, rows, fields) {
      if (err) {
        console.log('[GET OLD ERROR] - ', err.message);
        return;
      } else {
        // console.log(rows.length);
        if (rows.length === 0 || params.login_name === '') {
          var lll = new lib();
          var sn = lll.GetUUID();
          var addSql = "insert into user_info (sn,label,login_name,type_sn,position,mobile,email,tel,creator_sn) values (?,?,?,?,?,?,?,?,?)";
          var addSqlParams = [sn, params.label, params.login_name, params.type_sn, params.position, params.mobile, params.email, params.tel, params.usn];
          // 设置响应头部信息及编码
          // res.writeHead(200, {'Content-Type': 'text/html; charset=utf8'});
          connection.query(addSql, addSqlParams, function (err, result) {
            if (err) {
              console.log('[INSERT ERROR] - ', err.message);
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
