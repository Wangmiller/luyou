//select.js
const express = require('express');
const app = express();
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
    if(params.sn && params.sn!='') {
      var lll = new lib();
      var ep = lll.HexMD5('999999');
      var addSql = "update user_info set pwd=? where sn=?";
      var addSqlParams = [ep, params.sn];
      connection.query(addSql, addSqlParams, function (err, result) {
        if (err) {
          console.log('[ERROR] - ', err.message);
          res.send("Err");
        }
        else {
          // console.log(result);
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
