//select.js
const express = require('express');
const app = express();
const connection = require('../@api/mysql.js');//导入mysql 配置文件
var querystring = require('querystring');

app.post('/', function(req, res) {
  var params = "";

  req.on('data', function (chunk) {
    params += chunk;
  });

  req.on('end', function () {
    params = querystring.parse(params);
    if(params.sn && params.sn!='') {
      var addSql = "select * from v_enterprise where sn=?";
      var addSqlParams = [params.sn];
      connection.query(addSql, addSqlParams, function (err, rows, fields) {
        if (err) {
          console.log('[ERROR] - ', err.message);
          res.send({failure:"Err"});
        }
        else {
          // console.log(rows);
          res.send(rows);
        }
      });
    }else {
      console.log('[NO PARA]');
      res.send({failure:"Err"});
    }
  });
})

module.exports = app
