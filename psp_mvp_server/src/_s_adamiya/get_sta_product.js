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
      var thisyear = new Date().getFullYear().toString();
      var lastyear = (new Date().getFullYear() - 1).toString();
      var thismonth = (new Date().getMonth() + 2).toString();
      var sql = "select (select count(distinct product_sn) from cr_product_industry where is_deleted=0 and year(create_dt)=?) as this_year_product_industry_count,"+
        "(select count(distinct product_sn) from cr_product_scene where is_deleted=0 and year(create_dt)=?) as this_year_product_scene_count,"+
        "(select count(id) from product_info where is_deleted=0 and year(create_dt)=?) as this_year_product_count,"+
        "(select count(id) from product_info where is_deleted=0) as all_product_count,"+
        "(select count(id) from product_info where is_deleted=0 and year(create_dt)=? and month(create_dt)<?) as last_year_product_count,"+
        "last_update_dt from user_info where is_deleted=0 and is_na=0 and sn=?";
      var sqlParams = [thisyear, thisyear, thisyear, lastyear, thismonth, params.sn];
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
