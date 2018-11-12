//select.js
const express = require('express');
const app = express();
const connection = require('../@api/mysql.js');
var querystring = require('querystring');

app.post('/', function(req, res) {
  var params='';
  req.setEncoding('utf8');

  req.on('data', function(chunk) {
    params += chunk;
    // console.log(chunk);
  });

  req.on('end', function () {
    params = querystring.parse(params);
    if(params.en && params.en!='') {
      var sql;
      if( params.en==='master_info') {
        sql = "select * from user_info where type_sn='master' and is_deleted=1 and sn<>'0'";
      }else if( params.en==='user_info') {
        sql = "select * from user_info where type_sn<>'master' and type_sn<>'sa' and is_deleted=1 and sn<>'0'";
      }else {
        sql = "select * from "+ params.en +" where is_deleted=1 and sn<>'0'";
      }
      var sqlParams = [params.en];
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
