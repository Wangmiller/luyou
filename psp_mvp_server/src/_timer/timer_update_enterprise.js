const connection = require('../@api/mysql.js');
var lib = require('../@api/lib');
var schedule = require('node-schedule');
function scheduleCronstyle(){
    schedule.scheduleJob('0 * * * * *', function(){
        console.log('scheduleCronstyle:' + new Date());
        timer();
    });
}
scheduleCronstyle();
let timer = function () {
        var sql="select * from v_enterprise where is_deleted=0 and sn<>'0' order by create_dt desc, label";
        connection.query(sql, function (err, rows, fields) {
            if (err) {
                console.log('[query] - :' + err);
                return ;
            }
            else {
                if (rows.length > 0) {
                    for (var i = 0; i < rows.length; i++) {
                        getEnterprise(rows[i].label, rows[i].id, rows[i].sn);
                    }
                }
            }
        });
}
function getEnterprise(lable, id, en_sn){
    /*router.post('/_timer/enterprise.json',function (req, res, next) {
        // 打印post请求的数据内容
        console.log(req.body);
        console.log(req.body.keyword);
    });*/
    var str ="{\n" +
        "    \"data\": [\n" +
        "        {\n" +
        "            \"_id\": \"1637799840\",\n" +
        "            \"company_id\": \"1637799840\",\n" +
        "            \"company_name\": \"成都谛听科技股份有限公司\",\n" +
        "            \"company_state\": \"存续\",\n" +
        "            \"company_url\": \"https://www.tianyancha.com/company/1637799840\",\n" +
        "            \"contact_mail\": [\n" +
        "                \"guhui@xcloud.cc\",\n" +
        "                \"dt@cloud.cc\"\n" +
        "            ],\n" +
        "            \"contact_phone\": [\n" +
        "                \"028-85980925\"\n" +
        "            ],\n" +
        "            \"crawl_time\": \"2018-09-24 20:59:57\",\n" +
        "            \"history_name\": \"\",\n" +
        "            \"legal_person\": \"李程\",\n" +
        "            \"registered_capital\": \"4166.6668万人民币\",\n" +
        "            \"registration_time\": \"2009-11-13\",\n" +
        "            \"short_name\": \"\",\n" +
        "            \"site\": \"四川\"\n" +
        "        },\n" +
        "        {\n" +
        "            \"_id\": \"3084585291\",\n" +
        "            \"company_id\": \"3084585291\",\n" +
        "            \"company_name\": \"谛听科技有限公司\",\n" +
        "            \"company_state\": \"仍注册\",\n" +
        "            \"company_url\": \"https://www.tianyancha.com/company/3084585291\",\n" +
        "            \"contact_mail\": [],\n" +
        "            \"contact_phone\": [],\n" +
        "            \"crawl_time\": \"2018-09-24 20:59:57\",\n" +
        "            \"history_name\": \"\",\n" +
        "            \"legal_person\": \"未公开\",\n" +
        "            \"registered_capital\": \"-\",\n" +
        "            \"registration_time\": \"2014-03-31\",\n" +
        "            \"short_name\": \"\",\n" +
        "            \"site\": \"\"\n" +
        "        },\n" +
        "        {\n" +
        "            \"_id\": \"3099907164\",\n" +
        "            \"company_id\": \"3099907164\",\n" +
        "            \"company_name\": \"肇庆谛听科技有限公司\",\n" +
        "            \"company_state\": \"存续\",\n" +
        "            \"company_url\": \"https://www.tianyancha.com/company/3099907164\",\n" +
        "            \"contact_mail\": [\n" +
        "                \"77035861@qq.com\"\n" +
        "            ],\n" +
        "            \"contact_phone\": [\n" +
        "                \"18030091200\"\n" +
        "            ],\n" +
        "            \"crawl_time\": \"2018-09-24 20:59:57\",\n" +
        "            \"history_name\": \"\",\n" +
        "            \"legal_person\": \"庄焰\",\n" +
        "            \"registered_capital\": \"500万人民币\",\n" +
        "            \"registration_time\": \"2017-09-13\",\n" +
        "            \"short_name\": \"\",\n" +
        "            \"site\": \"广东\"\n" +
        "        },\n" +
        "        {\n" +
        "            \"_id\": \"2352994835\",\n" +
        "            \"company_id\": \"2352994835\",\n" +
        "            \"company_name\": \"云南谛听科技有限公司\",\n" +
        "            \"company_state\": \"存续\",\n" +
        "            \"company_url\": \"https://www.tianyancha.com/company/2352994835\",\n" +
        "            \"contact_mail\": [\n" +
        "                \"451582549@qq.com\"\n" +
        "            ],\n" +
        "            \"contact_phone\": [\n" +
        "                \"0871-63107651\",\n" +
        "                \"0871-65137819\",\n" +
        "                \"13888337814\",\n" +
        "                \"15912115927\"\n" +
        "            ],\n" +
        "            \"crawl_time\": \"2018-09-24 20:59:57\",\n" +
        "            \"history_name\": \"云南瑞道科技有限公司\",\n" +
        "            \"legal_person\": \"兰志坚\",\n" +
        "            \"registered_capital\": \"200万人民币\",\n" +
        "            \"registration_time\": \"2013-08-12\",\n" +
        "            \"short_name\": \"\",\n" +
        "            \"site\": \"云南\"\n" +
        "        },\n" +
        "        {\n" +
        "            \"_id\": \"3121220423\",\n" +
        "            \"company_id\": \"3121220423\",\n" +
        "            \"company_name\": \"深圳市谛听科技有限公司\",\n" +
        "            \"company_state\": \"存续\",\n" +
        "            \"company_url\": \"https://www.tianyancha.com/company/3121220423\",\n" +
        "            \"contact_mail\": [\n" +
        "                \"1027989993@qq.com\"\n" +
        "            ],\n" +
        "            \"contact_phone\": [\n" +
        "                \"13425157117\"\n" +
        "            ],\n" +
        "            \"crawl_time\": \"2018-09-24 20:59:57\",\n" +
        "            \"history_name\": \"\",\n" +
        "            \"legal_person\": \"马俊\",\n" +
        "            \"registered_capital\": \"100万人民币\",\n" +
        "            \"registration_time\": \"2017-11-21\",\n" +
        "            \"short_name\": \"\",\n" +
        "            \"site\": \"广东\"\n" +
        "        },\n" +
        "        {\n" +
        "            \"_id\": \"2337092605\",\n" +
        "            \"company_id\": \"2337092605\",\n" +
        "            \"company_name\": \"上饶市谛听科技有限公司\",\n" +
        "            \"company_state\": \"存续\",\n" +
        "            \"company_url\": \"https://www.tianyancha.com/company/2337092605\",\n" +
        "            \"contact_mail\": [\n" +
        "                \"125289823@qq.com\",\n" +
        "                \"1371276560@qq.com\",\n" +
        "                \"zella@deetin.com\"\n" +
        "            ],\n" +
        "            \"contact_phone\": [\n" +
        "                \"18679305968\"\n" +
        "            ],\n" +
        "            \"crawl_time\": \"2018-09-24 20:59:57\",\n" +
        "            \"history_name\": \"\",\n" +
        "            \"legal_person\": \"廖桂芬\",\n" +
        "            \"registered_capital\": \"100万人民币\",\n" +
        "            \"registration_time\": \"2015-07-15\",\n" +
        "            \"short_name\": \"\",\n" +
        "            \"site\": \"江西\"\n" +
        "        },\n" +
        "        {\n" +
        "            \"_id\": \"676443994\",\n" +
        "            \"company_id\": \"676443994\",\n" +
        "            \"company_name\": \"重庆谛听科技有限责任公司\",\n" +
        "            \"company_state\": \"存续\",\n" +
        "            \"company_url\": \"https://www.tianyancha.com/company/676443994\",\n" +
        "            \"contact_mail\": [],\n" +
        "            \"contact_phone\": [\n" +
        "                \"18623320900\",\n" +
        "                \"023-86868190\",\n" +
        "                \"15223020015\",\n" +
        "                \"68428096\"\n" +
        "            ],\n" +
        "            \"crawl_time\": \"2018-09-24 20:59:57\",\n" +
        "            \"history_name\": \"\",\n" +
        "            \"legal_person\": \"贺虎\",\n" +
        "            \"registered_capital\": \"16万人民币\",\n" +
        "            \"registration_time\": \"2012-10-08\",\n" +
        "            \"short_name\": \"\",\n" +
        "            \"site\": \"重庆\"\n" +
        "        },\n" +
        "        {\n" +
        "            \"_id\": \"3157161554\",\n" +
        "            \"company_id\": \"3157161554\",\n" +
        "            \"company_name\": \"云南谛听科技有限公司嵩明分公司\",\n" +
        "            \"company_state\": \"存续\",\n" +
        "            \"company_url\": \"https://www.tianyancha.com/company/3157161554\",\n" +
        "            \"contact_mail\": [],\n" +
        "            \"contact_phone\": [],\n" +
        "            \"crawl_time\": \"2018-09-24 20:59:57\",\n" +
        "            \"history_name\": \"\",\n" +
        "            \"legal_person\": \"兰志坚\",\n" +
        "            \"registered_capital\": \"-\",\n" +
        "            \"registration_time\": \"2018-02-09\",\n" +
        "            \"short_name\": \"\",\n" +
        "            \"site\": \"云南\"\n" +
        "        },\n" +
        "        {\n" +
        "            \"_id\": \"2328147832\",\n" +
        "            \"company_id\": \"2328147832\",\n" +
        "            \"company_name\": \"成都谛听科技股份有限公司深圳分公司\",\n" +
        "            \"company_state\": \"存续\",\n" +
        "            \"company_url\": \"https://www.tianyancha.com/company/2328147832\",\n" +
        "            \"contact_mail\": [\n" +
        "                \"xuxinyue@xcloud.cc\",\n" +
        "                \"dt@xcloud.cc\"\n" +
        "            ],\n" +
        "            \"contact_phone\": [\n" +
        "                \"0755-26942325\"\n" +
        "            ],\n" +
        "            \"crawl_time\": \"2018-09-24 20:59:57\",\n" +
        "            \"history_name\": \"\",\n" +
        "            \"legal_person\": \"黄文哲\",\n" +
        "            \"registered_capital\": \"0万人民币\",\n" +
        "            \"registration_time\": \"2015-11-20\",\n" +
        "            \"short_name\": \"谛听科技深圳分公司\",\n" +
        "            \"site\": \"广东\"\n" +
        "        },\n" +
        "        {\n" +
        "            \"_id\": \"3216096154\",\n" +
        "            \"company_id\": \"3216096154\",\n" +
        "            \"company_name\": \"安徽谛听信息科技有限公司\",\n" +
        "            \"company_state\": \"存续\",\n" +
        "            \"company_url\": \"https://www.tianyancha.com/company/3216096154\",\n" +
        "            \"contact_mail\": [],\n" +
        "            \"contact_phone\": [],\n" +
        "            \"crawl_time\": \"2018-09-24 20:59:57\",\n" +
        "            \"history_name\": \"\",\n" +
        "            \"legal_person\": \"宋世龙\",\n" +
        "            \"registered_capital\": \"500万人民币\",\n" +
        "            \"registration_time\": \"2018-07-26\",\n" +
        "            \"short_name\": \"\",\n" +
        "            \"site\": \"安徽\"\n" +
        "        },\n" +
        "        {\n" +
        "            \"_id\": \"3153940951\",\n" +
        "            \"company_id\": \"3153940951\",\n" +
        "            \"company_name\": \"河北龙环谛听网络科技有限公司\",\n" +
        "            \"company_state\": \"存续\",\n" +
        "            \"company_url\": \"https://www.tianyancha.com/company/3153940951\",\n" +
        "            \"contact_mail\": [],\n" +
        "            \"contact_phone\": [],\n" +
        "            \"crawl_time\": \"2018-09-24 20:59:57\",\n" +
        "            \"history_name\": \"\",\n" +
        "            \"legal_person\": \"殷丁丁\",\n" +
        "            \"registered_capital\": \"500万人民币\",\n" +
        "            \"registration_time\": \"2018-02-06\",\n" +
        "            \"short_name\": \"\",\n" +
        "            \"site\": \"河北\"\n" +
        "        },\n" +
        "        {\n" +
        "            \"_id\": \"2351898962\",\n" +
        "            \"company_id\": \"2351898962\",\n" +
        "            \"company_name\": \"南京谛听网络科技有限公司\",\n" +
        "            \"company_state\": \"存续\",\n" +
        "            \"company_url\": \"https://www.tianyancha.com/company/2351898962\",\n" +
        "            \"contact_mail\": [\n" +
        "                \"18705178543@qq.com\",\n" +
        "                \"13905141514@163.com\"\n" +
        "            ],\n" +
        "            \"contact_phone\": [\n" +
        "                \"18705178543\",\n" +
        "                \"13905141514\"\n" +
        "            ],\n" +
        "            \"crawl_time\": \"2018-09-24 20:59:57\",\n" +
        "            \"history_name\": \"\",\n" +
        "            \"legal_person\": \"轩光跃\",\n" +
        "            \"registered_capital\": \"50万人民币\",\n" +
        "            \"registration_time\": \"2015-09-21\",\n" +
        "            \"short_name\": \"\",\n" +
        "            \"site\": \"江苏\"\n" +
        "        },\n" +
        "        {\n" +
        "            \"_id\": \"3029560523\",\n" +
        "            \"company_id\": \"3029560523\",\n" +
        "            \"company_name\": \"山东谛听信息科技有限公司\",\n" +
        "            \"company_state\": \"在营企业\",\n" +
        "            \"company_url\": \"https://www.tianyancha.com/company/3029560523\",\n" +
        "            \"contact_mail\": [\n" +
        "                \"18605313663@139.COM\"\n" +
        "            ],\n" +
        "            \"contact_phone\": [\n" +
        "                \"18605313663\"\n" +
        "            ],\n" +
        "            \"crawl_time\": \"2018-09-24 20:59:57\",\n" +
        "            \"history_name\": \"\",\n" +
        "            \"legal_person\": \"彭书珍\",\n" +
        "            \"registered_capital\": \"500万人民币\",\n" +
        "            \"registration_time\": \"2017-04-01\",\n" +
        "            \"short_name\": \"\",\n" +
        "            \"site\": \"山东\"\n" +
        "        },\n" +
        "        {\n" +
        "            \"_id\": \"3196998819\",\n" +
        "            \"company_id\": \"3196998819\",\n" +
        "            \"company_name\": \"昆山谛听智能科技有限公司\",\n" +
        "            \"company_state\": \"存续\",\n" +
        "            \"company_url\": \"https://www.tianyancha.com/company/3196998819\",\n" +
        "            \"contact_mail\": [],\n" +
        "            \"contact_phone\": [],\n" +
        "            \"crawl_time\": \"2018-09-24 20:59:57\",\n" +
        "            \"history_name\": \"\",\n" +
        "            \"legal_person\": \"朱丽丽\",\n" +
        "            \"registered_capital\": \"50万人民币\",\n" +
        "            \"registration_time\": \"2018-05-28\",\n" +
        "            \"short_name\": \"\",\n" +
        "            \"site\": \"江苏\"\n" +
        "        },\n" +
        "        {\n" +
        "            \"_id\": \"194780712\",\n" +
        "            \"company_id\": \"194780712\",\n" +
        "            \"company_name\": \"谛听（天津）生物科技有限公司\",\n" +
        "            \"company_state\": \"存续\",\n" +
        "            \"company_url\": \"https://www.tianyancha.com/company/194780712\",\n" +
        "            \"contact_mail\": [\n" +
        "                \"18810131898@163.com\"\n" +
        "            ],\n" +
        "            \"contact_phone\": [\n" +
        "                \"18810131898\"\n" +
        "            ],\n" +
        "            \"crawl_time\": \"2018-09-24 20:59:57\",\n" +
        "            \"history_name\": \"\",\n" +
        "            \"legal_person\": \"李政毅\",\n" +
        "            \"registered_capital\": \"888万人民币\",\n" +
        "            \"registration_time\": \"2015-02-06\",\n" +
        "            \"short_name\": \"\",\n" +
        "            \"site\": \"天津\"\n" +
        "        },\n" +
        "        {\n" +
        "            \"_id\": \"3057853651\",\n" +
        "            \"company_id\": \"3057853651\",\n" +
        "            \"company_name\": \"南京谛听医疗科技有限公司\",\n" +
        "            \"company_state\": \"存续\",\n" +
        "            \"company_url\": \"https://www.tianyancha.com/company/3057853651\",\n" +
        "            \"contact_mail\": [\n" +
        "                \"18951634001@163.com\"\n" +
        "            ],\n" +
        "            \"contact_phone\": [\n" +
        "                \"18951634001\"\n" +
        "            ],\n" +
        "            \"crawl_time\": \"2018-09-24 20:59:57\",\n" +
        "            \"history_name\": \"\",\n" +
        "            \"legal_person\": \"胡萍\",\n" +
        "            \"registered_capital\": \"200万人民币\",\n" +
        "            \"registration_time\": \"2017-03-23\",\n" +
        "            \"short_name\": \"\",\n" +
        "            \"site\": \"江苏\"\n" +
        "        },\n" +
        "        {\n" +
        "            \"_id\": \"3035715323\",\n" +
        "            \"company_id\": \"3035715323\",\n" +
        "            \"company_name\": \"兴隆县谛听环保科技有限公司\",\n" +
        "            \"company_state\": \"\",\n" +
        "            \"company_url\": \"https://www.tianyancha.com/company/3035715323\",\n" +
        "            \"contact_mail\": [],\n" +
        "            \"contact_phone\": [],\n" +
        "            \"crawl_time\": \"2018-09-24 20:59:57\",\n" +
        "            \"history_name\": \"\",\n" +
        "            \"legal_person\": \"田丽芝\",\n" +
        "            \"registered_capital\": \"50万人民币\",\n" +
        "            \"registration_time\": \"2017-01-03\",\n" +
        "            \"short_name\": \"\",\n" +
        "            \"site\": \"河北\"\n" +
        "        },\n" +
        "        {\n" +
        "            \"_id\": \"3203468416\",\n" +
        "            \"company_id\": \"3203468416\",\n" +
        "            \"company_name\": \"威海谛听信息科技有限公司\",\n" +
        "            \"company_state\": \"在营企业\",\n" +
        "            \"company_url\": \"https://www.tianyancha.com/company/3203468416\",\n" +
        "            \"contact_mail\": [],\n" +
        "            \"contact_phone\": [],\n" +
        "            \"crawl_time\": \"2018-09-24 20:59:57\",\n" +
        "            \"history_name\": \"\",\n" +
        "            \"legal_person\": \"王佳伟\",\n" +
        "            \"registered_capital\": \"5万人民币\",\n" +
        "            \"registration_time\": \"2018-06-21\",\n" +
        "            \"short_name\": \"\",\n" +
        "            \"site\": \"山东\"\n" +
        "        },\n" +
        "        {\n" +
        "            \"_id\": \"1712689679\",\n" +
        "            \"company_id\": \"1712689679\",\n" +
        "            \"company_name\": \"郑州谛听电子科技有限公司\",\n" +
        "            \"company_state\": \"存续\",\n" +
        "            \"company_url\": \"https://www.tianyancha.com/company/1712689679\",\n" +
        "            \"contact_mail\": [],\n" +
        "            \"contact_phone\": [],\n" +
        "            \"crawl_time\": \"2018-09-24 20:59:57\",\n" +
        "            \"history_name\": \"\",\n" +
        "            \"legal_person\": \"罗秀珍\",\n" +
        "            \"registered_capital\": \"10万人民币\",\n" +
        "            \"registration_time\": \"2015-04-09\",\n" +
        "            \"short_name\": \"\",\n" +
        "            \"site\": \"河南\"\n" +
        "        },\n" +
        "        {\n" +
        "            \"_id\": \"2358911064\",\n" +
        "            \"company_id\": \"2358911064\",\n" +
        "            \"company_name\": \"北京谛听文化传媒有限公司\",\n" +
        "            \"company_state\": \"开业\",\n" +
        "            \"company_url\": \"https://www.tianyancha.com/company/2358911064\",\n" +
        "            \"contact_mail\": [\n" +
        "                \"490430898@qq.com\",\n" +
        "                \"dtwh@dtting.com\"\n" +
        "            ],\n" +
        "            \"contact_phone\": [\n" +
        "                \"13720004672\"\n" +
        "            ],\n" +
        "            \"crawl_time\": \"2018-09-24 20:59:57\",\n" +
        "            \"history_name\": \"\",\n" +
        "            \"legal_person\": \"李帆\",\n" +
        "            \"registered_capital\": \"650万人民币\",\n" +
        "            \"registration_time\": \"2016-04-29\",\n" +
        "            \"short_name\": \"\",\n" +
        "            \"site\": \"北京\"\n" +
        "        }\n" +
        "    ],\n" +
        "    \"keyword\": \"谛听科技\"\n" +
        "}";
    var arr = JSON.parse(str);
    if(arr.data[0].company_name == lable){
        getEnterpriseInfo(arr.data[0]._id, id, en_sn);
    }
    // getEnterpriseInfo(arr.data[0]._id,id);
}
function getEnterpriseInfo(_id, id, en_sn){
    /*router.post('/_timer/enterprise.json',function (req, res, next) {
        // 打印post请求的数据内容
        console.log(req.body);
        console.log(req.body.keyword);
    });*/
    var str = "{\n" +
        "    \"data\": [\n" +
        "        {\n" +
        "            \"_id\": \"1637799840\",\n" +
        "            \"approval_date\": \"解密:2018-03-06\",\n" +
        "            \"big_holder\": \"李程\",\n" +
        "            \"big_holder_investment\": \"493.9万人民币\",\n" +
        "            \"big_holder_investment_date\": \"-\",\n" +
        "            \"big_holder_investment_rate\": \"-\",\n" +
        "            \"big_holder_url\": \"https://www.tianyancha.com/human/1989305798-c1637799840\",\n" +
        "            \"branch\": [\n" +
        "                \"https://www.tianyancha.com/company/2328147832\"\n" +
        "            ],\n" +
        "            \"business_term\": \"2009-11-13至3999-01-01\",\n" +
        "            \"company_addrss\": \"\\\"中国（四川）自由贸易试验区成都高新区天华二路219号11栋20层2001号\\\"\",\n" +
        "            \"company_base_info_detail\": \"2009年11月13日,公司前身成都谛听科技有限公司成立。    2015年10月09日,公司名称由“成都谛听科技有限公司”变更为“成都谛听科技股份有限公司”。\",\n" +
        "            \"company_logo_name\": \"成都谛听科技股份有限公司\",\n" +
        "            \"company_logo_url\": \"https://img.tianyancha.com/logo/lll/d680cc01ff67e2873e3cdc39c6840fb5.png@!f_200x200\",\n" +
        "            \"company_name_en\": \"Chengdu Diting Technology Corp.Ltd.\",\n" +
        "            \"company_name_zh\": \"成都谛听科技股份有限公司\",\n" +
        "            \"company_status\": \"存续\",\n" +
        "            \"company_tags\": [\n" +
        "                \"高新企业\",\n" +
        "                \"新三板\",\n" +
        "                \"谛听科技\",\n" +
        "                \"836554\"\n" +
        "            ],\n" +
        "            \"company_type\": \"其他股份有限公司(非上市)\",\n" +
        "            \"corporation_tax\": \"91510100696253881L\",\n" +
        "            \"crawl_time\": \"2018-09-24 20:56:19\",\n" +
        "            \"email\": [\n" +
        "                \"dt@cloud.cc\",\n" +
        "                \"guhui@xcloud.cc\"\n" +
        "            ],\n" +
        "            \"employees_num\": \"小于50人\",\n" +
        "            \"financing_info\": [\n" +
        "                {\n" +
        "                    \"date\": \"2016-10-31\",\n" +
        "                    \"investor\": \"将门创投\",\n" +
        "                    \"num\": \"1\",\n" +
        "                    \"rate\": \"-\",\n" +
        "                    \"rounds\": \"定向增发\",\n" +
        "                    \"sum\": \"1500万人民币\",\n" +
        "                    \"valuation\": \"-\"\n" +
        "                },\n" +
        "                {\n" +
        "                    \"date\": \"2015-06-01\",\n" +
        "                    \"investor\": \"联想创投,京东金融\",\n" +
        "                    \"num\": \"2\",\n" +
        "                    \"rate\": \"-\",\n" +
        "                    \"rounds\": \"A轮\",\n" +
        "                    \"sum\": \"数千万美元\",\n" +
        "                    \"valuation\": \"-\"\n" +
        "                },\n" +
        "                {\n" +
        "                    \"date\": \"2014-04-01\",\n" +
        "                    \"investor\": \"迅雷\",\n" +
        "                    \"num\": \"3\",\n" +
        "                    \"rate\": \"-\",\n" +
        "                    \"rounds\": \"天使轮\",\n" +
        "                    \"sum\": \"500万人民币\",\n" +
        "                    \"valuation\": \"-\"\n" +
        "                },\n" +
        "                {\n" +
        "                    \"date\": \"2013-01-12\",\n" +
        "                    \"investor\": \"联想创投\",\n" +
        "                    \"num\": \"4\",\n" +
        "                    \"rate\": \"-\",\n" +
        "                    \"rounds\": \"种子轮\",\n" +
        "                    \"sum\": \"数百万人民币\",\n" +
        "                    \"valuation\": \"-\"\n" +
        "                },\n" +
        "                {\n" +
        "                    \"date\": \"2012-11-01\",\n" +
        "                    \"investor\": \"成都高投\",\n" +
        "                    \"num\": \"5\",\n" +
        "                    \"rate\": \"-\",\n" +
        "                    \"rounds\": \"待披露\",\n" +
        "                    \"sum\": \"200万人民币\",\n" +
        "                    \"valuation\": \"-\"\n" +
        "                }\n" +
        "            ],\n" +
        "            \"history_name\": [\n" +
        "                \"成都谛听科技有限公司\"\n" +
        "            ],\n" +
        "            \"industry\": \"研究和试验发展\",\n" +
        "            \"insured_num\": \"45\",\n" +
        "            \"keyword\": \"1637799840\",\n" +
        "            \"legal_person\": \"李程\",\n" +
        "            \"legal_person_url\": \"https://www.tianyancha.com/human/1989305798-c1637799840\",\n" +
        "            \"operation_scope\": \"开发计算机软硬件、电子产品、集成电路并提供技术咨询、技术转让、技术服务；计算机网络技术开发、技术咨询；销售电子产品、计算机软硬件。\",\n" +
        "            \"organization_code\": \"696253881\",\n" +
        "            \"paid_capital\": \"3989.156万人民币\",\n" +
        "            \"register_capital\": \"解密:4166.667万人民币\",\n" +
        "            \"register_date\": \"解密:2009-11-13\",\n" +
        "            \"register_number\": \"510109000098372\",\n" +
        "            \"registered_address\": \"中国（四川）自由贸易试验区成都高新区天华二路219号11栋20层2001号\",\n" +
        "            \"registration_authority\": \"高新工商局\",\n" +
        "            \"secret_key\": \"8b21e03b\",\n" +
        "            \"social_credit_code\": \"91510100696253881L\",\n" +
        "            \"tax_level\": \"\",\n" +
        "            \"taxpayer_aptitude\": \"-\",\n" +
        "            \"telphone\": [\n" +
        "                \"028-85980925\"\n" +
        "            ],\n" +
        "            \"update_time\": \"2018-09-24\",\n" +
        "            \"url\": \"https://www.tianyancha.com/company/1637799840\",\n" +
        "            \"website\": \"http://www.newifi.com\",\n" +
        "            \"year_report\": [\n" +
        "                {\n" +
        "                    \"employees\": \"企业选择不公示\",\n" +
        "                    \"main_income\": \"企业选择不公示\",\n" +
        "                    \"net_profit\": \"企业选择不公示\",\n" +
        "                    \"postalcode\": \"610041\",\n" +
        "                    \"total_assets\": \"企业选择不公示\",\n" +
        "                    \"total_equity\": \"企业选择不公示\",\n" +
        "                    \"total_sales\": \"企业选择不公示\",\n" +
        "                    \"year\": \"2017\"\n" +
        "                },\n" +
        "                {\n" +
        "                    \"employees\": \"企业选择不公示\",\n" +
        "                    \"main_income\": \"企业选择不公示\",\n" +
        "                    \"net_profit\": \"企业选择不公示\",\n" +
        "                    \"postalcode\": \"610000\",\n" +
        "                    \"total_assets\": \"企业选择不公示\",\n" +
        "                    \"total_equity\": \"企业选择不公示\",\n" +
        "                    \"total_sales\": \"企业选择不公示\",\n" +
        "                    \"year\": \"2016\"\n" +
        "                },\n" +
        "                {\n" +
        "                    \"employees\": \"78人\",\n" +
        "                    \"main_income\": \"企业选择不公示\",\n" +
        "                    \"net_profit\": \"企业选择不公示\",\n" +
        "                    \"postalcode\": \"610000\",\n" +
        "                    \"total_assets\": \"企业选择不公示\",\n" +
        "                    \"total_equity\": \"企业选择不公示\",\n" +
        "                    \"total_sales\": \"企业选择不公示\",\n" +
        "                    \"year\": \"2015\"\n" +
        "                },\n" +
        "                {\n" +
        "                    \"employees\": \"企业选择不公示\",\n" +
        "                    \"main_income\": \"企业选择不公示\",\n" +
        "                    \"net_profit\": \"企业选择不公示\",\n" +
        "                    \"postalcode\": \"610000\",\n" +
        "                    \"total_assets\": \"企业选择不公示\",\n" +
        "                    \"total_equity\": \"企业选择不公示\",\n" +
        "                    \"total_sales\": \"企业选择不公示\",\n" +
        "                    \"year\": \"2014\"\n" +
        "                },\n" +
        "                {\n" +
        "                    \"employees\": \"企业选择不公示\",\n" +
        "                    \"main_income\": \"企业选择不公示\",\n" +
        "                    \"net_profit\": \"企业选择不公示\",\n" +
        "                    \"postalcode\": \"610000\",\n" +
        "                    \"total_assets\": \"企业选择不公示\",\n" +
        "                    \"total_equity\": \"企业选择不公示\",\n" +
        "                    \"total_sales\": \"企业选择不公示\",\n" +
        "                    \"year\": \"2013\"\n" +
        "                }\n" +
        "            ]\n" +
        "        }\n" +
        "    ],\n" +
        "    \"keyword\": \"1637799840\"\n" +
        "}";
    var arr = JSON.parse(str);
    updateEnterpriseInfo(arr, id, en_sn);
}
function updateEnterpriseInfo(arr, id, en_sn){
    var addSql = "update enterprise_info set " +
        "last_update_dt=?," +
        "type_sn=?," +
        "status_sn=?," +
        "seo_tag=?," +
        "basic_cn_uid=?," +
        "basic_setup_dt=?," +
        "basic_latest_reg_dt=?," +
        "basic_org_sn=?," +
        "basic_reg_sn=?," +
        "basic_reg_address=?," +
        "basic_legal_rep=?," +
        "basic_reg_capital=?," +
        "basic_biz_range=?," +
        "basic_biz_dt_range=?," +
        "basic_biz_address=?," +
        "basic_biz_tel=?," +
        "basic_charge_office=?," +
        "acc_asset=?," +
        "acc_sales=?," +
        "acc_profit=?," +
        "acc_year=?," +
        "acc_asset_last=?," +
        "acc_sales_last=?," +
        "acc_profit_last=?," +
        "acc_year_last=?," +
        "other_website=?," +
        "other_email=?," +
        "other_size=?," +
        "other_insured_num=?," +
        "other_tax_level=?," +
        "other_taxpayer_aptitude=?," +
        "more_info=?," +
        "level_sn=?" +
        " where id=?";
    var nowdt = new Date();
    if(arr.data[0].register_date.indexOf("解密:") != -1){
        arr.data[0].register_date = arr.data[0].register_date.substring(3);
    }
    if(arr.data[0].register_capital.indexOf("解密:") != -1){
        arr.data[0].register_capital = arr.data[0].register_capital.substring(3, arr.data[0].register_capital.length - 4) * 10000;
    }
    var company_status = '0';
    if (arr.data[0].company_status == '存续' || arr.data[0].company_status == '再营' ||arr.data[0].company_status == '开业' ||arr.data[0].company_status == '在册') {
        company_status = 'normal';
    } else if (arr.data[0].company_status == '异常') {
        company_status = 'fault';
    } else if (arr.data[0].company_status == '注销') {
        company_status = 'dead';
    } else if (arr.data[0].company_status == '吊销') {
        company_status = 'kill';
    }
    var level_sn = '0';
    if (arr.data[0].company_type.indexOf('非上市')) {
        level_sn = 'no_ipo';
    } else if (arr.data[0].company_type.indexOf('上市')) {
        level_sn = 'ipo';
    }
    var company_type = arr.data[0].company_type.split('(')[0];
    var acc_asset = '0';
    var acc_sales = '0';
    var acc_profit = '0';
    var acc_year = '-';
    var acc_asset_last = '0';
    var acc_sales_last = '0';
    var acc_profit_last = '0';
    var acc_year_last = '-';
    if (arr.data[0].year_report.length > 0) {
        if(arr.data[0].year_report[0].total_assets == "企业选择不公示"){
            acc_asset_last = 0.00;
        } else {
            acc_asset_last = arr.data[0].year_report[0].total_assets;
        }
        if(arr.data[0].year_report[0].total_sales == "企业选择不公示"){
            acc_sales_last = 0.00;
        } else {
            acc_sales_last = arr.data[0].year_report[0].total_sales;
        }
        if(arr.data[0].year_report[0].net_profit == "企业选择不公示"){
            acc_profit_last = 0.00;
        } else {
            acc_profit_last = arr.data[0].year_report[0].net_profit;
        }
        acc_year_last = arr.data[0].year_report[0].year;
        if (arr.data[0].year_report.length > 1) {
            if(arr.data[0].year_report[1].total_assets == "企业选择不公示"){
                acc_asset = 0.00;
            } else {
                acc_asset = arr.data[0].year_report[1].total_assets;
            }
            if(arr.data[0].year_report[1].total_sales == "企业选择不公示"){
                acc_sales = 0.00;
            } else {
                acc_sales = arr.data[0].year_report[1].total_sales;
            }
            if(arr.data[0].year_report[1].net_profit == "企业选择不公示"){
                acc_profit = 0.00;
            } else {
                acc_profit = arr.data[0].year_report[1].net_profit;
            }
            acc_year = arr.data[0].year_report[1].year;
        }
    }
    var addSqlParams = [
        nowdt,
        company_type,   //?
        company_status,
        arr.data[0].company_tags[0],
        arr.data[0].social_credit_code, //?
        arr.data[0].register_date,  //?
        arr.data[0].crawl_time,     //?
        arr.data[0].organization_code,
        arr.data[0].register_number,
        arr.data[0].registered_address, //?
        arr.data[0].legal_person,
        arr.data[0].register_capital,
        arr.data[0].operation_scope,
        arr.data[0].business_term,
        arr.data[0].company_addrss, //?
        arr.data[0].telphone[0],
        arr.data[0].registration_authority,
        acc_asset,
        acc_sales,
        acc_profit,
        acc_year,
        acc_asset_last,
        acc_sales_last,
        acc_profit_last,
        acc_year_last,
        arr.data[0].website,
        arr.data[0].email[0],
        arr.data[0].employees_num,
        arr.data[0].insured_num,
        arr.data[0].tax_level,
        arr.data[0].taxpayer_aptitude,
        arr.data[0].company_base_info_detail,
        level_sn,
        id];
    var sqlEnTp = "SELECT * FROM enterprise_type WHERE label = ?";
    var addSqlEnTp = [company_type];
    connection.query(sqlEnTp, addSqlEnTp, function (err, rows, fields) {
        if (err) {
            console.log('[ERROR] - ', err.message);
            console.log('自动更新企业"' + arr.data[0].company_logo_name + '"失败');
            return ;
        }
        else {
            if (rows.length > 0) {
                addSqlParams[1] = rows[0].sn;
                connection.query(addSql, addSqlParams, function (err, result) {
                    if(err){
                        console.log('[UPDATE ERROR] - ',err.message);
                        console.log('自动更新企业"' + arr.data[0].company_logo_name + '"失败');
                        return ;
                    }
                    else {
                        console.log('自动更新企业"' + arr.data[0].company_logo_name + '"成功');
                        return 'ok';
                    }
                });
            } else {
                var lll = new lib();
                var sn = lll.GetUUID();
                var isertnSql = "insert into enterprise_type (sn,label) values (?,?)";
                var isertnSqlParams = [sn, company_type];
                connection.query(isertnSql, isertnSqlParams, function (err, result) {
                    if (err) {
                        console.log('[INSERT ERROR] - ', err.message);
                        return ;
                    }
                    else {
                        addSqlParams[1] = sn;
                        connection.query(addSql, addSqlParams, function (err, result) {
                            if(err){
                                console.log('[UPDATE ERROR] - ',err.message);
                                console.log('自动更新企业"' + arr.data[0].company_logo_name + '"失败');
                                return ;
                            }
                            else {
                                console.log('自动更新企业"' + arr.data[0].company_logo_name + '"成功');
                                return 'ok';
                            }
                        });
                    }
                });
            }
        }
    });
    var industry = arr.data[0].industry;
    var sqlIndustry = "SELECT * FROM industry_info WHERE label =?";
    var sqlIndustryParams = [industry];
    var cr_en_in_lib = new lib();
    var cr_en_in_sn = cr_en_in_lib.GetUUID();
    connection.query(sqlIndustry, sqlIndustryParams, function (err, rows, fields) {
        if (err) {
            console.log('[ERROR] - ', err.message);
        }
        else {
            if (rows.length > 0) {
                var inSqlEnIn = "insert into cr_enterprise_industry (sn,industry_sn,enterprise_sn) values (?,?,?)";
                var inSqlEnInParams = [cr_en_in_sn, rows[0].sn, en_sn];
                var selSqlEnIn = "SELECT * FROM cr_enterprise_industry WHERE industry_sn =? and enterprise_sn=?";
                var selSqlEnInParams = [rows[0].sn, en_sn];
                connection.query(selSqlEnIn, selSqlEnInParams, function (err, rows, fields) {
                    if (err) {
                        console.log('[ERROR] - ', err.message);
                    }
                    else {
                        if(rows.length > 0){
                            var editSql = "update cr_enterprise_industry set is_deleted = ? where id = ?";
                            var editSqlParams = [0, rows[0].id];

                            connection.query(editSql, editSqlParams, function (err, rows, fields) {
                                if(err){
                                    console.log('[INSERT ERROR] - ',err.message);
                                }
                            });
                        }else {
                            connection.query(inSqlEnIn, inSqlEnInParams, function (err, result) {
                                if(err){
                                    console.log('[UPDATE ERROR] - ',err.message);
                                }
                                else {
                                }
                            });
                        }
                    }
                });
            } else {
                var industry_lib = new lib();
                var industry_sn = industry_lib.GetUUID();
                var inInSql = "insert into industry_info (sn,label) values (?,?)";
                var inInSqlParams = [industry_sn, industry];
                connection.query(inInSql, inInSqlParams, function (err, result) {
                    if (err) {
                        console.log('[INSERT ERROR] - ', err.message);
                    }
                    else {
                        var inSqlEnIn = "insert into cr_enterprise_industry (sn,industry_sn,enterprise_sn) values (?,?,?)";
                        var inEnInSqlParams = [cr_en_in_sn, industry_sn, en_sn];
                        connection.query(inSqlEnIn, inEnInSqlParams, function (err, result) {
                            if(err){
                                console.log('[UPDATE ERROR] - ',err.message);
                            }
                            else {
                            }
                        });
                    }
                });
            }
        }
    });
}
module.exports = { timer }