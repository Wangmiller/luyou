const readlines = require('gen-readlines');
var lib = require('./@api/lib');
var lll = new lib();

const { query } = require('./mysql');


async function processInsertProduct() {
  let ProductList = readlines.fromFile('upload/product/product.csv');

  for (let product of ProductList) {
    // console.log(product.toString());

    let vArray = product.toString().split(',');
    let vLabel = vArray[1];

    if (vLabel) {
      // console.log(vLabel);

      // addSql = 'insert into product_info (sn,label,basic_nda,is_partner,basic_biz_range) values select ?,?,?,?,sn from product_status where product_status.label=?';

      // generate product sn
      let product_sn = lll.GetUUID();



      // let vlabel=vArray[1];
      let vlevel_sn = vArray[6] || '未知';
      let vmore_info = vArray[10];
      let vseo_tag = vArray[11];
      let vsku = vArray[2];
      let vmoq = vArray[16] || 0;
      // let vmoq_unit=vArray[];
      let vprice_sale = vArray[14] || 0;
      let vprice_out = vArray[15] || 0;
      let venterprise = vArray[5];
      let vscene=vArray[3];
      let vindustry=vArray[4];



      let vsample_provided = vArray[18];



      let insertProduct = 'INSERT INTO `product_info`(`sn`,`label`,`level_sn`,`more_info`,`seo_tag`,`sku`,`moq`,`price_sale`,`price_out`,`enterprise_sn`,`sample_provided`) select ?,?,(select sn from product_level where label=?),?,?,?,?,?,?,(select sn from enterprise_info where label=?),IF(?=\'是\',1,0) from dual';
      let insertProductParam = [product_sn, vLabel, vlevel_sn, vmore_info, vseo_tag, vsku, vmoq, vprice_sale, vprice_out, venterprise, vsample_provided];
      try {
        await query(insertProduct, insertProductParam);
        console.log("insert product OK " + vLabel);
      } catch (error) {
        console.log("insert product fail " + vLabel + error.message)
      }
      if (vscene) {

        // insert into mapping table
        let tempsceneMapping_sn = lll.GetUUID();
        let insertsceneMapping = 'insert into cr_product_scene (sn, product_sn,scene_sn) select ?,?, (select sn from scene_info where label=? ) from dual';
        let insertsceneMappingParam = [tempsceneMapping_sn, product_sn, vscene];
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
        let insertindustryMapping = 'insert into cr_product_industry (sn, product_sn,industry_sn) select ?,?,(select sn from industry_info where label=? ) from dual';
        let insertindustryMappingParam = [tempindustryMapping_sn, product_sn, vindustry];
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

processInsertProduct();

