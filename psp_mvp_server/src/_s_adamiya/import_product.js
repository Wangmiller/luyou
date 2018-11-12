const express = require('express');
const app = express();
var router = express.Router();
const connection = require('../@api/mysql.js');//导入mysql 配置文件
var multiparty = require('multiparty');
var util = require('util');
var fs = require('fs');
var uuid = require('node-uuid');
function cleanPrice(price) {
  var decimal_price = 0;
  if (price) {
    price = price.replace('元', '');
    price = price.replace('~', '');
    try {
      decimal_price = parseFloat(price);
    } catch (error) {
      console.error('convert ' + price + 'failed');
    }


  }

  return decimal_price;
}
function cleanMoq(Moq) {
  var int_Moq = 0;
  if (Moq) {

    try {
      int_Moq = parseInt(Moq);
    } catch (error) {
      console.error('convert ' + Moq + 'failed');
    }


  }

  return int_Moq;
}

function handleRow(columns) {
  var cols = columns;
  return function () {
    if (cols.length === 17) {
      //addSql = 'insert into product_info (id,sn,label) values (replace(uuid(),\'-\',\'_\'),?)';
      // okcount++;
      if (cols[0].trim() !== '') {
        var v_id = cols[0];
        var v_label = cols[1];
        var v_sku = cols[2];
        var v_scene = cols[3]; //插入成功后，再创建关联关系表
        var v_industry = cols[4]; //插入成功后，再创建关联关系表
        var v_enterprise = cols[5];
        var v_level = cols[6];
        var v_status = cols[7];
        var v_owner = cols[8];
        var v_picture = cols[9];
        var v_product_highlight = cols[10];
        var v_seo = cols[11];
        var v_contact = cols[12];
        var v_contact_number = cols[13];
        var v_price = cleanPrice(cols[14]);
        var v_unit_price = cleanPrice(cols[15]);
        var v_moq = cleanMoq(cols[16]);
        console.log(v_label);
        console.log('-----------------------------------------------------');
        var callbackArray = [];
        var queryEnterpriseSql = 'select sn from enterprise_info where label = ?';
        var enterprise_sn = '';
        if (v_enterprise) {
          var queryEnterprise = new Promise(function (resolve, reject) {
            connection.query(queryEnterpriseSql, [v_enterprise], function (err, result) {
              if (err) {
                console.log('[QUERRY ERROR] - enterprise ', err.message);
                reject(err);
              }
              else {

                // console.log(result);
                if (result && result[0] && result[0].sn) {
                  enterprise_sn = result[0].sn || '';
                }
                resolve(enterprise_sn);
              }
            });
            callbackArray.push(queryEnterprise);


          })



        }
        var level_sn = '';
        if (v_level) {
          var queryLevelSql = 'select sn from product_level where label = ?';
          var queryLevel = new Promise(function (resolve, reject) {
            connection.query(queryLevelSql, [v_level], function (err, result) {
              if (err) {
                console.log('[QUERRY ERROR] - Level ', err.message);
                reject(err);
              }
              else {

                // console.log(result);
                if (result && result[0] && result[0].sn) {
                  level_sn = result[0].sn || '';
                }
                resolve(level_sn);
              }
            });
          });



          callbackArray.push(queryLevel);
        }
        var status_sn = '';
        if (v_status) {
          var queryStatusSql = 'select sn from product_status where label = ?';

          var queryStatus = new Promise(function (resolve, reject) {
            connection.query(queryStatusSql, [v_status], function (err, result) {
              if (err) {
                console.log('[QUERRY ERROR] - Status ', err.message);
                reject(err);
              }
              else {

                // console.log(result);
                if (result && result[0] && result[0].sn) {
                  status_sn = result[0].sn || '';

                }
                resolve(status_sn);
              }
            });
          });


          callbackArray.push(queryStatus);
        }
        var scene_sn = '';
        if (v_scene) {
          var querySceneSql = 'select sn from scene_info where label = ?';

          var queryScene = new Promise(function (resolve, reject) {
            connection.query(querySceneSql, [v_scene], function (err, result) {
              if (err) {
                console.log('[QUERRY ERROR] - Scene ', err.message);
                reject(err);
              }
              else {

                // console.log(result);
                if (result && result[0] && result[0].sn) {
                  scene_sn = result[0].sn || '';

                }
                resolve(scene_sn);
              }
            });
          });


          callbackArray.push(queryScene);
        }
        var industry_sn = '';
        if (v_industry) {
          var queryIndustrySql = 'select sn from industry_info where label = ?';

          var queryIndustry = new Promise(function (resolve, reject) {
            connection.query(queryIndustrySql, [v_industry], function (err, result) {
              if (err) {
                console.log('[QUERRY ERROR] - Industry ', err.message);
                reject(err);
              }
              else {

                // console.log(result);
                if (result && result[0] && result[0].sn) {
                  industry_sn = result[0].sn || '';

                }
                resolve(industry_sn);
              }
            });
          });


          callbackArray.push(queryIndustry);
        }



        // if (v_contact) {
        //   var queryContactSql = 'select sn from cr_user_product where label = ?';
        //   var user_sn = '';
        //   var queryContact = connection.query(queryContactSql, [v_contact], function (err, result) {
        //     if (err) {
        //       console.log('[QUERRY ERROR] - Contact ', err.message);

        //     }
        //     else {

        //       console.log(result);
        //       user_sn = result[0].sn || '';
        //     }
        //   });
        //   callbackArray.push(queryContact);
        // }
        Promise.all(callbackArray).then(function () {
          var v_uuid = uuid.v1().replace('-', '_');
          addSql = 'INSERT INTO `psp_mvp`.`product_info` (`sn`,`label`,`sku`,`create_dt`,`last_update_dt`,`enterprise_sn`,`level_sn`,`status_sn`,`img_file_sn`,`more_info`,`seo_tag`,`price_sale`,`price_out`,`moq`)VALUES \
          (\''+ v_uuid + '\',?,?,current_timestamp(),current_timestamp(),?,?,?,?,?,?,?,?,?);';
          var queryCols = [v_label, v_sku, enterprise_sn, level_sn, status_sn, v_picture, v_product_highlight, v_seo, v_price, v_unit_price, v_moq];
          console.log(queryCols);
          connection.query(addSql, queryCols, function (err, result) {
            if (err) {
              console.log('[INSERT ERROR] - Product ', err.message);
              // failcount++;
            }
            else {
              console.log('[INSERT OK] - ');

              // okcount++;
              if (scene_sn) {
                var v_insertProductSceneSql = 'INSERT INTO `psp_mvp`.`cr_product_scene` (`sn`,`scene_sn`,`product_sn`) VALUES (\'' + uuid.v1().replace('-', '_') + '\',?,?);';
                connection.query(v_insertProductSceneSql, [scene_sn, v_uuid], function (err, result) {
                  if (err) {
                    console.log('[INSERT ERROR] - Product ', err.message);
                    // failcount++;
                  }
                  else {
                    console.log('[INSERT OK] - cr_product_scene '+scene_sn);
                  }
                });
              }
              if (industry_sn) {
                var v_insertProductIndustrySql = 'INSERT INTO `psp_mvp`.`cr_product_industry` (`sn`,`industry_sn`,`product_sn`) VALUES (\'' + uuid.v1().replace('-', '_') + '\',?,?);';
                connection.query(v_insertProductIndustrySql, [industry_sn, v_uuid], function (err, result) {
                  if (err) {
                    console.log('[INSERT ERROR] - Product ', err.message);
                    // failcount++;
                  }
                  else {
                    console.log('[INSERT OK] - cr_product_industry '+industry_sn);
                  }
                });
              }


            }
          });
        });





      }
      else {
        // failcount++;
      }
    }
    else {
      // failcount++;
    }

  }
}
app.post("/", function (req, res, next) {
  var form = new multiparty.Form({ uploadDir: './upload/product/' });
  form.parse(req, function (err, fields, files) {
    res.writeHead(200, { 'content-type': 'text/plain;charset=utf-8' });
    if (err) {
      console.log('parse error: ' + err);
    } else {
      var inputFile = files.ffffff[0];
      var uploadedPath = inputFile.path;
      var okcount = 0;
      var failcount = 0;
      console.log('filespath=' + uploadedPath);
      console.log('filesTmp: ' + inputFile);
      console.log('Filename: ' + inputFile.originalFilename);

      var dstPath = './upload/product/' + inputFile.originalFilename;
      //重命名为真实文件名
      fs.rename(uploadedPath, dstPath, function (err) {
        if (err) {
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
              res.end(util.inspect({ 文件解析失败: err.stack }));
              return;
            }
            data = data.toString();
            var rows = new Array();
            var cols = new Array();
            var addSql;
            rows = data.split("\r\n");
            // 首行不导入
            for (var i = 1; i < rows.length; i++) {
              cols = rows[i].split(",");
              var handleFunc = handleRow(cols);
              handleFunc();
            }
            res.write('共检测到CSV数据行（首行忽略）：' + (rows.length - 1).toString() + '\n\n');
            res.end(util.inspect({ 成功导入产品: okcount.toString(), 导入失败: failcount.toString() }));
          });
        }
      });
    }
  });
});

module.exports = app;
