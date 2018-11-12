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
    var lll = new lib();
    var usersn = lll.GetUUID();
    var addSql = "insert into user_info (sn,label,type_sn,position,mobile,email,tel,creator_sn) values (?,?,?,?,?,?,?,?)";
    var addSqlParams = [usersn, params.label, params.type_sn, params.position, params.mobile, params.email, params.tel, params.usn];
    // 设置响应头部信息及编码
    // res.writeHead(200, {'Content-Type': 'text/html; charset=utf8'});
    connection.query(addSql, addSqlParams, function (err, result) {
      if (err) {
        console.log('[INSERT ERROR] - ', err.message);
        return;
      }
      else {
        var sn = lll.GetUUID();
        addSql = "insert into cr_enterprise_user (sn,enterprise_sn,user_sn,creator_sn) values (?,?,?,?)";
        addSqlParams = [sn, params.esn, usersn, params.usn];
        // 设置响应头部信息及编码
        // res.writeHead(200, {'Content-Type': 'text/html; charset=utf8'});
        connection.query(addSql, addSqlParams, function (err, result) {
          if (err) {
            console.log('[INSERT ERROR] - ', err.message);
            return;
          }
          else {
            var sql = "select * from v_enterprise_user where is_deleted=0 and sn<>'0' and enterprise_sn=? order by user_label";
            var sqlParams = [params.esn];
            connection.query(sql, sqlParams, function (err, rows, fields) {
              if (err) {
                console.log('[ERROR] - ', err.message);
                res.send("Err");
              }
              else {
                // console.log(rows);
                res.send(rows);
              }
            });
          }
        });
      }
    });
  });
})

module.exports = app
