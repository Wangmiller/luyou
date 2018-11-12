//select.js
const express = require('express');
const http = require('http');
const app = express();
var router = express.Router();
const connection = require('../@api/mysql.js');//导入mysql 配置文件
var querystring = require('querystring');

app.post('/', function(req, res) {
  var params = "";
  req.on('data', function (chunk) {
    params += chunk;
  });
  req.on('end', function () {
    params = querystring.parse(params);
    var addSql = "delete from "+ params.en +" where id=?";
    var addSqlParams = [params.id];
    connection.query(addSql, addSqlParams, function (err, result) {
      if(err){
        console.log('[UPDATE ERROR] - ',err.message);
        return;
      }
      else {
        res.send({success:"OK"});
      }
    });
  });
})

module.exports = app
