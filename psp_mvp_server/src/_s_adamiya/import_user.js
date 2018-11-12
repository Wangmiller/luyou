const express = require('express');
const app = express();
var router = express.Router();
const connection = require('../@api/mysql.js');//导入mysql 配置文件
var multiparty = require('multiparty');
var util = require('util');
var fs = require('fs');

app.post("/",function(req,res,next){
  var form = new multiparty.Form({uploadDir: './upload/user/'});
  form.parse(req, function(err, fields, files) {
    res.writeHead(200, {'content-type': 'text/plain;charset=utf-8'});
    if(err){
      console.log('parse error: ' + err);
    } else {
      var inputFile = files.ffffff[0];
      var uploadedPath = inputFile.path;
      var okcount = 0;
      var failcount = 0;
      console.log('filespath=' + uploadedPath);
      console.log('filesTmp: ' + inputFile);
      console.log('Filename: ' + inputFile.originalFilename);

      var dstPath = './upload/user/' + inputFile.originalFilename;
      //重命名为真实文件名
      fs.rename(uploadedPath, dstPath, function(err) {
        if(err){
          console.log('rename error: ' + err);
          res.write('文件上传失败！\n\n');
        } else {
          console.log('rename ok');
          res.write('文件上传成功！\n\n');

          fs.readFile(dstPath, function (err, data) {
            // var table = new Array();
            // ConvertToTable(data, function (table) {
            // console.log(table);
            // });
            if (err) {
              console.log(err.stack);
              res.end(util.inspect({文件解析失败: err.stack}));
              return;
            }
            data = data.toString();
            var rows = new Array();
            var cols = new Array();
            var addSql = 'insert into user_info (sn,label) values (replace(uuid(),\'-\',\'_\'),?)';
            rows = data.split("\r\n");
            // 首行不导入
            for (var i = 1; i < rows.length; i++) {
              cols = rows[i].split(",");
              if(cols.length === 1) {
                okcount++;
                if(cols[0].trim() !== '') {
                  connection.query(addSql, cols, function (err, result) {
                    if(err){
                      console.log('[INSERT ERROR] - ',err.message);
                      failcount++;
                    }
                    else {
                      // console.log('[INSERT OK] - ',cols[0]);
                      // okcount++;
                    }
                  });
                }
                else {
                  failcount++;
                }
              }
              else {
                failcount++;
              }
            }
            res.write('共检测到CSV数据行（首行忽略）：'+ (rows.length-1).toString()+'\n\n');
            res.end(util.inspect({成功导入用户: okcount.toString(), 导入失败: failcount.toString()}));
          });
        }
      });
    }
  });
});

module.exports = app;
