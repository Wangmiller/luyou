//select.js
const express = require('express');
const app = express()
const connection = require('../@api/mysql.js');//导入mysq配置文件

app.post('/', function(req, res) {
  var req=req;
  var res=res;

  var sql = "select TJ.TJL AS label, count(TJ.TJP) AS newadded from (select Industry.label AS TJL,PRODUCT_MAP.product_sn AS TJP from (select sn,label from industry_info where is_deleted=0 and sn<>'0' order by display_code,label) Industry left join (SELECT industry_sn,product_sn FROM cr_product_industry where product_sn in (select product_sn from product_info where create_dt > date_sub(now(), interval 7 day) and is_deleted=0 and sn<>'0' ) ) PRODUCT_MAP on Industry.sn=PRODUCT_MAP.industry_sn) TJ group by TJ.TJL ";
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
