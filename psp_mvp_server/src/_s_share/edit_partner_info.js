//select.js
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
    var addSql = "update partner_list set company_name = ?,company_address = ?,industry_id = ?,product_id = ?,first_visit_time = ?,first_visitor = ? where sn = ?";
    params = querystring.parse(params);
    console.log(params.sn);
    var addSqlParams = [params.company_name||'', params.company_address, params.industry_id, params.product_id, params.first_visit_time||'', params.first_visitor||'', params.sn];
    // 设置响应头部信息及编码
    // res.writeHead(200, {'Content-Type': 'text/html; charset=utf8'});
    connection.query(addSql, addSqlParams, function (err, rows, fields) {
      if(err){
        console.log('[INSERT ERROR] - ',err.message);
        var obj = {'err':'更新失败，请联系系统管理员'};
        res.send(obj);
        return;
      }
      else {
        console.log('[INSERT OK]'+fields);
        // res.send(sn);
        var obj = {'sn':params.sn}
        res.send(obj);
      }
    });
  });
  // var req=req;
  // var res=res;
  // var params = URL.parse(req.url, true).query;

})

module.exports = app
