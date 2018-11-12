//select.js
const express = require('express');
const app = express();
const connection = require('../@api/mysql.js');//导入mysql 配置文件
var URL = require('url');
var querystring = require('querystring');

app.post('/', function(req, res) {
  var params = "";
  req.on('data', function (chunk) {
    params += chunk;
  });
  req.on('end', function () {
    params = querystring.parse(params);
    //console.log(params.en + params.id);
    var addSql = "update " + params.en + " set label=?,custom_code=?,display_code=?,is_deleted=0,is_na=0,last_update_dt=? where id=?";
    var addSqlParams = [params.label, params.custom_code, params.display_code, new Date(), params.id];
    connection.query(addSql, addSqlParams, function (err, result) {
      if(err){
        console.log('[UPDATE ERROR] - ',err.message);
        return;
      }
      else {
        console.log('[UPDATE OK]');
        res.send({success:"OK"});
      }
    });
  });
})

module.exports = app
