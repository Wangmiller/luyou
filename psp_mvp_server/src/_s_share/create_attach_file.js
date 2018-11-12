//select.js
const express = require('express');
const app = express();
const connection = require('../@api/mysql.js');//导入mysql 配置文件
var URL = require('url');
var lib = require('../@api/lib');
var querystring = require('querystring');
var fs = require('fs');

app.post('/', function(req, res) {
  var params = "";
  req.on('data', function (chunk) {
    params += chunk;
  });
  req.on('end', function () {
    var lll = new lib();
    var sn = lll.GetUUID();
    params = querystring.parse(params);
    var addSql = "insert into " + params.tkey + "_file (sn,creator_sn,file_sn," + params.tkey + "_sn) values (?,?,?,?)";
    var addSqlParams = [sn, params.usn, params.fsn, params.esn];
    connection.query(addSql, addSqlParams, function (err, result) {
      if(err){
        console.log('[INSERT ERROR] - ',err.message);
        return;
      }
      else {
        var sql = "select * from v_" + params.tkey + "_file where ef_is_deleted=0 and file_sn<>'0' and " + params.tkey + "_sn=?";
        var sqlParams = [params.esn];
        connection.query(sql, sqlParams, function (err, rows, fields) {
          if (err) {
            console.log('[ERROR] - ', err.message);
            res.send("Err");
          }
          else {
            // console.log(rows);
            var tmp_path = "./upload/"+params.tkey+"/"+params.fsn;
            var new_dir;
            var new_path;
            if(params.tkey === 'enterprise')
            {
              new_dir = "./upload/" + params.tkey + "/" + params.elabel + "/";
              new_path = "./upload/" + params.tkey + "/" + params.elabel + "/" + params.flabel;
            }
            else {
              new_dir = "./upload/" + params.tkey + "/" + params.esn + "/";
              new_path = "./upload/" + params.tkey + "/" + params.esn + "/" + params.flabel;
            }

            fs.mkdir(new_dir, function(err) {
              if (err) {
                console.log('make dir error.');
              }
            });
            fs.rename(tmp_path,new_path,function(err){
              if(err){
                console.log('[ERROR] - ', err.message);
              } else {
                var updateSql = "update file_info set file_save_path=? where sn=?";
                var updateSqlParams = [new_path, params.fsn];
                connection.query(updateSql, updateSqlParams, function (err, result) {
                  if(err){
                    console.log('[update ERROR] - ',err.message);
                    return;
                  }
                  else {
                    res.send(rows);
                  }
                });
              }
            });
          }
        });
      }
    });
    // var req=req;
    // var res=res;
    // var params = URL.parse(req.url, true).query;
  });
});

module.exports = app;
