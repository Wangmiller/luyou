//select.js
const express = require('express');
const app = express();
const connection = require('../@api/mysql.js');//导入mysq配置文件

app.post('/', function(req, res) {
  var req=req;
  var res=res;

  var sql = "select year(create_dt) as yyyy,month(create_dt) as mm from v_product_industry " +
    "where is_deleted=0 and is_na=0 group by year(create_dt),month(create_dt) order by yyyy,mm";
  connection.query(sql, function(err, rows, fields) {
    if (err) {
      console.log('[query] - :' + err);industry
      return;
    }
    else{
      // console.log(rows)
      res.send(rows);  //这里在页面上输出数据
    }});
})

module.exports = app
