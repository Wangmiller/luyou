//select.js
const express = require('express');
const app = express();
const connection = require('../@api/mysql.js');

app.post('/', function(req, res) {
  var req=req;
  var res=res;

  var sql = "select * from v_project where is_deleted=0 and sn<>'0'";
  connection.query(sql, function(err, rows, fields) {
    if (err) {
      console.log('[query] - :' + err);
      return;
    }
    else{
      // console.log(rows)
      res.send(rows);  //这里在页面上输出数据
    }});
})

module.exports = app
