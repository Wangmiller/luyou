//select.js
const express = require('express');
const http = require('http');
const app = express();
var router = express.Router();
const connection = require('../@api/mysql.js');//导入mysql 配置文件
var lib = require('../@api/lib');
var querystring = require('querystring');

app.post('/', function(req, res) {
  var params = "";
  req.on('data', function (chunk) {
    params += chunk;
  });
  req.on('end', function () {
    params = querystring.parse(params);
    if(params.id && params.id!='' && params.oldp && params.oldp!='' && params.newp && params.newp!='') {
      var lll = new lib();
      var epo = lll.HexMD5(params.oldp);
      var epn = lll.HexMD5(params.newp);
      var addSql = "update user_info set pwd=? where id=? and pwd=?";
      var addSqlParams = [epn, params.id, epo];
      connection.query(addSql, addSqlParams, function (err, result) {
        if (err) {
          console.log('[ERROR] - ', err.message);
          res.send("Err");
        }
        else {
          console.log(result);
          res.send(result);
        }
      });
    }else {
      console.log('[NO PARA]');
      res.send("Err");
    }
  });
})

module.exports = app
