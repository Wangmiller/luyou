const express = require('express');
const app = express();
const connection = require('../@api/mysql.js');//导入mysql 配置文件
const multer = require('multer');

var uploader = multer({dest: './upload/product'}).single('myfiles');

app.post("/",function(req,res,next){
  uploader(req, res, function (err) {
    if (err) {
      // An error occurred when uploading
      console.log(err);
      return res.status(422).send("an Error occured")
    } else{
      var index = req.file.originalname.lastIndexOf('.');
      var label = req.file.originalname.substr(0, index);
      if(label>25)
        label=label.substr(0,25);
      var postfix = req.file.originalname.substr(index, req.file.originalname.length - index);
      var addSql = "insert into file_info (sn,label,file_bytes,file_postfix,file_save_path) values (?,?,?,?,?)";
      var addSqlParams = [req.file.filename, label, req.file.size/1000, postfix, req.file.destination];
      connection.query(addSql, addSqlParams, function (err, result) {
        if (err) {
          console.log('[INSERT ERROR] - ', err.message);
          return;
        }
        else {
          var sql = "select * from file_info where sn=?";
          var sqlpara = [req.file.filename];
          connection.query(sql, sqlpara, function (err, rows, fields) {
            if (err) {
              console.log('[GET OLD ERROR] - ', err.message);
              return;
            } else {
              res.send(rows);
            }
          });
        }
      });
    }
  });
});

module.exports = app;
