//select.js
const express = require('express');
const http = require('http');
const app = express();
var router = express.Router();
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
      console.log('createDataCollection---')
        var lll = new lib();
        var sn = lll.GetUUID();
        var addSql ="INSERT INTO data_collection_list (id,title,source,company_name,industry_involved,category,state,progressing,supporter,url,create_dt)VALUES(?,?,?,?,?,?,?,?,?,?,now())";
        params = querystring.parse(params);
        var addSqlParams = [sn, params.title||'', params.source||'', params.company_name||'', params.industry_involved||'', params.category||'', params.state||'', params.progressing||'', params.supporter||'', params.url||''];
        // 设置响应头部信息及编码
        // res.writeHead(200, {'Content-Type': 'text/html; charset=utf8'});
        connection.query(addSql, addSqlParams, function (err, result) {
            if(err){
                console.log('[INSERT ERROR] - ',err.message);
                return;
            }
            else {
                res.send("OK");
            }
        });
    });
    // var req=req;
    // var res=res;
    // var params = URL.parse(req.url, true).query;

})

module.exports = app
