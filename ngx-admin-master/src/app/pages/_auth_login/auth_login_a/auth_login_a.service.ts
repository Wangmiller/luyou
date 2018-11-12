import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import { XUser } from '../../@xmodel/XUser';
import { XSTAMaster } from '../../@xmodel/XSTAMaster';

@Injectable()
export class AuthLoginAService {
  constructor(private httpClient: HttpClient) {
  };

  getLogin(ln, p): Promise<XUser[]> {
    const url = '/_s_authes/get_adamiya_login';
    const params = new HttpParams()
      .set('ln', ln)
      .set('p', p);
    // 默认application/json
    // return this.httpClient.post(url, {params})
    //  .toPromise()
    //  .catch(this.handleError);
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'});
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

  setX(data: any): XUser {
    const x = new XUser();
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
    x.login_name = data['login_name'];
    x.mobile = data['mobile'];
    x.position = data['position'];
    x.cn_id = data['cn_id'];
    x.email = data['email'];
    x.is_notice_sys = data['is_notice_sys'];
    x.is_notice_enterprise = data['is_notice_enterprise'];
    x.is_notice_product = data['is_notice_product'];
    x.is_notice_user = data['is_notice_user'];
    x.is_notice_project = data['is_notice_project'];
    return x;
  }

  getDSTA(sn): Promise<XSTAMaster[]> {
    const url = '/_s_adamiya/get_sta_master';
    const params = new HttpParams()
      .set('sn', sn);
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'});
    const listx = [];
    return this.httpClient.post(url, params,
      {
        headers,
      })
      .toPromise().then(data => {
          const count = (<Array<string>>data).length;
          for (let i = 0; i < count; i++) {
            listx.push(this.setXSTA(data[i]));
          }
          return listx;
        },
      ).catch(this.handleError);
  }

  setXSTA(data: any): XSTAMaster {
    const x = new XSTAMaster();
    x.TotalUserCount = data['TotalUserCount'];
    x.TotalEnterpriseCount = data['TotalEnterpriseCount'];
    x.TotalProductCount = data['TotalProductCount'];
    x.TotalProjectCount = data['TotalProjectCount'];
    x.TotalEnterpriseRelatedIndustryCount = data['TotalEnterpriseRelatedIndustryCount'];
    x.TotalEnterpriseRelatedSceneCount = data['TotalEnterpriseRelatedSceneCount'];
    x.TotalProductRelatedIndustryCount = data['TotalProductRelatedIndustryCount'];
    x.TotalProductRelatedSceneCount = data['TotalProductRelatedSceneCount'];
    x.LastUpdateDT = data['last_update_dt'];
    return x;
  }

  handleError(error: any): Promise<any> {
    console.error('对不起' + error);
    return Promise.reject(error.message || error);
  }
}
