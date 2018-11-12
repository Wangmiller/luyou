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
    var sql = "update cr_product_industry set is_deleted=1,is_na=1 where product_sn=? and industry_sn=?";
    var sqlParams = [params.esn, params.isn];
    connection.query(sql, sqlParams, function (err, rows, fields) {
      if (err) {
        console.log('[SQL ERROR] - ', err.message);
      }
      else {
        sql = "select sn,label,'0' as is_checked from industry_info where is_deleted=0 and sn<>'0' and sn not in (select industry_sn from v_product_industry where is_deleted=0 and sn<>'0' and product_sn=?)";
        sqlParams = [params.esn];
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
  });
})

module.exports = app
