//select.js
const express = require('express');
const app = express();
const connection = require('../@api/mysql.js');
const querystring = require('querystring');
app.post('/', function (req, res) {

  var params = "";

  req.on('data', function (chunk) {
    params += chunk;
  });

  req.on('end', function () {
    params = querystring.parse(params);
    console.log(params);
    var sql="";
    if (params && params.sn != '') {
      sql = "select pl.* , pi.label as product_name , pi.seo_tag as product_desc from partner_list pl LEFT JOIN product_info pi ON pl.product_id = pi.id  where pl.sn=? and pl.is_deleted=0 ";
      var addSqlParams = [params.sn];
      connection.query(sql, addSqlParams, function (err, rows, fields) {
          if (err) {
              console.log('[ERROR] - ', err.message);
              res.send("Err");
          }
          else {
              // console.log(rows);
              res.send(rows);
          }
      });
    }
  });
});
module.exports = app;
