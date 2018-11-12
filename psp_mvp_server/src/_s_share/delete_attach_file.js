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
    // console.log(params.tkey + params.fsn + params.esn);
    var sql = "update " + params.tkey + "_file set last_update_dt=?,is_deleted=1 where file_sn=? and " + params.tkey + "_sn=?";
    var sqlParams = [new Date(), params.fsn, params.esn];
    connection.query(sql, sqlParams, function (err, result) {
      if(err){
        console.log('[UPDATE ERROR] - ',err.message);
        return;
      }
      else {
        res.send("OK");
      }
    });
  });
})

module.exports = app
