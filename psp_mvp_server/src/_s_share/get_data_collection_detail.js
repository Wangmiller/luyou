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
    //console.log(params)
    params = querystring.parse(params);
    if(params.product_sn && params.product_sn!='') {
      // var addSql = "select * from data_collection_list where title=?";
      var addSql = "SELECT * FROM cf_product_info t1 LEFT JOIN cf_enterprise_info t2 ON t1.enterprise_sn = t2.sn WHERE t1.sn=?";
      var addSqlParams = [params.product_sn];
      // console.log(params.product_sn);
      connection.query(addSql, addSqlParams, function (err, rows, fields) {
        if (err) {
          console.log('[ERROR] - ', err.message);
          res.send("Err");
        }
        else {
          // console.log(rows);
          console.log('数据采集详情')
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
