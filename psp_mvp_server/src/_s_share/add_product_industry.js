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
    var sql = "select * from cr_product_industry where product_sn=? and industry_sn=?";
    var sqlParams = [params.esn, params.ssn];
    connection.query(sql, sqlParams, function (err, rows, fields) {
      if (err) {
        console.log('[SQL ERROR] - ', err.message);
      }
      else {
        var addSql, addSqlParams;
        if(rows.length>0)
        {
          addSql = "update cr_product_industry set is_deleted=0,is_na=0 where product_sn=? and industry_sn=?";
          addSqlParams = [params.esn, params.isn];
        }
        else{
          addSql = "insert into cr_product_industry (sn,product_sn,industry_sn) values (?,?,?)";
          addSqlParams = [sn, params.esn, params.isn];
        }
        connection.query(addSql, addSqlParams, function (err, result) {
          if(err){
            console.log('[SQL ERROR] - ',err.message);
            return;
          }
          else {
            sql = "select industry_sn as sn,industry_label as label,'1' as is_checked from v_product_industry where is_deleted=0 and sn<>'0' and product_sn=?";
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
      }
    });
  });
})

module.exports = app
