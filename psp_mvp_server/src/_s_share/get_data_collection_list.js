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
/*    if(params.sn && params.sn!='') {*/
      //var sql = "SELECT * FROM data_collection_list where is_deleted = 0";
      var sql = "SELECT t1.product_name,t1.sn,t1.enterprise_sn,t1.source,t2.enterprise_name,t3.label,t1.project_status,t1.progress,t1.supporter,t1.detail_url FROM cf_product_info t1 LEFT JOIN cf_enterprise_info t2 ON t1.enterprise_sn = t2.sn LEFT JOIN scene_info t3 ON t3.sn = t1.scene_sn ORDER BY t1.update_dt DESC";
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
/*    }else {
      console.log('[NO PARA]');
      res.send("Err");
    }*/
  });
})

module.exports = app
