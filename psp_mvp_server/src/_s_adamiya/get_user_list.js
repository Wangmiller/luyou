const express = require('express');
const app = express();
const connection = require('../@api/mysql.js');//导入mysq配置文件
var querystring = require('querystring');

app.post('/', function(req, res) {
  var params = "";

  req.on('data', function (chunk) {
    params += chunk;
  });

  req.on('end', function () {
    params = querystring.parse(params);
    // console.log(params.sn);
    if(params.ut && params.ut!='') {
      var sql = "SELECT a.*, c.label AS enterprise_label,c.sn AS enterprise_sn FROM v_user a LEFT JOIN cr_enterprise_user b ON b.user_sn = a.sn LEFT JOIN enterprise_info c ON c.sn = b.enterprise_sn WHERE a.type_sn <> 'master' AND a.type_sn <> 'sa' AND a.type_sn = ? AND a.is_deleted = 0 AND a.sn <> '0' ORDER BY a.create_dt DESC";
      var sqlParams = [params.ut];
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
    }else {
      console.log('[NO PARA]');
      res.send("Err");
    }
  });
})

module.exports = app

