//select.js
const express = require('express');
const app = express();
const connection = require('../@api/mysql.js');//导入mysql 配置文件
var querystring = require('querystring');

app.post('/', function(req, res) {
  var params = "";
  req.on('data', function (chunk) {
    params += chunk;
  });
  req.on('end', function () {
    params = querystring.parse(params);
    var addSql = "update project_info set label=?,custom_code=?,total_budget=?,contact_dt=?,last_update_dt=? where sn=?";
    var addSqlParams = [params.label, params.custom_code, params.total_budget, params.contact_dt, new Date(), params.sn];
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
