import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams, HttpResponse} from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import { XEnterprise } from '../../@xmodel/XEnterprise';
import { XIndustry } from '../../@xmodel/XIndustry';
import { XScene } from '../../@xmodel/XScene';
import { XKV } from '../../@xmodel/XKV';
import {XUser} from '../../@xmodel/XUser';
import {XProduct} from '../../@xmodel/XProduct';
import {XProject} from '../../@xmodel/XProject';
import {XFile} from '../../@xmodel/XFile';

const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded;charset =utf-8'});

@Injectable()
export class EnterpriseDetailService {
  constructor(private httpClient: HttpClient) {
  };

  getD(sn): Promise<XEnterprise[]> {
    // return this.http.get('/_s_adamiya/get_enterprise_list').map((res) => res.json());
    const url = '/_s_share/get_enterprise_detail';
    const params = new HttpParams()
      .set('sn', sn);
    const listx = [];
    return this.httpClient.post(url, params,
      {
        headers,
      })
      .toPromise().then(data => {
          const count = (<Array<string>>data).length;
          for (let i = 0; i < count; i++) {
            listx.push(this.setX(data[i]));
          }
          return listx;
        },
      ).catch(this.handleError);
  }

  getDIndustry(sn) {
    const url = '/_s_share/get_enterprise_industry_list';
    const listx = [];
    const params = new HttpParams()
      .set('sn', sn);
    return this.httpClient.post(url, params,
      {
        headers,
      })
      .toPromise().then(data => {
          const count = (<Array<string>>data).length;
          for (let i = 0; i < count; i++) {
            listx.push(this.setIndustry(data[i]));
          }
          return listx;
        },
      ).catch(this.handleError);
  }

  getDIndustryNA(sn) {
    const url = '/_s_share/get_enterprise_industry_na_list';
    const listx = [];
    const params = new HttpParams()
      .set('sn', sn);
    return this.httpClient.post(url, params,
      {
        headers,
      })
      .toPromise().then(data => {
          const count = (<Array<string>>data).length;
          for (let i = 0; i < count; i++) {
            listx.push(this.setIndustry(data[i]));
          }
          return listx;
        },
      ).catch(this.handleError);
  }

  addIndustry(esn, isn) {
    const url = '/_s_share/add_enterprise_industry';
    const params = new HttpParams()
      .set('esn', esn)
      .set('isn', isn);
    const listx = [];
    return this.httpClient.post(url, params,
      {
        headers,
      }).toPromise().then(data => {
        const count = (<Array<string>>data).length;
        for (let i = 0; i < count; i++) {
          listx.push(this.setIndustry(data[i]));
        }
        return listx;
      },
    ).catch(this.handleError);
  }

  deleteIndustry(esn, isn) {
    const url = '/_s_share/delete_enterprise_industry';
    const params = new HttpParams()
      .set('esn', esn)
      .set('isn', isn);
    const listx = [];
    return this.httpClient.post(url, params,
      {
        headers,
      }).toPromise().then(data => {
        const count = (<Array<string>>data).length;
        for (let i = 0; i < count; i++) {
          listx.push(this.setIndustry(data[i]));
        }
        return listx;
      },
    ).catch(this.handleError);
  }

  setIndustry(data: any): XIndustry {
    const x = new XIndustry();
    x.sn = data['sn'];
    x.label = data['label'];
    x.is_checked = data['is_checked'];
    return x;
  }

  getDScene(sn) {
    const url = '/_s_share/get_enterprise_scene_list';
    const params = new HttpParams()
      .set('sn', sn);
    const listx = [];
    return this.httpClient.post(url, params,
      {
        headers,
      })
      .toPromise().then(data => {
          const count = (<Array<string>>data).length;
          for (let i = 0; i < count; i++) {
            listx.push(this.setScene(data[i]));
          }
          return listx;
        },
      ).catch(this.handleError);
  }

  getDSceneNA(sn) {
    const url = '/_s_share/get_enterprise_scene_na_list';
    const params = new HttpParams()
      .set('sn', sn);
    const listx = [];
    return this.httpClient.post(url, params,
      {
        headers,
      })
      .toPromise().then(data => {
          const count = (<Array<string>>data).length;
          for (let i = 0; i < count; i++) {
            listx.push(this.setScene(data[i]));
          }
          return listx;
        },
      ).catch(this.handleError);
  }

  addScene(esn, ssn) {
    const url = '/_s_share/add_enterprise_scene';
    const params = new HttpParams()
      .set('esn', esn)
      .set('ssn', ssn);
    const listx = [];
    return this.httpClient.post(url, params,
      {
        headers,
      }).toPromise().then(data => {
        const count = (<Array<string>>data).length;
        for (let i = 0; i < count; i++) {
          listx.push(this.setScene(data[i]));
        }
        return listx;
      },
    ).catch(this.handleError);
  }

  deleteScene(esn, ssn) {
    const url = '/_s_share/delete_enterprise_scene';
    const params = new HttpParams()
      .set('esn', esn)
      .set('ssn', ssn);
    const listx = [];
    return this.httpClient.post(url, params,
      {
        headers,
      }).toPromise().then(data => {
        const count = (<Array<string>>data).length;
        for (let i = 0; i < count; i++) {
          listx.push(this.setScene(data[i]));
        }
        return listx;
      },
    ).catch(this.handleError);
  }

  setScene(data: any): XScene {
    const x = new XScene();
    x.sn = data['sn'];
    x.label = data['label'];
    x.is_checked = data['is_checked'];
    return x;
  }

  getDUser(sn) {
    const params = new HttpParams()
      .set('sn', sn);
    const url = '/_s_share/get_enterprise_user_list';
    const listx = [];
    return this.httpClient.post(url, params,
      {
        headers,
      })
      .toPromise().then(data => {
          const count = (<Array<string>>data).length;
          for (let i = 0; i < count; i++) {
            listx.push(this.setXUser(data[i]));
          }
          return listx;
        },
      ).catch(this.handleError);
  }

  setXUser(data: any): XUser {
    const x = new XUser();
    x.id = data['id'];
    x.sn = data['user_sn'];
    x.label = data['user_label'];
    x.type_sn = data['user_type_sn'];
    x.mobile = data['mobile'];
    x.position = data['position'];
    x.email = data['email'];
    x.tel = data['tel'];
    return x;
  }

  getDProject(sn) {
    const params = new HttpParams()
      .set('sn', sn);
    const url = '/_s_share/get_enterprise_project_list';
    const listx = [];
    return this.httpClient.post(url, params,
      {
        headers,
      })
      .toPromise().then(data => {
          const count = (<Array<string>>data).length;
          for (let i = 0; i < count; i++) {
            listx.push(this.setXProject(data[i]));
          }
          return listx;
        },
      ).catch(this.handleError);
  }

  setXProject(data: any): XProject {
    const x = new XProject();
    x.id = data['id'];
    x.sn = data['sn'];
    x.label = data['label'];
    x.custom_code = data['custom_code'];
    const create_dt = new Date(data['create_dt']);
    x.create_dt = create_dt.getFullYear() + '/'
      + (create_dt.getMonth() + 1) + '/' + create_dt.getDate();
    x.type_sn = data['type_sn'];
    x.status_sn = data['status_sn'];
    x.level_sn = data['level_sn'];
    x.type_label = data['type_label'];
    x.status_label = data['status_label'];
    x.level_label = data['level_label'];
    x.total_real_investment = data['total_real_investment'];
    x.total_budget = data['total_budget'];
    x.lenovo_label = data['lenovo_label'];
    x.contact_dt = data['contact_dt'];
    return x;
  }

  getDFile(sn) {
    const params = new HttpParams()
      .set('sn', sn);
    const url = '/_s_share/get_enterprise_file_list';
    const listx = [];
    return this.httpClient.post(url, params,
      {
        headers,
      })
      .toPromise().then(data => {
          const count = (<Array<string>>data).length;
          for (let i = 0; i < count; i++) {
            listx.push(this.setX(data[i]));
          }
          return listx;
        },
      ).catch(this.handleError);
  }

  getDEType() {
    const params = new HttpParams()
      .set('en', 'enterprise_type');
    const url = '/_s_share/get_kv_list';
    const listx = [];
    return this.httpClient.post(url, params,
      {
        headers,
      })
      .toPromise().then(data => {
          const count = (<Array<string>>data).length;
          for (let i = 0; i < count; i++) {
            listx.push(this.setKV(data[i]));
          }
          return listx;
        },
      ).catch(this.handleError);
  }

  getDEStatus() {
    const params = new HttpParams()
      .set('en', 'enterprise_status');
    const url = '/_s_share/get_kv_list';
    const listx = [];
    return this.httpClient.post(url, params,
      {
        headers,
      })
      .toPromise().then(data => {
          const count = (<Array<string>>data).length;
          for (let i = 0; i < count; i++) {
            listx.push(this.setKV(data[i]));
          }
          return listx;
        },
      ).catch(this.handleError);
  }

  getDELevel() {
    const params = new HttpParams()
      .set('en', 'enterprise_level');
    const url = '/_s_share/get_kv_list';
    const listx = [];
    return this.httpClient.post(url, params,
      {
        headers,
      })
      .toPromise().then(data => {
          const count = (<Array<string>>data).length;
          for (let i = 0; i < count; i++) {
            listx.push(this.setKV(data[i]));
          }
          return listx;
        },
      ).catch(this.handleError);
  }

  setKV(data: any): XKV {
    const x = new XKV();
    x.sn = data['sn'];
    x.label = data['label'];
    return x;
  }

  setX(data: any): XEnterprise {
    const x = new XEnterprise();
    x.id = data['id'];
    x.sn = data['sn'];
    x.label = data['label'];
    x.creator_sn = data['creator_sn'];
    x.create_dt = data['create_dt'];
    x.custom_code = data['custom_code'];
    x.last_update_dt = data['last_update_dt'];
    x.display_code = data['display_code'];
    x.is_deleted = data['is_deleted'];
    x.is_na = data['is_na'];
    x.class_sn = data['class_sn'];
    x.type_sn = data['type_sn'];
    x.status_sn = data['status_sn'];
    x.level_sn = data['level_sn'];
    x.class_label = data['class_label'];
    x.type_label = data['type_label'];
    x.level_label = data['level_label'];
    x.status_label = data['status_label'];
    x.more_info = data['more_info'];
    x.seo_tag = data['seo_tag'];
    x.current_lenovo_user_sn = data['current_lenovo_user_sn'];
    x.basic_dic_match_status_sn = data['basic_dic_match_status_sn'];
    x.basic_is_lenovo = data['basic_is_lenovo'];
    x.basic_cn_uid = data['basic_cn_uid'];
    const basic_setup_dt = new Date(data['basic_setup_dt']);
    x.basic_setup_dt = basic_setup_dt.getFullYear() + '/'
      + (basic_setup_dt.getMonth() + 1) + '/' + basic_setup_dt.getDate();
    const basic_latest_reg_dt = new Date(data['basic_latest_reg_dt']);
    x.basic_latest_reg_dt = basic_latest_reg_dt.getFullYear() + '/'
      + (basic_latest_reg_dt.getMonth() + 1) + '/' + basic_latest_reg_dt.getDate();
    x.basic_org_sn = data['basic_org_sn'];
    x.basic_reg_sn = data['basic_reg_sn'];
    x.basic_reg_address = data['basic_reg_address'];
    x.basic_legal_rep = data['basic_legal_rep'];
    x.basic_reg_capital = data['basic_reg_capital'];
    x.basic_biz_keywords = data['basic_biz_keywords'];
    x.basic_biz_range = data['basic_biz_range'];
    x.basic_biz_dt_range = data['basic_biz_dt_range'];
    x.basic_biz_address = data['basic_biz_address'];
    x.basic_biz_tel = data['basic_biz_tel'];
    x.basic_charge_office = data['basic_charge_office'];
    x.acc_bank = data['acc_bank'];
    x.acc_bank_branch = data['acc_bank_branch'];
    x.acc_bank_sn = data['acc_bank_sn'];
    x.acc_asset = data['acc_asset'];
    x.acc_debt = data['acc_debt'];
    x.acc_sales = data['acc_sales'];
    x.acc_profit = data['acc_profit'];
    x.acc_debt_rate = data['acc_debt_rate'];
    x.acc_asset_last = data['acc_asset_last'];
    x.acc_debt_last = data['acc_debt_last'];
    x.acc_sales_last = data['acc_sales_last'];
    x.acc_profit_last = data['acc_profit_last'];
    x.acc_debt_rate_last = data['acc_debt_rate_last'];
    x.other_credits = data['other_credits'];
    x.other_website = data['other_website'];
    x.other_email = data['other_email'];
    x.other_size = data['other_size'];
    x.other_deliver_days = data['other_deliver_days'];
    x.other_deliver_address = data['other_deliver_address'];
    x.other_transport = data['other_transport'];
    x.default_contact_user_sn = data['default_contact_user_sn'];
    x.creator_label = data['creator_label'];
    x.contact_label = data['contact_label'];
    x.lenovo_label = data['lenovo_label'];
    return x;
  }

  editD(x) {
    const url = '/_s_share/edit_enterprise_detail';
    const listx = [];
    const params = new HttpParams()
      .set('sn', x.sn)
      .set('label', x.label)
      .set('creator_sn', x.creator_sn)
      .set('create_dt', x.create_dt)
      .set('custom_code', x.custom_code)
      .set('last_update_dt', x.last_update_dt)
      .set('display_code', x.display_code)
      .set('is_deleted', x.is_deleted)
      .set('is_na', x.is_na)
      .set('class_sn', x.class_sn)
      .set('type_sn', x.type_sn)
      .set('status_sn', x.status_sn)
      .set('level_sn', x.level_sn)
      .set('class_label', x.class_label)
      .set('type_label', x.type_label)
      .set('level_label', x.level_label)
      .set('status_label', x.status_label)
      .set('more_info', x.more_info)
      .set('seo_tag', x.seo_tag)
      .set('current_lenovo_user_sn', x.current_lenovo_user_sn)
      .set('basic_dic_match_status_sn', x.basic_dic_match_status_sn)
      .set('basic_is_lenovo', x.basic_is_lenovo)
      .set('basic_cn_uid', x.basic_cn_uid)
      .set('basic_setup_dt', x.basic_setup_dt)
      .set('basic_latest_reg_dt', x.basic_latest_reg_dt)
      .set('basic_org_sn', x.basic_org_sn)
      .set('basic_reg_sn', x.basic_reg_sn)
      .set('basic_reg_address', x.basic_reg_address)
      .set('basic_legal_rep', x.basic_legal_rep)
      .set('basic_reg_capital', x.basic_reg_capital)
      .set('basic_biz_keywords', x.basic_biz_keywords)
      .set('basic_biz_range', x.basic_biz_range)
      .set('basic_biz_dt_range', x.basic_biz_dt_range)
      .set('basic_biz_address', x.basic_biz_address)
      .set('basic_biz_tel', x.basic_biz_tel)
      .set('basic_charge_office', x.basic_charge_office)
      .set('acc_bank', x.acc_bank)
      .set('acc_bank_branch', x.acc_bank_branch)
      .set('acc_bank_sn', x.acc_bank_sn)
      .set('acc_asset', x.acc_asset)
      .set('acc_debt', x.acc_debt)
      .set('acc_sales', x.acc_sales)
      .set('acc_profit', x.acc_profit)
      .set('acc_debt_rate', x.acc_debt_rate)
      .set('acc_asset_last', x.acc_asset_last)
      .set('acc_debt_last', x.acc_debt_last)
      .set('acc_sales_last', x.acc_sales_last)
      .set('acc_profit_last', x.acc_profit_last)
      .set('acc_debt_rate_last', x.acc_debt_rate_last)
      .set('other_credits', x.other_credits)
      .set('other_website', x.other_website)
      .set('other_email', x.other_email)
      .set('other_size', x.other_size)
      .set('other_deliver_days', x.other_deliver_days)
      .set('other_deliver_address', x.other_deliver_address)
      .set('other_transport', x.other_transport)
      .set('default_contact_user_sn', x.default_contact_user_sn)
      .set('id', x.id);

    return this.httpClient.post(url, params,
      {
        headers,
      }).toPromise().then(data => {
        window.alert(data);
      },
    ).catch(this.handleError);
  }

  getDProduct(sn) {
    const params = new HttpParams()
      .set('sn', sn);
    const url = '/_s_share/get_enterprise_product_list';
    const listx = [];
    return this.httpClient.post(url, params,
      {
        headers,
      })
      .toPromise().then(data => {
          const count = (<Array<string>>data).length;
          for (let i = 0; i < count; i++) {
            listx.push(this.setXProduct(data[i]));
          }
          return listx;
        },
      ).catch(this.handleError);
  }

  setXProduct(data: any): XProduct {
    const x = new XProduct();
    x.id = data['id'];
    x.sn = data['sn'];
    x.label = data['label'];
    x.sku = data['sku'];
    x.price_sale = data['price_sale'];
    x.price_out = data['price_out'];
    x.moq = data['moq'];
    x.moq_unit = data['moq_unit'];
    x.level_label = data['level_label'];
    x.type_label = data['type_label'];
    x.status_label = data['status_label'];
    return x;
  }

  handleError(error: any): Promise<any> {
    console.error('对不起' + error);
    return Promise.reject(error.message || error);
  }

  download(sn, label) {
    const url = '/_s_share/get_attach_file?sn=' + sn;
    this.httpClient.get(url, {headers: headers, observe: 'response', responseType: 'blob'}).subscribe(response => {
      // window.alert(response);
      // window.alert(response.headers.keys());
      this.downloadFile(label, response);
    }, (error: HttpErrorResponse) => {
      window.alert(error.error);
    });
  }

  downloadFile(label, data: HttpResponse<Blob>) {
    const file = new Blob([data.body], {type: 'application/octet-stream'});
    const a = document.createElement('a');
    a.id = 'tempId';
    document.body.appendChild(a);
    a.download = label;
    a.href = URL.createObjectURL(file);
    a.click();
    const tempA = document.getElementById('tempId');
    if (tempA) {
      tempA.parentNode.removeChild(tempA);
    }
  }
}
