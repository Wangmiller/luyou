//select.js
const express = require('express');
const app = express();
const connection = require('../@api/mysql.js');
var URL = require('url');
var lib = require('../@api/lib');
var querystring = require('querystring');

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
    if(params.p && params.p !='' && params.ln && params.ln !='') {
      var lll = new lib();
      var ep = lll.HexMD5(params.p);
      // console.log(ep);
      var addSql = "select * from v_user where login_name=? and pwd='" + ep + "' and is_deleted=0 and (type_sn='master' or type_sn='sa')";
      var addSqlParams = [params.ln];
      connection.query(addSql, addSqlParams, function (err, rows, fields) {
        if (err) {
          console.log('[LOGIN ERROR] - ', err.message);
          res.send("Err");
        }
        else {
          // console.log(rows);
          res.send(rows);
        }
      });
    }else {
      console.log('[LOGIN NO PARA] - ');
      res.send("Err");
    }
  });
  // var req=req;
  // var res=res;
  // var params = URL.parse(req.url, true).query;

})

module.exports = app
