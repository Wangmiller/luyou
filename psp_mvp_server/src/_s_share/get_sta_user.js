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
      var sql = "select (select count(id) from enterprise_info where is_deleted=0 and creator_sn=?) as TotalUserEnterpriseCount,"+
        "(select count(id) from product_info where is_deleted=0 and creator_sn=?) as TotalUserProductCount,"+
        "(select count(id) from project_info where is_deleted=0 and creator_sn=?) as TotalUserProjectCount,"+
        "(select count(id) from file_info where is_deleted=0 and creator_sn=?) as TotalUserFileCount,"+
        "(select count(id) from enterprise_info where is_deleted=0 and current_lenovo_user_sn<>'0' and creator_sn=?) as TotalEnterpriseLenovoCount,"+
        "(select count(distinct product_sn) from v_user_product where is_favor=1 and is_deleted=0 and creator_sn=?) as TotalProductFavoredCount,"+
        "(select count(id) from project_info where is_deleted=0 and lenovo_user_sn<>'0' and creator_sn=?) as TotalProjectLenovoCount,"+
        "(select count(distinct product_sn) from cr_user_product where is_deleted=0 and user_sn=?) as TotalProductFavorCount,"+
        "last_update_dt from user_info where is_deleted=0 and is_na=0 and sn=?";
      var sqlParams = [params.sn, params.sn, params.sn, params.sn, params.sn, params.sn, params.sn, params.sn, params.sn];
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
