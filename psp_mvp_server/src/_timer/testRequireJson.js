const express = require('express');
const http = require('http');
const app = express();
var router = express.Router();
const connection = require('../@api/mysql.js');//导入mysql 配置文件
var URL = require('url');
var lib = require('../@api/lib');
var querystring = require('querystring');
router.post('/_timer/enterprise.json',function (req, res, next) {
    // 打印post请求的数据内容
    console.log(req.body);
    console.log(req.body.keyword);
});
