//select.js
const express = require('express');
const app = express();
const connection = require('../@api/mysql.js');//导入mysql 配置文件
var URL = require('url');
var lib = require('../@api/lib');
var querystring = require('querystring');
var fs = require('fs');

app.get('/', function(req, res) {

  var fsn = req.query.sn;
  // console.log(fsn);
  var sql = "select file_save_path from file_info where sn=?";
  var sqlParams = [fsn];
  connection.query(sql, sqlParams, function (err, rows, fields) {
    if (err) {
      console.log('[ERROR] - ', err.message);
      res.send("Err");
    }
    else {
      console.log(rows[0]['file_save_path']);
      res.sendfile(rows[0]['file_save_path']);
      // var new_path = "./upload/"+params.tkey+"/"+params.elabel+"/"+params.flabel;
      // var f = fs.createReadStream(new_path);
      // res.writeHead(200, {
      //  'Content-Type': 'application/force-download',
      //  'Content-Disposition': 'attachment; filename='+ encodeURI(datas.name) + '.zip'
      // });
      // f.pipe(res);
    }
  });

});

module.exports = app;
