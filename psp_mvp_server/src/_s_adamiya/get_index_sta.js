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
    params = querystring.parse(params);
    if(params.p && params.p!='' && params.ln && params.ln!='') {
      var lll = new lib();
      var ep = lll.HexMD5(params.p);
      // console.log(ep);
      var addSql = "select * from user_info where login_name=? and pwd=? and is_deleted=0 and type_sn<>'master'";
      var addSqlParams = [params.ln, ep];
      connection.query(addSql, addSqlParams, function (err, rows, fields) {
        if (err) {
          console.log('[LOGIN ERROR] - ', err.message);
          res.send("Err");
        }
        else {
          console.log(rows);
          res.send(rows);
        }
      });
    }else {
      console.log('[LOGIN NO PARA] - ');
      res.send("Err");
    }
  });
  // var req=req;
  // var res=res;
  // var params = URL.parse(req.url, true).query;

})

module.exports = app
