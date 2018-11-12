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
    var sql = "SELECT t1.*,t2.enterprise_name,t2.address,t2.telphone,t2.mail FROM cf_product_info t1 LEFT JOIN cf_enterprise_info t2 ON t1.enterprise_sn = t2.sn where t1.sn =?";
    var sqlParams = [params.sn];
    connection.query(sql, sqlParams, function (err, rows, fields) {
      if (err) {
        console.log('[SQL ERROR] - ', err.message);
      }
      else {
        if(rows.length>0)
        {
          var addSqlP = "insert into product_info (sn,label,enterprise_sn,seo_tag) values (?,?,?,?)";
          var addSqlParamsP = [rows[0].sn, rows[0].product_name, rows[0].enterprise_sn, rows[0].keyword];
          var addSqlE = "insert into enterprise_info (sn,label,basic_biz_address,basic_biz_tel,other_email) values (?,?,?,?,?)";
          var addSqlParamsE = [rows[0].enterprise_sn, rows[0].enterprise_name, rows[0].address, rows[0].telphone, rows[0].mail];
          var selsqlP = "SELECT * FROM product_info WHERE sn =?";
          var selsqlParamsP = [rows[0].sn];
          var selsqlE = "SELECT * FROM enterprise_info WHERE sn =?";
          var selsqlParamsE = [rows[0].enterprise_sn];
          connection.query(selsqlP, selsqlParamsP, function (err, rows, fields) {
              if (err) {
                  console.log('[ERROR] - ', err.message);
                  res.send("Err");
              }
              else {
                  if(rows.length>0){
                      connection.query(selsqlE, selsqlParamsE, function (err, rows, fields) {
                          if (err) {
                              console.log('[ERROR] - ', err.message);
                              res.send({'status': '产品已存在选品池，企业加入选品池失败'});
                          }
                          else {
                              if(rows.length>0){
                                  res.send({'status': '产品，企业已存在选品池'});
                              }else{
                                  connection.query(addSqlE, addSqlParamsE, function (err, result) {
                                      if(err){
                                          console.log('[insert into enterprise_info] - ',err.message);
                                          res.send({'status': '产品已存在选品池，企业加入选品池失败'});
                                      }
                                      else {
                                          res.send({'status': '产品已存在选品池，企业加入选品池成功'});
                                      }
                                  });
                              }
                          }
                      });
                  }else{
                      connection.query(addSqlP, addSqlParamsP, function (err, result) {
                          if(err){
                              console.log('[insert into product_info] - ',err.message);
                              res.send({'status': '产品，企业加入选品池失败'});
                          }
                          else {
                              connection.query(selsqlE, selsqlParamsE, function (err, rows, fields) {
                                  if (err) {
                                      console.log('[ERROR] - ', err.message);
                                      res.send({'status': '产品加入选品池成功，企业加入选品池失败'});
                                  }
                                  else {
                                      if(rows.length>0){
                                          res.send({'status': '产品加入选品池成功，企业已存在选品池'});
                                      }else{
                                          connection.query(addSqlE, addSqlParamsE, function (err, result) {
                                              if(err){
                                                  console.log('[insert into enterprise_info] - ',err.message);
                                                  res.send({'status': '产品加入选品池成功，企业加入选品池失败'});
                                              }
                                              else {
                                                  res.send({'status': '产品，企业加入选品池成功'});
                                              }
                                          });
                                      }
                                  }
                              });
                          }
                      });
                  }
              }
          });
        }
      }
    });
  });
})

module.exports = app
