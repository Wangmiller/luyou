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
    var addSql = "insert into partner_visit_record (partner_sn,visitor,content,visit_date) values (?,?,?,?)";
    params = querystring.parse(params);
    var addSqlParams = [params.partner_sn, params.visitor, params.content, params.visit_date];
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
          var obj = {'sn':params.partner_sn}
        res.send(obj);
      }
    });
  });
  // var req=req;
  // var res=res;
  // var params = URL.parse(req.url, true).query;

})

module.exports = app
