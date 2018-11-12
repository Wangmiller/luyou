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
    // console.log(params.contact_dt);
    var lll = new lib();
    var sn = lll.GetUUID();
    var dt = new Date();
    var addSql = "insert into project_info (sn,label,custom_code,total_budget,creator_sn,enterprise_sn,plan_start_dt,plan_end_dt,real_start_dt,real_end_dt) values (?,?,?,?,?,?,?,?,?,?)";
    var addSqlParams = [sn, params.label, params.custom_code, params.total_budget, params.usn, params.enterprise_sn, dt, dt, dt, dt];
    connection.query(addSql, addSqlParams, function (err, result) {
      if(err){
        console.log('[INSERT ERROR] - ',err.message);
        return;
      }
      else {
       res.send({success:"OK"});
      }
    });
  });
  // var req=req;
  // var res=res;
  // var params = URL.parse(req.url, true).query;

})

module.exports = app
