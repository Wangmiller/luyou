//select.js
const express = require('express');
const app = express();
const connection = require('../@api/mysql.js');//导入mysql 配置文件
var URL = require('url');
var lib = require('../@api/lib');
var querystring = require('querystring');

app.post('/', function (req, res) {
  var params = "";
  req.on('data', function (chunk) {
    params += chunk;
  });
  req.on('end', function () {
    var lll = new lib();
    var sn = lll.GetUUID();
    params = querystring.parse(params);
    var user_sn = params.usn || '';
    // console.log(params);
    var lenovo_label = params.lenovo_label;
    var addSql = "insert into enterprise_info (sn,label,seo_tag,other_credits,basic_nda,creator_sn,basic_dic_match_status_sn,basic_is_lenovo,type_sn,status_sn,level_sn) values (?,?,?,?,?,?,?,?,?,?,?)";
    var addSqlParams = [sn, params.label, params.seo_tag || '', params.other_credits || '', params.basic_nda || '', user_sn, params.basic_dic_match_status_sn, params.basic_is_lenovo || '', params.type_sn || '', params.status_sn || '', params.level_sn || ''];
    connection.query(addSql, addSqlParams, function (err, result) {
      if (err) {
        console.log('[INSERT enterprise ERROR] - ', err.message);
        return;
      }
      else {
        if (lenovo_label) {
          var tempUserSN = lll.GetUUID();
          var queryLenovoContact = 'insert into user_info (sn,label,type_sn) select ?,?,\'lenovo\' from dual where not exists (select sn from user_info where type_sn =\'lenovo\' and label=?)';
          var queryLenovoContactParams = [tempUserSN, lenovo_label, lenovo_label];
          connection.query(queryLenovoContact, queryLenovoContactParams, function (error, result) {
            if (error) {
              console.log('[Query Lenovo Contact ERROR] - ', error.message);
              return;
            } else {
              console.log('[INSERT  user OK] - ');
              var mapping_sn = lll.GetUUID();
              var createLenovoContact = 'insert into psp_mvp.cr_enterprise_user (sn, enterprise_sn,user_sn) select ?,enterprise.sn, user.sn from (select sn from enterprise_info where label=?) enterprise left join (select sn from user_info where label=? and type_sn=\'lenovo\') user on 1=1';
              var createLenovoContactParams = [mapping_sn, params.label, lenovo_label];
              connection.query(createLenovoContact, createLenovoContactParams, function (error1, result1) {
                if (error1) {
                  console.log('[INSERT enterprise user ERROR] - ', error1.message);
                  return;
                } else {
                  console.log('[INSERT enterprise user OK] - ');

                  var updateLenovoContact = 'update enterprise_info inner join cr_enterprise_user on enterprise_info.sn=cr_enterprise_user.enterprise_sn inner join user_info on cr_enterprise_user.user_sn = user_info.sn  set enterprise_info.current_lenovo_user_sn= user_info.sn where user_info.type_sn=\'lenovo\' and enterprise_info.label=?';
                  var updateLenovoContactParams = [params.label];
                  connection.query(updateLenovoContact, updateLenovoContactParams, function (error2, result2) {
                    if (error1) {
                      console.log('[UPDATE enterprise user ERROR] - ', error2.message);
                      return;
                    } else {
                      console.log('[UPDATE enterprise user OK] - ');
                        res.send({success:'OK'});
                    }



                  });


                }



              });
            }


          });
        } else {
            res.send({success:'OK'});
        }
      }
    });

    // var req=req;
    // var res=res;
    // var params = URL.parse(req.url, true).query;

  });
});
module.exports = app
