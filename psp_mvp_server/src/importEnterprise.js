const readlines = require('gen-readlines');
var lib = require('./@api/lib');
var lll = new lib();

const { query } = require('./mysql');


async function processInsertEnterprise() {
  let EnterpriseList = readlines.fromFile('upload/enterprise/enterprise2.csv');

  for (let enterprise of EnterpriseList) {
    // console.log(enterprise.toString());

    let vArray = enterprise.toString().split(',');
    let vLabel = vArray[2];

    if (vLabel) {
      // console.log(vLabel);

      // addSql = 'insert into enterprise_info (sn,label,basic_nda,is_partner,basic_biz_range) values select ?,?,?,?,sn from product_status where product_status.label=?';
      let vscene = vArray[0];
      let vindustry = vArray[1];
      let vbasic_nda = vArray[7];
      let vis_partner = '';
      let vbasic_biz_range = '';
      let vLenovoContact = vArray[4];
      let vContact = vArray[5];
      let vContactNumber = vArray[6];
      let vStatus = vArray[3] || '待对接';
      // generate enterprise sn
      let enterprise_sn = lll.GetUUID();
      // get status sn
      // var status_sn = '';
      // if (vStatus) {
      //   // console.log(vLabel + vStatus);
      //   let queryStatus = 'select sn from product_status where label = ?';
      //   let queryStatusParam = [vStatus];
      //   let vStatusSN = await query(queryStatus, queryStatusParam);
      //   if (vStatusSN && vStatusSN[0] && vStatusSN[0].sn) {
      //     console.log(vStatusSN[0].sn);
      //     // status_sn = vStatusSN[0].sn;
      //   }

      // }

      // console.log(status_sn);
      // insert enterprise

      let insertEnterprise = 'insert into enterprise_info (sn,label,basic_nda,is_partner,basic_biz_range,basic_dic_match_status_sn) select ?,?,?,?,?,(select sn from enterprise_connect_status where enterprise_connect_status.label=?) from dual';
      let insertEnterpriseParam = [enterprise_sn, vLabel, vbasic_nda, vis_partner, vbasic_biz_range, vStatus];
      try {
        await query(insertEnterprise, insertEnterpriseParam);
        console.log("insert enterprise OK " + vLabel);
      } catch (error) {
        console.log("insert enterprise fail " + vLabel + error.message)
      }



      // check lenovo contact
      if (vLenovoContact) {
        let tempLenovoContact_sn = lll.GetUUID();
        let insertLenovoContact = 'insert into user_info (sn,label,type_sn) select ?,?,\'lenovo\' from dual where not exists (select sn from user_info where type_sn =\'lenovo\' and label=?)';
        let insertLenovoContactParam = [tempLenovoContact_sn, vLenovoContact, vLenovoContact];
        try {
          await query(insertLenovoContact, insertLenovoContactParam);
          console.log("insert lenovo contact OK " + vLenovoContact);
        } catch (error) {
          console.log("insert lenovo contact fail " + vLenovoContact + error.message)
        }
        // insert into mapping table
        let tempLenovoContactMapping_sn = lll.GetUUID();
        let insertLenovoContactMapping = 'insert into psp_mvp.cr_enterprise_user (sn, enterprise_sn,user_sn) select ?,enterprise.sn, user.sn from (select sn from enterprise_info where label=?) enterprise left join (select sn from user_info where label=? and type_sn=\'lenovo\') user on 1=1';
        let insertLenovoContactMappingParam = [tempLenovoContactMapping_sn, vLabel, vLenovoContact];
        try {
          await query(insertLenovoContactMapping, insertLenovoContactMappingParam);
          console.log("insert mapping lenovo contact OK " + vLabel + vLenovoContact);
        } catch (error) {
          console.log("insert mapping lenovo contact fail " + vLabel + vLenovoContact + error.message)
        }

        // update current lenovo contact for enterprise info

        let updateLenovoContact = 'update enterprise_info inner join cr_enterprise_user on enterprise_info.sn=cr_enterprise_user.enterprise_sn inner join user_info on cr_enterprise_user.user_sn = user_info.sn  set enterprise_info.current_lenovo_user_sn= user_info.sn where user_info.type_sn=\'lenovo\' and enterprise_info.label=?';
        let updateLenovoContactParam = [vLabel];
        try {
          await query(updateLenovoContact, updateLenovoContactParam);
          console.log("insert update current lenovo contact OK " + vLabel + vLenovoContact);
        } catch (error) {
          console.log("insert update current lenovo contact fail " + vLabel + vLenovoContact + error.message)
        }




      }



      // check contact 

      if (vContact) {
        let tempContact_sn = lll.GetUUID();
        let insertContact = 'insert into user_info (sn,label,mobile,type_sn) select ?,?,?,\'contact\' from dual where not exists (select sn from user_info where type_sn =\'contact\' and label=?)';
        let insertContactParam = [tempContact_sn, vContact, vContactNumber, vContact];
        try {
          await query(insertContact, insertContactParam);
          console.log("insert  contact OK" + vContact);
        } catch (error) {
          console.log("insert  contact fail " + vContact + error.message)
        }
        // insert into mapping table
        let tempContactMapping_sn = lll.GetUUID();
        let insertContactMapping = 'insert into psp_mvp.cr_enterprise_user (sn, enterprise_sn,user_sn) select ?,enterprise.sn, user.sn from (select sn from enterprise_info where label=?) enterprise left join (select sn from user_info where label=? and type_sn=\'contact\') user on 1=1';
        let insertContactMappingParam = [tempContactMapping_sn, vLabel, vContact];
        try {
          await query(insertContactMapping, insertContactMappingParam);
          console.log("insert mapping  contact OK " + vLabel + vContact);
        } catch (error) {
          console.log("insert mapping  contact fail " + vLabel + vContact + error.message)
        }


        let updateContact = 'update enterprise_info inner join cr_enterprise_user on enterprise_info.sn=cr_enterprise_user.enterprise_sn inner join user_info on cr_enterprise_user.user_sn = user_info.sn  set enterprise_info.default_contact_user_sn= user_info.sn where user_info.type_sn=\'contact\' and enterprise_info.label=?';
        let updateContactParam = [vLabel];
        try {
          await query(updateContact, updateContactParam);
          console.log("insert update current  contact OK " + vLabel + vContact);
        } catch (error) {
          console.log("insert update current  contact fail " + vLabel + vContact + error.message)
        }




      }
      if (vscene) {

        // insert into mapping table
        let tempsceneMapping_sn = lll.GetUUID();
        let insertsceneMapping = 'insert into cr_enterprise_scene (sn, enterprise_sn,scene_sn) select ?,enterprise.sn, scene.sn from (select sn from enterprise_info where label=?) enterprise left join (select sn from scene_info where label=? ) scene on 1=1';
        let insertsceneMappingParam = [tempsceneMapping_sn, vLabel, vscene];
        try {
          await query(insertsceneMapping, insertsceneMappingParam);
          console.log("insert mapping  scene OK " + vLabel + vscene);
        } catch (error) {
          console.log("insert mapping  scene fail " + vLabel + vscene + error.message)
        }

      }

      if (vindustry) {

        // insert into mapping table
        let tempindustryMapping_sn = lll.GetUUID();
        let insertindustryMapping = 'insert into cr_enterprise_industry (sn, enterprise_sn,industry_sn) select ?,enterprise.sn, industry.sn from (select sn from enterprise_info where label=?) enterprise left join (select sn from industry_info where label=? ) industry on 1=1';
        let insertindustryMappingParam = [tempindustryMapping_sn, vLabel, vindustry];
        try {
          await query(insertindustryMapping, insertindustryMappingParam);
          console.log("insert mapping  industry OK " + vLabel + vindustry);
        } catch (error) {
          console.log("insert mapping  industry fail " + vLabel + vindustry + error.message)
        }

      }

    }


  }
};

processInsertEnterprise();

