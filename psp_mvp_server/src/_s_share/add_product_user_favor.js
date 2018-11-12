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
    var lll = new lib();
    var sn = lll.GetUUID();
    params = querystring.parse(params);
    var sql = "select * from cr_user_product where is_favor=1 and product_sn=? and user_sn=?";
    var sqlParams = [params.psn, params.usn];
    connection.query(sql, sqlParams, function (err, rows, fields) {
      if (err) {
        console.log('[SQL ERROR] - ', err.message);
      }
      else {
        var addSql, addSqlParams;
        if(rows.length>0)
        {
          addSql = "update cr_user_product set last_update_dt=?,is_deleted=0,is_na=0 where is_favor=1 and product_sn=? and user_sn=?";
          addSqlParams = [new Date(), params.psn, params.usn];
        }
        else{
          addSql = "insert into cr_user_product (sn,product_sn,user_sn,is_favor) values (?,?,?,1)";
          addSqlParams = [sn, params.psn, params.usn];
        }
        connection.query(addSql, addSqlParams, function (err, result) {
          if(err){
            console.log('[SQL ERROR] - ',err.message);
            return;
          }
          else {
            sql = "select * from cr_user_product where is_favor=1 and product_sn=? and user_sn=?";
            sqlParams = [params.psn, params.usn];
            connection.query(sql, sqlParams, function (err, rows, fields) {
              if (err) {
                console.log('[ERROR] - ', err.message);
                res.send("Err");
              }
              else {
                res.send(rows);
              }
            });
          }
        });
      }
    });
  });
})

module.exports = app
