import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import { XPartner } from '../../@xmodel/XPartner';
import { XPartnerContract } from '../../@xmodel/XPartnerContract';
import { XPartnerVisitRecord } from '../../@xmodel/XPartnerVisitRecord';
import { XPartnerScore } from '../../@xmodel/XPartnerScore';
import { XPartnerDeveloperEvaluation } from '../../@xmodel/XPartnerDeveloperEvaluation';
import { XKV } from '../../@xmodel/XKV';
import {id} from "@swimlane/ngx-charts/release/utils";

const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });

@Injectable()
export class PartnerinfoService {
  constructor(private httpClient: HttpClient) {
  };

  getD(sn): Promise<XPartner[]> {
    // return this.http.get('/_s_adamiya/get_enterprise_list').map((res) => res.json());
    const url = '/_s_share/get_partner_info';
    const params = new HttpParams()
      .set('sn', sn);
      // .set('timefilter',timefilter);
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

  setX(data: any): XPartner {
      const x = new XPartner();
      x.id = data['id'];
      x.sn = data['sn'];
      x.company_name = data['company_name'];
      x.company_address = data['company_address'];
      x.industry_id = data['industry_id'];
      x.industry_name = data['industry_name'];
      x.product_id = data['product_id'];
      x.product_name = data['product_name'];
      x.product_desc = data['product_desc'];
      x.contract_name = data['contract_name'];
      x.contract_phone = data['contract_phone'];
      x.contract_wechat = data['contract_wechat'];
      x.contract_position = data['contract_position'];
      x.first_visit_time = data['first_visit_time'];
      x.first_visitor = data['first_visitor'];
      x.score = data['score'];
      return x;
  }

  getXC(sn): Promise<XPartnerContract[]> {
      // return this.http.get('/_s_adamiya/get_enterprise_list').map((res) => res.json());
      const url = '/_s_share/get_partner_contract';
      const params = new HttpParams()
          .set('partner_sn', sn);
      // .set('timefilter',timefilter);
      const listxc = [];
      return this.httpClient.post(url, params,
          {
              headers,
          })
          .toPromise().then(data => {
                  const count = (<Array<string>>data).length;
                  for (let i = 0; i < count; i++) {
                      listxc.push(this.setXC(data[i]));
                  }
                  return listxc;
              },
          ).catch(this.handleError);
  }

  setXC(data: any): XPartnerContract {
      const xc = new XPartnerContract();
      xc.id = data['id'];
      xc.sn = data['sn'];
      xc.partner_sn = data['partner_sn'];
      xc.contract_name = data['contract_name'];
      xc.contract_position = data['contract_position'];
      xc.contract_phone = data['contract_phone'];
      xc.contract_wechat = data['contract_wechat'];
      return xc;
  }

  getXR(sn): Promise<XPartnerVisitRecord[]> {
      // return this.http.get('/_s_adamiya/get_enterprise_list').map((res) => res.json());
      const url = '/_s_share/get_partner_visitRecord';
      const params = new HttpParams()
          .set('partner_sn', sn);
      const listxr = [];
      return this.httpClient.post(url, params,
          {
              headers,
          })
          .toPromise().then(data => {
                  const count = (<Array<string>>data).length;
                  for (let i = 0; i < count; i++) {
                      listxr.push(this.setXR(data[i]));
                  }
                  return listxr;
              },
          ).catch(this.handleError);
  }

  setXR(data: any): XPartnerVisitRecord {
      const xr = new XPartnerVisitRecord();
      xr.id = data['id'];
      xr.partner_sn = data['partner_sn'];
      xr.visitor = data['visitor'];
      xr.content = data['content'];
      xr.visit_date = data['visit_date'];
      xr.create_dt = data['create_dt'];
      return xr;
  }


  getXS(sn): Promise<XPartnerScore[]> {
      // return this.http.get('/_s_adamiya/get_enterprise_list').map((res) => res.json());
      const url = '/_s_share/get_partner_score';
      const params = new HttpParams()
          .set('partner_sn', sn);
      // .set('timefilter',timefilter);
      const listxs = [];
      return this.httpClient.post(url, params,
          {
              headers,
          })
          .toPromise().then(data => {
                  const count = (<Array<string>>data).length;
                  for (let i = 0; i < count; i++) {
                      listxs.push(this.setXS(data[i]));
                  }
                  return listxs;
              },
          ).catch(this.handleError);
  }

  setXS(data: any): XPartnerScore {
      const xs = new XPartnerScore();
      xs.id = data['id'];
      xs.partner_sn = data['partner_sn'];
      xs.product_concept = data['product_concept'];
      xs.product_concept_des = data['product_concept_des'];
      xs.just_need = data['just_need'];
      xs.just_need_des = data['just_need_des'];
      xs.appearance_materia = data['appearance_materia'];
      xs.appearance_materia_des = data['appearance_materia_des'];
      xs.holistic_experience = data['holistic_experience'];
      xs.holistic_experience_des = data['holistic_experience_des'];
      xs.technology_maturity = data['technology_maturity'];
      xs.technology_maturity_des = data['technology_maturity_des'];
      xs.batch_production = data['batch_production'];
      xs.batch_production_des = data['batch_production_des'];
      xs.product_experience = data['product_experience'];
      xs.product_experience_des = data['product_experience_des'];
      xs.team_background = data['team_background'];
      xs.team_background_des = data['team_background_des'];
      xs.resource_capacity = data['resource_capacity'];
      xs.resource_capacity_des = data['resource_capacity_des'];
      xs.communication_cooperation = data['communication_cooperation'];
      xs.communication_cooperation_des = data['communication_cooperation_des'];
      xs.planning_interaction = data['planning_interaction'];
      xs.planning_interaction_des = data['planning_interaction_des'];
      xs.investment_situation = data['investment_situation'];
      xs.investment_situation_des = data['investment_situation_des'];
      xs.total_score = data['total_score'];
      return xs;
  }

  getXD(sn): Promise<XPartnerDeveloperEvaluation[]> {
      // return this.http.get('/_s_adamiya/get_enterprise_list').map((res) => res.json());
      const url = '/_s_share/get_partner_developerEvaluation';
      const params = new HttpParams()
          .set('partner_sn', sn);
      const listxd = [];
      return this.httpClient.post(url, params,
          {
              headers,
          })
          .toPromise().then(data => {
                  const count = (<Array<string>>data).length;
                  for (let i = 0; i < count; i++) {
                      listxd.push(this.setXD(data[i]));
                  }
                  return listxd;
              },
          ).catch(this.handleError);
  }

  setXD(data: any): XPartnerDeveloperEvaluation {
      const xd = new XPartnerDeveloperEvaluation();
      xd.id = data['id'];
      xd.partner_sn = data['partner_sn'];
      xd.problem_demand = data['problem_demand'];
      xd.strategy_plan = data['strategy_plan'];
      xd.create_date = data['create_date'];
      return xd;
  }

  handleError(error: any): Promise<any> {
    console.error('对不起' + error);
    window.alert('对不起' + error);
    return Promise.reject(error.message || error);
  }
  createContract(newData, sn) {
      const url = '/_s_share/create_partner_contract';
      const listx = [];
      const params = new HttpParams()
          .set('partner_sn', sn)
          .set('contract_name', newData['contract_name'])
          .set('contract_position', newData['contract_position'])
          .set('contract_phone', newData['contract_phone'])
          .set('contract_wechat', newData['contract_wechat'])
      return this.httpClient.post(url, params,
          {
              headers,
          })
          .toPromise().then(data => {
                  // @ts-ignore
                console.log(data.sn);
                return data;
              },
          ).catch(this.handleError);
  }
  deleteContract(data) {
    const url = '/_s_share/delete_partner_contract';
    const listx = [];
    const params = new HttpParams()
        .set('id', data['id'])
    return this.httpClient.post(url, params,
        {
            headers,
        })
        .toPromise().then(data => {
                // @ts-ignore
                console.log(data.id);
                return data;
            },
        ).catch(this.handleError);
  }
  editContract(newData) {
      const url = '/_s_share/edit_partner_contract';
      const listx = [];
      const params = new HttpParams()
          .set('id', newData['id'])
          .set('partner_sn', newData['partner_sn'])
          .set('contract_name', newData['contract_name'])
          .set('contract_position', newData['contract_position'])
          .set('contract_phone', newData['contract_phone'])
          .set('contract_wechat', newData['contract_wechat'])
      return this.httpClient.post(url, params,
          {
              headers,
          })
          .toPromise().then(data => {
                  // @ts-ignore
                  console.log(data.id);
                  return data;
              },
          ).catch(this.handleError);
  }
  createRecords(newData, sn) {
    const url = '/_s_share/create_partner_records';
    const listx = [];
    const params = new HttpParams()
        .set('partner_sn', sn)
        .set('contract_name', newData['contract_name'])
        .set('visitor', newData['visitor'])
        .set('content', newData['content'])
        .set('visit_date', newData['visit_date'])
    return this.httpClient.post(url, params,
        {
            headers,
        })
        .toPromise().then(data => {
                // @ts-ignore
                console.log(data.sn);
                return data;
            },
        ).catch(this.handleError);
  }
  deleteRecords(data) {
    const url = '/_s_share/delete_partner_records';
    const listx = [];
    const params = new HttpParams()
        .set('id', data['id'])
    return this.httpClient.post(url, params,
        {
            headers,
        })
        .toPromise().then(data => {
                // @ts-ignore
                console.log(data.id);
                return data;
            },
        ).catch(this.handleError);
  }
  editRecords(newData) {
    const url = '/_s_share/edit_partner_records';
    const listx = [];
    const params = new HttpParams()
        .set('id', newData['id'])
        .set('partner_sn', newData['partner_sn'])
        .set('visitor', newData['visitor'])
        .set('content', newData['content'])
        .set('visit_date', newData['visit_date'])
    return this.httpClient.post(url, params,
        {
            headers,
        })
        .toPromise().then(data => {
                // @ts-ignore
                console.log(data.id);
                return data;
            },
        ).catch(this.handleError);
  }
  createD(newData, xstype, xslevel, xsstatus) {
    const cusn = localStorage.getItem('cu_sn');
    if (cusn && cusn !== '') {
      const url = '/_s_share/create_partner_list';
      const listx = [];
      let typesn = '0';
      let levelsn = '0';
      let statussn = '0';
      let matchstatussn = 'before';
      let islenovo = '0';
      if (newData['basic_dic_match_status_label'] === '已对接') {
        matchstatussn = 'after';
      } else {
        matchstatussn = 'before'
      }
      if (newData['basic_is_lenovo'] === '是')
        islenovo = '1';
      xstype.forEach((val, idx, array) => {
        if (val['label'] === newData['type_label'])
          typesn = val['sn'];
      });
      xslevel.forEach((val, idx, array) => {
        if (val['label'] === newData['type_label'])
          levelsn = val['sn'];
      });
      xsstatus.forEach((val, idx, array) => {
        if (val['label'] === newData['type_label'])
          statussn = val['sn'];
      });
      const params = new HttpParams()
        .set('label', newData['label'])
        .set('basic_nda', newData['basic_nda'])
        .set('seo_tag', newData['seo_tag'])
        .set('other_credits', newData['other_credits'])
        .set('basic_dic_match_status_sn', matchstatussn)
        .set('basic_is_lenovo', islenovo)
        .set('type_sn', typesn)
        .set('level_sn', levelsn)
        .set('status_sn', statussn)
        .set('usn', cusn)
        .set('lenovo_label', newData['lenovo_label']);
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
  }
  insertCompanyBase(company: any) {
    const url = '/_s_share/create_partner_info';
      const params = new HttpParams()
          .set('company_name', company.company_name)
          .set('company_address', company.company_address)
          .set('industry_id', company.industry_id)
          .set('product_id', company.product_id)
          .set('first_visit_time', company.first_visit_time)
          .set('first_visitor', company.first_visitor)
      return this.httpClient.post(url, params,
          {
              headers,
          })
          .toPromise().then(data => {
                  // @ts-ignore
                  window.location.href = '#/pages_a/_adamiya/partner_info/'+ data.sn;
                  // @ts-ignore
                  console.log(data.sn);
              },
          ).catch(this.handleError);
    }
    updateCompanyBase(company: any, sn) {
        const url = '/_s_share/update_partner_info';
        const params = new HttpParams()
            .set('sn', sn)
            .set('company_name', company.company_name)
            .set('company_address', company.company_address)
            .set('industry_id', company.industry_id)
            .set('product_id', company.product_id)
            .set('first_visit_time', company.first_visit_time)
            .set('first_visitor', company.first_visitor)
        return this.httpClient.post(url, params,
            {
                headers,
            })
            .toPromise().then(data => {
                    // @ts-ignore
                    window.location.href = '#/pages_a/_adamiya/partner_info/'+ data.sn;
                    // @ts-ignore
                    console.log(data.sn);
                },
            ).catch(this.handleError);
    }
    insertScore(score: any, sn, url) {
        const params = new HttpParams()
            .set('partner_sn', sn)
            .set('product_concept', score.product_concept)
            .set('product_concept_des', score.product_concept_des)
            .set('just_need', score.just_need)
            .set('just_need_des', score.just_need_des)
            .set('appearance_materia', score.appearance_materia)
            .set('appearance_materia_des', score.appearance_materia_des)
            .set('holistic_experience', score.holistic_experience)
            .set('holistic_experience_des', score.holistic_experience_des)
            .set('technology_maturity', score.technology_maturity)
            .set('technology_maturity_des', score.technology_maturity_des)
            .set('batch_production', score.batch_production)
            .set('batch_production_des', score.batch_production_des)
            .set('product_experience', score.product_experience)
            .set('product_experience_des', score.product_experience_des)
            .set('team_background', score.team_background)
            .set('team_background_des', score.team_background_des)
            .set('resource_capacity', score.resource_capacity)
            .set('resource_capacity_des', score.resource_capacity_des)
            .set('communication_cooperation', score.communication_cooperation)
            .set('communication_cooperation_des', score.communication_cooperation_des)
            .set('planning_interaction', score.planning_interaction)
            .set('planning_interaction_des', score.planning_interaction_des)
            .set('investment_situation', score.investment_situation)
            .set('investment_situation_des', score.investment_situation_des)
            .set('total_score', score.total_score)
        return this.httpClient.post(url, params,
            {
                headers,
            })
            .toPromise().then(data => {
                    // @ts-ignore
                    // window.location.href = '#/pages_a/_adamiya/partner_info/'+ data.sn;
                    // @ts-ignore
                    console.log(data.sn);
                },
            ).catch(this.handleError);
    }
  editD(newData, xstype, xslevel, xsstatus) {
    const url = '/_s_share/edit_enterprise_list';
    const listx = [];
    let typesn = '0';
    let levelsn = '0';
    let statussn = '0';
    let matchstatussn = 'before';
    let islenovo = '0';
    if (newData['basic_dic_match_status_label'] === '已对接')
      matchstatussn = 'after';
    if (newData['basic_is_lenovo'] === '是')
      islenovo = '1';
    xstype.forEach((val, idx, array) => {
      if (val['label'] === newData['type_label'])
        typesn = val['sn'];
    });
    xslevel.forEach((val, idx, array) => {
      if (val['label'] === newData['type_label'])
        levelsn = val['sn'];
    });
    xsstatus.forEach((val, idx, array) => {
      if (val['label'] === newData['type_label'])
        statussn = val['sn'];
    });
    const params = new HttpParams()
      .set('label', newData['label'])
      .set('basic_nda', newData['basic_nda'])
      .set('seo_tag', newData['seo_tag'])
      .set('other_credits', newData['other_credits'])
      .set('basic_dic_match_status_sn', matchstatussn)
      .set('basic_is_lenovo', islenovo)
      .set('type_sn', typesn)
      .set('level_sn', levelsn)
      .set('status_sn', statussn)
      .set('sn', newData['sn'])
      .set('lenovo_label', newData['lenovo_label']);
    ;
    return this.httpClient.post(url, params,
      {
        headers,
      })
      .toPromise().then(data => {
        const count = (<Array<string>>data).length;
        if (count > 0)
          window.alert('对不起，企业名称已存在！修改失败！');
      },
      ).catch(this.handleError);
  }

  deleteD(newData) {
    const url = '/_s_share/delete_to_recycle';
    const listx = [];
    const params = new HttpParams()
      .set('id', newData['id'])
      .set('en', 'enterprise_info');
    return this.httpClient.post(url, params,
      {
        headers,
      })
      .toPromise().then(data => {
        window.alert(data);
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
}
