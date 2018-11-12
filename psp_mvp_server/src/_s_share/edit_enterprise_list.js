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
    // console.log(params.type_sn);
    var sql = "select * from enterprise_info where (sn<>? and label=?)";
    var sqlpara = [params.sn, params.label];
    connection.query(sql, sqlpara, function (err, rows, fields) {
      if(err){
        console.log('[UPDATE ERROR] - ',err.message);
        return;
      } else {
        // console.log(rows.length);
        if(rows.length === 0) {
          var addSql = "update enterprise_info set label=?,type_sn=?,status_sn=?,level_sn=?,other_credits=?,seo_tag=?,basic_nda=?,basic_dic_match_status_sn=?,basic_is_lenovo=?,last_update_dt=? where sn=?";
          var addSqlParams = [params.label, params.type_sn, params.status_sn, params.level_sn, params.other_credits, params.seo_tag, params.basic_nda, params.basic_dic_match_status_sn, params.basic_is_lenovo, new Date(), params.sn];
          connection.query(addSql, addSqlParams, function (err, result) {
            if (err) {
              console.log('[UPDATE ERROR] - ', err.message);
              return;
            }
            else {
              res.send({success:'OK'});

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
