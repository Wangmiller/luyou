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
    console.log(params);
    var sql="";
    if (params && params.timefilter) {
      var timefilter=params.timefilter;
      // sql = "select * from partner_list   where is_deleted=0  order by create_dt desc";
      switch (timefilter) {
          case 'all':
            sql = "SELECT pl.*, pc.contract_name, pc.contract_position,pi.label AS product_name,ii.label AS industry_name,ps.total_score as score FROM partner_list pl " +
              "LEFT JOIN partner_contract pc ON pl.sn = pc.partner_sn " +
              "LEFT JOIN partner_score ps ON pl.sn = ps.partner_sn " +
              "LEFT JOIN product_info pi ON pi.id = pl.product_id " +
              "LEFT JOIN industry_info ii ON ii.id = pl.industry_id " +
              "WHERE pl.is_deleted = 0 GROUP BY pl.company_name ORDER BY pl.create_dt DESC";
            break;
          case '2w' :
            sql = "SELECT pl.*, pc.contract_name, pc.contract_position,pi.label AS product_name,ii.label AS industry_name,ps.total_score as score FROM partner_list pl " +
              "LEFT JOIN partner_contract pc ON pl.sn = pc.partner_sn " +
              "LEFT JOIN partner_score ps ON pl.sn = ps.partner_sn " +
              "LEFT JOIN product_info pi ON pi.id = pl.product_id " +
              "LEFT JOIN industry_info ii ON ii.id = pl.industry_id " +
              "WHERE pl.is_deleted = 0 and pl.create_dt > date_sub(now(), interval 14 day) GROUP BY pl.company_name ORDER BY pl.create_dt DESC";
            break;
          case '1w' :
            sql = "SELECT pl.*, pc.contract_name, pc.contract_position,pi.label AS product_name,ii.label AS industry_name,ps.total_score as score FROM partner_list pl " +
              "LEFT JOIN partner_contract pc ON pl.sn = pc.partner_sn " +
              "LEFT JOIN partner_score ps ON pl.sn = ps.partner_sn " +
              "LEFT JOIN product_info pi ON pi.id = pl.product_id " +
              "LEFT JOIN industry_info ii ON ii.id = pl.industry_id " +
              "WHERE pl.is_deleted = 0 and pl.create_dt > date_sub(now(), interval 7 day) GROUP BY pl.company_name ORDER BY create_dt DESC";
            break;
          default:
            sql = "SELECT pl.*, pc.contract_name, pc.contract_position,pi.label AS product_name,ii.label AS industry_name,ps.total_score as score FROM partner_list pl " +
              "LEFT JOIN partner_contract pc ON pl.sn = pc.partner_sn " +
              "LEFT JOIN partner_score ps ON pl.sn = ps.partner_sn " +
              "LEFT JOIN product_info pi ON pi.id = pl.product_id " +
              "LEFT JOIN industry_info ii ON ii.id = pl.industry_id " +
              "WHERE pl.is_deleted = 0 GROUP BY pl.company_name ORDER BY pl.create_dt DESC";
            break;
      }
    }else
    {
        sql = "SELECT pl.*, pc.contract_name, pc.contract_position,pi.label AS product_name,ii.label AS industry_name,ps.total_score as score FROM partner_list pl LEFT " +
            "JOIN partner_contract pc ON pl.sn = pc.partner_sn " +
            "JOIN partner_score ps ON pl.sn = ps.partner_sn " +
            "LEFT JOIN product_info pi ON pi.id = pl.product_id " +
            "LEFT JOIN industry_info ii ON ii.id = pl.industry_id " +
            "WHERE pl.is_deleted = 0 GROUP BY pl.company_name ORDER BY pl.create_dt DESC";
    }
    // var sql = "select * from v_enterprise where is_deleted=0 and sn<>'0' order by create_dt desc, label";
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
