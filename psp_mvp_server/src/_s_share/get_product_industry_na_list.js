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
    if(params.sn && params.sn!='') {
      var sql = "select sn,label,'0' as is_checked from industry_info where is_deleted=0 and sn<>'0' and sn not in (select industry_sn from v_product_industry where is_deleted=0 and sn<>'0' and product_sn=?)";
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
