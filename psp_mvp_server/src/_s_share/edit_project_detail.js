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
    var addSql = "update project_info set " +
      "label=?," +
      "custom_code=?," +
      "last_update_dt=?," +
      "display_code=?," +
      "is_deleted=?," +
      "is_na=?," +
      "class_sn=?," +
      "type_sn=?," +
      "status_sn=?," +
      "level_sn=?," +
      "more_info=?," +
      "seo_tag=?," +
      "contact_dt=?," +
      "total_budget=?," +
      "main_content=?," +
      "plan_start_dt=?," +
      "plan_end_dt=?," +
      "real_start_dt=?," +
      "real_end_dt=?," +
      " where id=?";
    var nowdt = new Date();
    var addSqlParams = [params.label,
      params.custom_code,
      nowdt,
      params.display_code,
      params.is_deleted,
      params.is_na,
      params.class_sn,
      params.type_sn,
      params.status_sn,
      params.level_sn,
      params.more_info,
      params.seo_tag,
      params.contact_dt,
      params.total_budget,
      params.main_content,
      params.plan_start_dt,
      params.plan_end_dt,
      params.real_start_dt,
      params.real_end_dt,
      params.id];
    connection.query(addSql, addSqlParams, function (err, result) {
      if(err){
        console.log('[UPDATE ERROR] - ',err.message);
        return;
      }
      else {
        res.send("OK");
      }
    });
  });
})

module.exports = app
