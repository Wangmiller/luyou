const express = require('express');
const app = express();
var router = express.Router();
const connection = require('./@api/mysql.js');//导入mysq配置文件
var multiparty = require('multiparty');
var util = require('util');
var fs = require('fs');
const multer = require('multer');
const bodyParser = require('body-parser');
const path = require('path');
const {timer} = require('./_timer/timer_update_enterprise');

//创建一个connection连接
connection.connect(function(err) {
  if (err) {
    console.log('[query] - :' + err);
    return;
  }
  else
  {
    console.log('[connection connect]  succeed!'); //如果连接成功 控制台输出 succeed 了

  }
});

//配置数据服务程序路由
app.use('/_s_authes/get_user_login', require('./_s_authes/get_user_login'));
app.use('/_s_authes/get_user_reg', require('./_s_authes/get_user_reg'));
app.use('/_s_authes/get_adamiya_login', require('./_s_authes/get_adamiya_login'));

app.use('/_s_adamiya/get_user_list', require('./_s_adamiya/get_user_list'));
app.use('/_s_adamiya/create_user_list', require('./_s_adamiya/create_user_list'));
app.use('/_s_adamiya/edit_user_list', require('./_s_adamiya/edit_user_list'));
app.use('/_s_share/get_user_detail', require('./_s_share/get_user_detail'));
app.use('/_s_share/edit_user_detail', require('./_s_share/edit_user_detail'));

app.use('/_s_adamiya/get_industry_list', require('./_s_adamiya/get_industry_list'));
app.use('/_s_adamiya/get_industry_last7_list', require('./_s_adamiya/get_industry_last7_list'));
app.use('/_s_adamiya/create_industry_list', require('./_s_adamiya/create_industry_list'));
app.use('/_s_adamiya/edit_industry_list', require('./_s_adamiya/edit_industry_list'));
app.use('/_s_adamiya/get_industry_detail', require('./_s_adamiya/get_industry_detail'));

app.use('/_s_adamiya/get_scene_list', require('./_s_adamiya/get_scene_list'));
app.use('/_s_adamiya/create_scene_list', require('./_s_adamiya/create_scene_list'));
app.use('/_s_adamiya/edit_scene_list', require('./_s_adamiya/edit_scene_list'));
app.use('/_s_adamiya/get_scene_detail', require('./_s_adamiya/get_scene_detail'));

app.use('/_s_adamiya/get_adamiya_list', require('./_s_adamiya/get_adamiya_list'));
app.use('/_s_adamiya/create_adamiya_list', require('./_s_adamiya/create_adamiya_list'));
app.use('/_s_adamiya/edit_adamiya_list', require('./_s_adamiya/edit_adamiya_list'));
app.use('/_s_adamiya/get_adamiya_detail', require('./_s_adamiya/get_adamiya_detail'));
app.use('/_s_adamiya/edit_adamiya_detail', require('./_s_adamiya/edit_adamiya_detail'));

app.use('/_s_adamiya/get_favor_list', require('./_s_adamiya/get_favor_list'));
app.use('/_s_adamiya/reset_password', require('./_s_adamiya/reset_password'));

app.use('/_s_adamiya/create_kv_list', require('./_s_adamiya/create_kv_list'));
app.use('/_s_adamiya/edit_kv_list', require('./_s_adamiya/edit_kv_list'));

app.use('/_s_adamiya/get_sta_enterprise_industry', require('./_s_adamiya/get_sta_enterprise_industry'));
app.use('/_s_adamiya/get_sta_enterprise_scene', require('./_s_adamiya/get_sta_enterprise_scene'));
app.use('/_s_adamiya/get_sta_enterprise_grow_by_industry', require('./_s_adamiya/get_sta_enterprise_grow_by_industry'));
app.use('/_s_adamiya/get_sta_enterprise_grow_by_industry_ym', require('./_s_adamiya/get_sta_enterprise_grow_by_industry_ym'));

app.use('/_s_adamiya/get_sta_product_industry', require('./_s_adamiya/get_sta_product_industry'));
app.use('/_s_adamiya/get_sta_product_scene', require('./_s_adamiya/get_sta_product_scene'));
app.use('/_s_adamiya/get_sta_product_grow_by_industry', require('./_s_adamiya/get_sta_product_grow_by_industry'));
app.use('/_s_adamiya/get_sta_product_grow_by_industry_ym', require('./_s_adamiya/get_sta_product_grow_by_industry_ym'));
app.use('/_s_adamiya/get_sta_master', require('./_s_adamiya/get_sta_master'));
app.use('/_s_adamiya/get_sta_enterprise', require('./_s_adamiya/get_sta_enterprise'));
app.use('/_s_adamiya/get_sta_product', require('./_s_adamiya/get_sta_product'));

app.use('/_s_share/set_password', require('./_s_share/set_password'));
app.use('/_s_share/create_user_favor', require('./_s_share/create_user_favor'));// add to user favor
app.use('/_s_share/get_user_favor_list', require('./_s_share/get_user_favor_list'));// get favor list
app.use('/_s_share/get_user_enterprise_list', require('./_s_share/get_user_enterprise_list'));
app.use('/_s_share/get_user_created_enterprise_list', require('./_s_share/get_user_created_enterprise_list'));
app.use('/_s_share/get_user_product_list', require('./_s_share/get_user_product_list'));
app.use('/_s_share/get_user_project_list', require('./_s_share/get_user_project_list'));
app.use('/_s_share/check_user_favor_product', require('./_s_share/check_user_favor_product'));
app.use('/_s_share/add_product_user_favor', require('./_s_share/add_product_user_favor'));

app.use('/_s_share/get_product_list', require('./_s_share/get_product_list'));
app.use('/_s_share/create_product_list', require('./_s_share/create_product_list'));
app.use('/_s_share/edit_product_list', require('./_s_share/edit_product_list'));
app.use('/_s_share/get_product_detail', require('./_s_share/get_product_detail'));
app.use('/_s_share/edit_product_detail', require('./_s_share/edit_product_detail'));
app.use('/_s_share/get_product_industry_list', require('./_s_share/get_product_industry_list'));
app.use('/_s_share/get_product_industry_na_list', require('./_s_share/get_product_industry_na_list'));
app.use('/_s_share/get_product_scene_list', require('./_s_share/get_product_scene_list'));
app.use('/_s_share/get_product_scene_na_list', require('./_s_share/get_product_scene_na_list'));
app.use('/_s_share/get_product_user_list', require('./_s_share/get_product_user_list'));
app.use('/_s_share/get_product_file_list', require('./_s_share/get_product_file_list'));

app.use('/_s_share/add_product_scene', require('./_s_share/add_product_scene'));
app.use('/_s_share/delete_product_scene', require('./_s_share/delete_product_scene'));
app.use('/_s_share/add_product_industry', require('./_s_share/add_product_industry'));
app.use('/_s_share/delete_product_industry', require('./_s_share/delete_product_industry'));

app.use('/_s_share/get_project_list', require('./_s_share/get_project_list'));
app.use('/_s_share/create_project_list', require('./_s_share/create_project_list'));
app.use('/_s_share/edit_project_list', require('./_s_share/edit_project_list'));
app.use('/_s_share/get_project_detail', require('./_s_share/get_project_detail'));
app.use('/_s_share/edit_project_detail', require('./_s_share/edit_project_detail'));
app.use('/_s_share/get_project_file_list', require('./_s_share/get_project_file_list'));

app.use('/_s_share/get_enterprise_list', require('./_s_share/get_enterprise_list'));
app.use('/_s_share/get_enterprise_user_list', require('./_s_share/get_enterprise_user_list'));
app.use('/_s_share/get_enterprise_file_list', require('./_s_share/get_enterprise_file_list'));
app.use('/_s_share/get_enterprise_industry_list', require('./_s_share/get_enterprise_industry_list'));
app.use('/_s_share/get_enterprise_industry_na_list', require('./_s_share/get_enterprise_industry_na_list'));
app.use('/_s_share/get_enterprise_product_list', require('./_s_share/get_enterprise_product_list'));
app.use('/_s_share/get_enterprise_project_list', require('./_s_share/get_enterprise_project_list'));
app.use('/_s_share/get_enterprise_scene_list', require('./_s_share/get_enterprise_scene_list'));
app.use('/_s_share/get_enterprise_scene_na_list', require('./_s_share/get_enterprise_scene_na_list'));
app.use('/_s_share/create_enterprise_list', require('./_s_share/create_enterprise_list'));
app.use('/_s_share/create_enterprise_user_list', require('./_s_share/create_enterprise_user_list'));
app.use('/_s_share/edit_enterprise_list', require('./_s_share/edit_enterprise_list'));
app.use('/_s_share/edit_enterprise_user_list', require('./_s_share/edit_enterprise_list'));
app.use('/_s_share/get_enterprise_detail', require('./_s_share/get_enterprise_detail'));
app.use('/_s_share/edit_enterprise_detail', require('./_s_share/edit_enterprise_detail'));

app.use('/_s_share/add_enterprise_scene', require('./_s_share/add_enterprise_scene'));
app.use('/_s_share/delete_enterprise_scene', require('./_s_share/delete_enterprise_scene'));
app.use('/_s_share/add_enterprise_industry', require('./_s_share/add_enterprise_industry'));
app.use('/_s_share/delete_enterprise_industry', require('./_s_share/delete_enterprise_industry'));

app.use('/_s_share/get_recycle_list', require('./_s_share/get_recycle_list'));
app.use('/_s_share/delete_to_recycle', require('./_s_share/delete_to_recycle'));
app.use('/_s_share/delete_forever', require('./_s_share/delete_forever'));
app.use('/_s_share/recycle_restore', require('./_s_share/recycle_restore'));

app.use('/_s_share/get_kv_list', require('./_s_share/get_kv_list'));
app.use('/_s_share/delete_attach_file', require('./_s_share/delete_attach_file'));
app.use('/_s_share/edit_file_list', require('./_s_share/edit_file_list'));
app.use('/_s_share/get_sta_user', require('./_s_share/get_sta_user'));

app.use('/_s_share/create_attach_file', require('./_s_share/create_attach_file'));
app.use('/_s_share/get_attach_file',require('./_s_share/get_attach_file'));

app.use('/_s_share/get_data_collection_list', require('./_s_share/get_data_collection_list'));
app.use('/_s_share/create_data_collection_list', require('./_s_share/create_data_collection_list'));
app.use('/_s_share/delete_data_collection_list', require('./_s_share/delete_data_collection_list'));
app.use('/_s_share/edit_data_collection_list', require('./_s_share/edit_data_collection_list'));
app.use('/_s_share/get_data_collection_detail', require('./_s_share/get_data_collection_detail'));
app.use('/_s_share/get_package_info', require('./_s_share/get_package_info'));
app.use('/_timer/updateAll_enterprise_list', require('./_timer/updateAll_enterprise_list'));

app.use('/_s_share/delete_enterprise_product', require('./_s_share/delete_enterprise_product'));
app.use('/_s_share/delete_enterprise_project', require('./_s_share/delete_enterprise_project'));
app.use('/_s_share/get_partner_list', require('./_s_share/get_partner_list'));
app.use('/_s_share/get_partner_info', require('./_s_share/get_partner_info'));
app.use('/_s_share/get_partner_contract', require('./_s_share/get_partner_contract'));
app.use('/_s_share/get_partner_visitRecord', require('./_s_share/get_partner_visitRecord'));
app.use('/_s_share/get_partner_score', require('./_s_share/get_partner_score'));
app.use('/_s_share/get_partner_developerEvaluation', require('./_s_share/get_partner_developerEvaluation'));
app.use('/_s_share/create_partner_info', require('./_s_share/create_partner_info'));
app.use('/_s_share/update_partner_info', require('./_s_share/edit_partner_info'));
app.use('/_s_share/delete_partner', require('./_s_share/delete_partner'));
app.use('/_s_share/create_partner_score', require('./_s_share/create_partner_score'));
app.use('/_s_share/edit_partner_score', require('./_s_share/edit_partner_score'));
app.use('/_s_share/create_partner_contract', require('./_s_share/create_partner_contract'));
app.use('/_s_share/delete_partner_contract', require('./_s_share/delete_partner_contract'));
app.use('/_s_share/edit_partner_contract', require('./_s_share/edit_partner_contract'));
app.use('/_s_share/create_partner_records', require('./_s_share/create_partner_records'));
app.use('/_s_share/delete_partner_records', require('./_s_share/delete_partner_records'));
app.use('/_s_share/edit_partner_records', require('./_s_share/edit_partner_records'));
app.use('/_s_share/get_scene_info', require('./_s_share/get_scene_info'));
app.use('/_s_share/add_product_enterprise', require('./_s_share/add_product_enterprise'));
app.use('/_s_share/get_cf_product_source', require('./_s_share/get_cf_product_source'));

//create a cors middleware
app.use(function(req, res, next) {
//set headers to allow cross origin request.
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//配置文件上传HTML
app.get('/_s_file/import_product',function(req,res){
  res.sendFile(__dirname + '/_s_file/import_product.html');
});
app.get('/_s_file/import_enterprise',function(req,res){
  res.sendFile(__dirname + '/_s_file/import_enterprise.html');
});
app.get('/_s_file/import_user',function(req,res){
  res.sendFile(__dirname + '/_s_file/import_user.html');
});
app.get('/_s_file/import_project',function(req,res){
  res.sendFile(__dirname + '/_s_file/import_project.html');
});
app.get('/_s_file/import_industry',function(req,res){
  res.sendFile(__dirname + '/_s_file/import_industry.html');
});
app.get('/_s_file/import_scene',function(req,res){
  res.sendFile(__dirname + '/_s_file/import_scene.html');
});
app.get('/_s_file/attach_enterprise',function(req,res){
  res.sendFile(__dirname + '/_s_file/attach_enterprise.html');
});
app.get('/_s_file/attach_product',function(req,res){
  res.sendFile(__dirname + '/_s_file/attach_product.html');
});
app.get('/_s_file/attach_project',function(req,res){
  res.sendFile(__dirname + '/_s_file/attach_project.html');
});


//配置文件上传服务路由
app.use('/importEnterprise',require('./_s_adamiya/import_enterprise'));
app.use('/importProduct',require('./_s_adamiya/import_product'));
app.use('/importUser',require('./_s_adamiya/import_user'));
app.use('/importProject',require('./_s_adamiya/import_project'));
app.use('/importIndustry',require('./_s_adamiya/import_industry'));
app.use('/importScene',require('./_s_adamiya/import_scene'));

app.use('/attachEnterprise',require('./_s_share/attach_enterprise'));
app.use('/attachProduct',require('./_s_share/attach_product'));
app.use('/attachProject',require('./_s_share/attach_project'));
app.use('/attachUser',require('./_s_share/attach_user'));

app.use(router);  
//  暴露出去静态资源
app.use(express.static('public'));

app.listen(3000);
console.log(3000);

