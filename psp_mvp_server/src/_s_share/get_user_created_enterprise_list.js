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
    if(params.usn && params.usn!='') {
      var sql = "select * from v_enterprise where creator_sn=? and is_deleted=0 and sn<>'0' order by label";
      var sqlParams = [params.usn];
      connection.query(sql, sqlParams, function (err, rows, fields) {
        if (err) {
          console.log('[ERROR] - ', err.message);
            res.send({failure:"Err"});
        }
        else {
          // console.log(rows);
          res.send(rows);
        }
      });
    }else {
      console.log('[NO PARA]');
        res.send({failure:"Err"});
    }
  });
})

module.exports = app
