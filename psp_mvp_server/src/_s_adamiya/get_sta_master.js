//select.js
const express = require('express');
const app = express();
const connection = require('../@api/mysql.js');//导入mysq配置文件
var querystring = require('querystring');

app.post('/', function(req, res) {
  var params = "";

  req.on('data', function (chunk) {
    params += chunk;
  });

  req.on('end', function () {
    params = querystring.parse(params);
    // console.log(params.sn);
    if(params.sn && params.sn!='') {
      var sql = "select (select count(id) from user_info where is_deleted=0) as TotalUserCount,"+
        "(select count(id) from enterprise_info where is_deleted=0) as TotalEnterpriseCount,"+
        "(select count(id) from product_info where is_deleted=0) as TotalProductCount,"+
        "(select count(id) from project_info where is_deleted=0) as TotalProjectCount,"+
        "(select count(id) from user_info where is_deleted=0) as TotalActiveUserCount,"+
        "(select count(distinct enterprise_sn) from cr_enterprise_industry where is_deleted=0) as TotalEnterpriseRelatedIndustryCount,"+
        "(select count(distinct enterprise_sn) from cr_enterprise_scene where is_deleted=0) as TotalEnterpriseRelatedSceneCount,"+
        "(select count(distinct product_sn) from cr_product_industry where is_deleted=0) as TotalProductRelatedIndustryCount,"+
        "(select count(distinct product_sn) from cr_product_scene where is_deleted=0) as TotalProductRelatedSceneCount,"+
        "last_update_dt from user_info where is_deleted=0 and is_na=0 limit 1";
      var sqlParams = [params.sn];
      connection.query(sql, sqlParams, function (err, rows, fields) {
        if (err) {
          console.log('[ERROR] - ', err.message);
          res.send("Err");
        }
        else {
          // console.log(rows);
          res.send(rows);
        }
      });
    }else {
      console.log('[NO PARA]');
      res.send("Err");
    }
  });
})

module.exports = app
