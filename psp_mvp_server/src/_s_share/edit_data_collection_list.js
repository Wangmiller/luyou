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
    var sql = "SELECT * FROM scene_info WHERE label =?";
    var sqlParams =[params.label];
      connection.query(sql, sqlParams, function (err, rows, fields) {
          if (err) {
              console.log('[SELECT * FROM scene_info WHERE label =?] - ', err.message);
              res.send({'status': 'err'});
          }
          else {
              var addSql = "UPDATE cf_product_info SET scene_sn =? WHERE sn =?";
              var addSqlParams = [rows[0].sn, params.sn];
              connection.query(addSql, addSqlParams, function (err, result) {
                  if (err) {
                      console.log('[UPDATE cf_product_info SET scene_sn =? WHERE sn =?] - ', err.message);
                      res.send({'status': 'err'});
                  }
                  else {
                      res.send({'status': 'ok'});
                  }
              });
          }
      });
    /*var addSql = "UPDATE cf_product_info SET scene_sn =? WHERE sn =?";
    var addSqlParams = [sceneSn, params.sn];
      console.log(addSqlParams);
    connection.query(addSql, addSqlParams, function (err, result) {
      if (err) {
        console.log('[UPDATE cf_product_info SET scene_sn =? WHERE sn =?] - ', err.message);
        return;
      }
      else {
        res.send("OK");
      }
    });*/
  });
})

module.exports = app
