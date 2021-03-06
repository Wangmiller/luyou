﻿//select.js
const express = require('express');
const http = require('http');
const app = express();
var router = express.Router();
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
    var addSql = "insert into partner_list (sn,company_name,company_address,industry_id,product_id,first_visit_time,first_visitor,create_dt) values (?,?,?,?,?,?,?,'NOW()')";
    params = querystring.parse(params);
    var addSqlParams = [sn, params.company_name||'', params.company_address, params.industry_id, params.product_id, params.first_visit_time||'', params.first_visitor||''];
    // 设置响应头部信息及编码
    // res.writeHead(200, {'Content-Type': 'text/html; charset=utf8'});
    connection.query(addSql, addSqlParams, function (err, rows, fields) {
      if(err){
        console.log('[INSERT ERROR] - ',err.message);
        return;
      }
      else {
        console.log('[INSERT OK]'+fields);
        // res.send(sn);
          var obj = {'sn':sn}
        res.send(obj);
      }
    });
  });
  // var req=req;
  // var res=res;
  // var params = URL.parse(req.url, true).query;

})

module.exports = app
