import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import { XPartner } from '../../@xmodel/XPartner';
import { XKV } from '../../@xmodel/XKV';

const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });

@Injectable()
export class AllPartnerListService {
  constructor(private httpClient: HttpClient) {
  };

  getD(timefilter: any): Promise<XPartner[]> {
    // return this.http.get('/_s_adamiya/get_enterprise_list').map((res) => res.json());
    const url = '/_s_share/get_partner_list';
    const params = new HttpParams()
      .set('ln', '')
      .set('timefilter', timefilter);
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

  handleError(error: any): Promise<any> {
    console.error('对不起' + error);
    return Promise.reject(error.message || error);
  }

  deleteD(newData) {
    const url = '/_s_share/delete_partner';
    const listx = [];
    const params = new HttpParams()
      .set('id', newData['id'])
    return this.httpClient.post(url, params,
      {
        headers,
      })
      .toPromise().then(data => {
        window.alert(data);
      },
      ).catch(this.handleError);
  }

}
