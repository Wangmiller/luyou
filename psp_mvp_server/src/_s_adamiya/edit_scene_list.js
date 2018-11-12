//select.js
const express = require('express');
const app = express();
const connection = require('../@api/mysql.js');
var querystring = require('querystring');
var URL = require('url');

app.post('/', function(req, res) {
  var params='';
  req.setEncoding('utf8');

  req.on('data', function(chunk) {
    params += chunk;
    // console.log(chunk);
  });

  req.on('end', function () {
    // console.log(params);
    params = querystring.parse(params);
    if(params.custom_code && params.label && params.label !='' && params.display_code && params.display_code !='' && params.sn && params.sn !='' && params.seo_tag && params.seo_tag !='') {
      var sql = "select * from scene_info where (sn<>? and label=?) or (sn<>? and custom_code=?)";
      var sqlpara = [params.sn, params.label, params.sn, params.custom_code];
      connection.query(sql, sqlpara, function (err, rows, fields) {
        if (err) {
          console.log('[UPDATE ERROR] - ', err.message);
          return;
        } else {
          // console.log(rows.length);
          if (rows.length === 0) {
            var addSql = "update scene_info set custom_code=?,label=?,seo_tag=?,display_code=? where sn=?";
            var addSqlParams = [params.custom_code, params.label, params.seo_tag, params.display_code, params.sn];
            connection.query(addSql, addSqlParams, function (err, rows, fields) {
              if (err) {
                console.log('[UPDATE ERROR] - ', err.message);
                res.send("Error");
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
    }else {
      console.log('[UPDATE NO PARA] - ');
      res.send("Error");
    }
  });
})

module.exports = app
