//select.js
const express = require('express');
const app = express();
const connection = require('../@api/mysql.js');
var querystring = require('querystring');

app.post('/', function(req, res) {
  var params = "";

  req.on('data', function (chunk) {
    params += chunk;
  });

  req.on('end', function () {
    params = querystring.parse(params);
    if(params.sn && params.sn!='') {
      var sql = "select * from v_enterprise_file where ef_is_deleted=0 and file_sn<>'0' and enterprise_sn=?";
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
