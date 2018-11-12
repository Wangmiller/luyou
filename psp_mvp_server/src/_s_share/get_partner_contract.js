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
    if (params && params.partner_sn != '') {
      sql = "select * from partner_contract  where partner_sn = ? order by create_date desc";
      var addSqlParams = [params.partner_sn];
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
