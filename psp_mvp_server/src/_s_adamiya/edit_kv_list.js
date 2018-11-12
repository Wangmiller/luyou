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
    params = querystring.parse(params);
    if(params.sn && params.sn !='' && params.label && params.label !='' && params.display_code && params.display_code !='') {
      var sql = "select * from " + params.en + " where (sn<>? and label=?)";
      var sqlpara = [params.sn, params.label];
      connection.query(sql, sqlpara, function (err, rows, fields) {
        if (err) {
          console.log('[UPDATE ERROR] - ', err.message);
          return;
        } else {
          // console.log(rows.length);
          if (rows.length === 0) {
            var nowdt = new Date();
            var addSql = "update " + params.en + " set last_update_dt=?,label=?,display_code=? where sn=?";
            var addSqlParams = [nowdt, params.label, params.display_code, params.sn];
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
