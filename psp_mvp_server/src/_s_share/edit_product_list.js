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
    var addSql = "update product_info set label=?,custom_code=?,sku=?,moq=?,price_sale=?,price_out=?,moq_unit=?,enterprise_sn=?,last_update_dt=? where sn=?";
    var addSqlParams = [params.label, params.custom_code||'', params.sku||'', params.moq||0, params.price_sale||0, params.price_out||0, params.moq_unit||'', params.enterprise_sn||'0',new Date(), params.sn];
    console.log('aaa ');
    console.log(params.enterprise_sn);
    connection.query(addSql, addSqlParams, function (err, rows, result) {
      if (err) {
        console.log('[UPDATE ERROR] - ', err.message);
        return;
      }
      else {
        res.send(rows);
      }
    });
  });
})

module.exports = app
