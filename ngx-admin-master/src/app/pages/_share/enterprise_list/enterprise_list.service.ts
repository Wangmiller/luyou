import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import { XEnterprise } from '../../@xmodel/XEnterprise';

const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'});

@Injectable()
export class EnterpriseListService {
  constructor(private httpClient: HttpClient) {
  };

  getD(): Promise<XEnterprise[]> {
    // return this.http.get('/_s_adamiya/get_enterprise_list').map((res) => res.json());
    const url = '/_s_share/get_enterprise_list';
    const params = new HttpParams()
      .set('ln', '');
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

  setX(data: any): XEnterprise {
    const x = new XEnterprise();
    x.id = data['id'];
    x.sn = data['sn'];
    x.label = data['label'];
    x.basic_biz_tel = data['basic_biz_tel'];
    x.basic_reg_capital = data['basic_reg_capital'];
    x.level_label = data['level_label'];
    x.type_label = data['type_label'];
    x.basic_cn_uid = data['basic_cn_uid'];
    x.basic_setup_dt = data['basic_setup_dt'];
    return x;
  }

  handleError(error: any): Promise<any> {
    console.error('对不起' + error);
    return Promise.reject(error.message || error);
  }
}
