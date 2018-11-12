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
    if(params.label && params.label !='' && params.display_code && params.display_code !='') {
      var sql = "select * from " + params.en + " where (label=?)";
      var sqlpara = [params.label];
      connection.query(sql, sqlpara, function (err, rows, fields) {
        if (err) {
          console.log('[UPDATE ERROR] - ', err.message);
          return;
        } else {
          // console.log(rows.length);
          if (rows.length === 0) {
            var lll = new lib();
            var sn = lll.GetUUID();
            var addSql = "insert into " + params.en + " (sn,label,display_code) values (?,?,?)";
            var addSqlParams = [sn, params.label, params.display_code];
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
          }
        }
      });
    }else {
      console.log('[UPDATE NO PARA] - ');
      res.send("Error");
    }
  });
  // var req=req;
  // var res=res;
  // var params = URL.parse(req.url, true).query;

})

module.exports = app
