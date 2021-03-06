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
    var addSql = "update partner_contract set partner_sn = ?,contract_name = ?,contract_position = ?,contract_phone = ?,contract_wechat = ? where id = ?";
    params = querystring.parse(params);
    var addSqlParams = [params.partner_sn, params.contract_name, params.contract_position, params.contract_phone, params.contract_wechat, params.id];
    // 设置响应头部信息及编码
    // res.writeHead(200, {'Content-Type': 'text/html; charset=utf8'});
    connection.query(addSql, addSqlParams, function (err, rows, fields) {
      if(err){
        console.log('[INSERT ERROR] - ',err.message);
        return;
      }
      else {
        console.log('[INSERT OK]'+params.id);
        // res.send(sn);
        var obj = {'id': params.id}
        res.send(obj);
      }
    });
  });
  // var req=req;
  // var res=res;
  // var params = URL.parse(req.url, true).query;

})

module.exports = app
