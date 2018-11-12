//select.js
const express = require('express');
const app = express();
const connection = require('../@api/mysql.js');//导入mysql 配置文件
var URL = require('url');
var lib = require('../@api/lib');
var querystring = require('querystring');

app.post('/', function(req, res) {
  var params = "";
  req.on('data', function (chunk) {
    params += chunk;
  });
  req.on('end', function () {
    var lll = new lib();
    var sn = lll.GetUUID();
    params = querystring.parse(params);
    if(params.label && params.label !='') {
        var sql = "select * from scene_info where label=?";
        var sqlpara = [params.label];
        connection.query(sql, sqlpara, function (err, rows, fields) {
            if (err) {
                console.log('[QUERY ERROR] - ', err.message);
                return;
            } else {
                // console.log(rows.length);
                if (rows.length === 0) {
                  var addSql = "insert into scene_info (sn,label,custom_code,display_code,seo_tag) values (?,?,?,?,?)";
                  var addSqlParams = [sn, params.label, params.custom_code, params.display_code, params.seo_tag];
                  // 设置响应头部信息及编码
                  // res.writeHead(200, {'Content-Type': 'text/html; charset=utf8'});
                  connection.query(addSql, addSqlParams, function (err, rows, result) {
                    if(err){
                      console.log('[INSERT ERROR] - ',err.message);
                      res.send("Error");
                    }
                    else {
                      res.send(rows);
                    }
                  });
                } else {
                    res.send(rows);
                }
            }
        });
    }else {
        console.log('[QUERY NO PARA] - ');
        res.send("Error");
        }
  });
})

module.exports = app
