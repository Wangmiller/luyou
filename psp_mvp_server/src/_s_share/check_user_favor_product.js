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
    var sql = "select * from cr_user_product where is_favor=1 and is_deleted=0 and product_sn=? and user_sn=?";
    var sqlParams = [params.psn, params.usn];
    connection.query(sql, sqlParams, function (err, rows, fields) {
      if (err) {
        console.log('[SQL ERROR] - ', err.message);
      }
      else {
         res.send(rows);
      }
    });
  });
})

module.exports = app
