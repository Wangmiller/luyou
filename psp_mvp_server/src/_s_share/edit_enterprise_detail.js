//select.js
const express = require('express');
const app = express();
const connection = require('../@api/mysql.js');//导入mysql 配置文件
var querystring = require('querystring');

app.post('/', function(req, res) {
  var params = "";
  req.on('data', function (chunk) {
    params += chunk;
  });
  req.on('end', function () {
    params = querystring.parse(params);
    var addSql = "update enterprise_info set " +
      "label=?," +
      "custom_code=?," +
      "last_update_dt=?," +
      "display_code=?," +
      "is_deleted=?," +
      "is_na=?," +
      "class_sn=?," +
      "type_sn=?," +
      "status_sn=?," +
      "level_sn=?," +
      "more_info=?," +
      "seo_tag=?," +
      "current_lenovo_user_sn=?," +
      "basic_dic_match_status_sn=?," +
      "basic_is_lenovo=?," +
      "basic_cn_uid=?," +
      "basic_setup_dt=?," +
      "basic_latest_reg_dt=?," +
      "basic_org_sn=?," +
      "basic_reg_sn=?," +
      "basic_reg_address=?," +
      "basic_legal_rep=?," +
      "basic_reg_capital=?," +
      "basic_biz_keywords=?," +
      "basic_biz_range=?," +
      "basic_biz_dt_range=?," +
      "basic_biz_address=?," +
      "basic_biz_tel=?," +
      "basic_charge_office=?," +
      "basic_nda=?," +
      "acc_bank=?," +
      "acc_bank_branch=?," +
      "acc_bank_sn=?," +
      "acc_asset=?," +
      "acc_debt=?," +
      "acc_sales=?," +
      "acc_profit=?," +
      "acc_debt_rate=?," +
      "acc_asset_last=?," +
      "acc_debt_last=?," +
      "acc_sales_last=?," +
      "acc_profit_last=?," +
      "acc_debt_rate_last=?," +
      "other_credits=?," +
      "other_website=?," +
      "other_email=?," +
      "other_size=?," +
      "other_deliver_days=?," +
      "other_deliver_address=?," +
      "other_transport=?," +
      "default_contact_user_sn=?" +
      " where id=?";
    var nowdt = new Date();
    var addSqlParams = [params.label,
      params.custom_code,
      nowdt,
      params.display_code,
      params.is_deleted,
      params.is_na,
      params.class_sn,
      params.type_sn,
      params.status_sn,
      params.level_sn,
      params.more_info,
      params.seo_tag,
      params.current_lenovo_user_sn,
      params.basic_dic_match_status_sn,
      params.basic_is_lenovo,
      params.basic_cn_uid,
      params.basic_setup_dt,
      params.basic_latest_reg_dt,
      params.basic_org_sn,
      params.basic_reg_sn,
      params.basic_reg_address,
      params.basic_legal_rep,
      params.basic_reg_capital,
      params.basic_biz_keywords,
      params.basic_biz_range,
      params.basic_biz_dt_range,
      params.basic_biz_address,
      params.basic_biz_tel,
      params.basic_charge_office,
      params.basic_nda,
      params.acc_bank,
      params.acc_bank_branch,
      params.acc_bank_sn,
      params.acc_asset,
      params.acc_debt,
      params.acc_sales,
      params.acc_profit,
      params.acc_debt_rate,
      params.acc_asset_last,
      params.acc_debt_last,
      params.acc_sales_last,
      params.acc_profit_last,
      params.acc_debt_rate_last,
      params.other_credits,
      params.other_website,
      params.other_email,
      params.other_size,
      params.other_deliver_days,
      params.other_deliver_address,
      params.other_transport,
      params.default_contact_user_sn,
      params.id];
    connection.query(addSql, addSqlParams, function (err, result) {
      if(err){
        console.log('[UPDATE ERROR] - ',err.message);
        return;
      }
      else {
        res.send({success:"OK"});
      }
    });
  });
})

module.exports = app
