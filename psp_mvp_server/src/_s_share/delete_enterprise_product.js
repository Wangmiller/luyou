//select.js
const express = require('express');
const app = express();
const connection = require('../@api/mysql.js');//导入mysql 配置文件
var URL = require('url');
var querystring = require('querystring');

app.post('/', function(req, res) {
  var params = "";
  req.on('data', function (chunk) {
    params += chunk;
  });
  req.on('end', function () {
    params = querystring.parse(params);
    var sql = "update product_info set enterprise_sn='0',last_update_dt=? where id=?";
    var sqlParams = [new Date(), params.id];
    connection.query(sql, sqlParams, function (err, result) {
      if(err){
        console.log('[UPDATE ERROR] - ',err.message);
        return;
      }
      else {
       res.send({success:"OK"});
       //res.send("OK");
      }
    });
  });
})

module.exports = app
