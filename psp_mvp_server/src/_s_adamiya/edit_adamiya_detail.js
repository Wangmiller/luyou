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
    var sql = "select * from user_info where (sn<>? and login_name=?) or (sn<>? and cn_id=?)";
    var sqlpara = [params.sn, params.login_name, params.sn, params.cn_id];
    connection.query(sql, sqlpara, function (err, rows, fields) {
      if(err){
        console.log('[UPDATE ERROR] - ',err.message);
        return;
      } else {
        // console.log(rows.length);
        if(rows.length === 0) {
          var addSql = "update user_info set " +
            "label=?," +
            "custom_code=?," +
            "login_name=?," +
            "last_update_dt=?," +
            "display_code=?," +
            "is_deleted=?," +
            "is_na=?," +
            "class_sn=?," +
            "type_sn=?," +
            "status_sn=?," +
            "level_sn=?," +
            "cn_id=?," +
            "more_info=?," +
            "seo_tag=?," +
            " where sn=?";
          var nowdt = new Date();
          var addSqlParams = [params.label,
            params.custom_code,
            params.login_name,
            nowdt,
            params.display_code,
            params.is_deleted,
            params.is_na,
            params.class_sn,
            params.type_sn,
            params.status_sn,
            params.level_sn,
            params.cn_id,
            params.more_info,
            params.seo_tag,
            params.sn];
          connection.query(addSql, addSqlParams, function (err, result) {
            if (err) {
              console.log('[UPDATE ERROR] - ', err.message);
              return;
            }
            else {
              res.send(rows);
            }
          });
        } else {
          res.send(rows);
        }
      }
    });
  });
})

module.exports = app
