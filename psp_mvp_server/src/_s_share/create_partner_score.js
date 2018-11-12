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
    var addSql = "insert into partner_score " +
        "(partner_sn,product_concept,product_concept_des,just_need,just_need_des," +
        "appearance_materia,appearance_materia_des,holistic_experience," +
        "holistic_experience_des,technology_maturity,technology_maturity_des," +
        "batch_production,batch_production_des,product_experience,product_experience_des," +
        "team_background,team_background_des,resource_capacity,resource_capacity_des," +
        "communication_cooperation,communication_cooperation_des,planning_interaction," +
        "planning_interaction_des,investment_situation,investment_situation_des,total_score) " +
        "values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
    params = querystring.parse(params);
    var addSqlParams = [params.partner_sn, params.product_concept, params.product_concept_des, params.just_need,
        params.just_need_des, params.appearance_materia, params.appearance_materia_des, params.holistic_experience,
        params.holistic_experience_des, params.technology_maturity, params.technology_maturity_des, params.batch_production,
        params.batch_production_des, params.product_experience, params.product_experience_des, params.team_background,
        params.team_background_des, params.resource_capacity, params.resource_capacity_des, params.communication_cooperation,
        params.communication_cooperation_des, params.planning_interaction, params.planning_interaction_des, params.investment_situation,
        params.investment_situation_des, params.total_score];
    // 设置响应头部信息及编码
    // res.writeHead(200, {'Content-Type': 'text/html; charset=utf8'});
    connection.query(addSql, addSqlParams, function (err, rows, fields) {
      if(err){
        console.log('[INSERT ERROR] - ',err.message);
        return;
      }
      else {
        console.log('[INSERT OK]'+params.partner_sn);
        // res.send(sn);
          var obj = {'sn':params.partner_sn}
        res.send(obj);
      }
    });
  });
  // var req=req;
  // var res=res;
  // var params = URL.parse(req.url, true).query;

})

module.exports = app
