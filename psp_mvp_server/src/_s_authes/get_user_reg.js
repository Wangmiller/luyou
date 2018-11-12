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
    var sqlpara = [params.ln];
    connection.query(sql, sqlpara, function (err, rows, fields) {
      if (err) {
        console.log('[GET OLD ERROR] - ', err.message);
        return;
      } else {
        // console.log(rows.length);
        if (rows.length === 0) {
          var lll = new lib();
          var sn = lll.GetUUID();
          var ep = lll.HexMD5(params.p);
          var addSql = "insert into user_info (sn,login_name,pwd,type_sn) values (?,?,?,'user')";
          var addSqlParams = [sn, params.ln, ep];
          connection.query(addSql, addSqlParams, function (err, result) {
            if (err) {
              console.log('[INSERT ERROR] - ', err.message);
              return;
            }
            else {
              var sql = "select * from v_user where sn=? and is_deleted=0 and sn<>'0'";
              var sqlParams = [sn];
              connection.query(sql, sqlParams, function(err, rows, fields) {
                if (err) {
                  console.log('[query] - :' + err);
                  return;
                }else {
                  // console.log(rows);
                  res.send(rows);  //这里在页面上输出数据
                }});
            }
          });
        }
      }
    });
  });
})

module.exports = app
