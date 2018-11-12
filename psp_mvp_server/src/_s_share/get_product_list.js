//select.js
const express = require('express');
const app = express();
const connection = require('../@api/mysql.js');//导入mysq配置文件
const querystring = require('querystring');//zzj
app.post('/', function (req, res) {
  var params = "";

  req.on('data', function (chunk) {
    params += chunk;
  });

  req.on('end', function () {
    params = querystring.parse(params);
    console.log(params);
    var sql = "";
    if (params && params.timefilter) {
      var timefilter = params.timefilter;
      switch (timefilter) {
        case 'all':
          sql = "select * from v_product where is_deleted=0 and sn<>'0' order by create_dt desc";
          break;
        case '2w':
          sql = "select * from v_product where is_deleted=0 and sn<>'0' and create_dt > date_sub(now(), interval 14 day) order by create_dt desc";
          break;
        case '1w':
          sql = "select * from v_product where is_deleted=0 and sn<>'0' and create_dt > date_sub(now(), interval 7 day) order by create_dt desc";
          break;
        default:
          sql = "select * from v_product where is_deleted=0 and sn<>'0' order by create_dt desc";
          break;
      }
    } else {
      sql = "select * from v_product where is_deleted=0 and sn<>'0' order by create_dt desc";
    }

    // var sql = "select * from v_product where is_deleted=0 and sn<>'0' order by create_dt desc";
    connection.query(sql, function (err, rows, fields) {
      if (err) {
        console.log('[query] - :' + err);
        return;
      }
      else {
        console.log(rows)
        res.send(rows);  //这里在页面上输出数据
      }
    });
  });
});

module.exports = app
