import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import { XIndustryLast7 } from '../../@xmodel/XIndustryLast7';

const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'});

@Injectable()
export class AllIndustryLast7ListService {
  constructor(private httpClient: HttpClient) {
  };

  getD(): Promise<XIndustryLast7[]> {
    // return this.http.get('/_s_adamiya/get_industry_list').map((res) => res.json());
    const url = '/_s_adamiya/get_industry_last7_list';
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

  setX(data: any): XIndustryLast7 {
    const x = new XIndustryLast7();
    // x.id = data['id'];
    // x.sn = data['sn'];
    x.label = data['label'];
    // x.custom_code = data['custom_code'];
    // x.display_code = data['display_code'];
    // x.seo_tag = data['seo_tag'];
    x.newadded = data['newadded'];
    return x;
  }

  handleError(error: any): Promise<any> {
    console.error('对不起' + error);
    return Promise.reject(error.message || error);
  }

  // createD(newData) {
  //   const url = '/_s_adamiya/create_industry_list';
  //   const listx = [];
  //   const params = new HttpParams()
  //     .set('label', newData['label'])
  //     .set('seo_tag', newData['seo_tag'])
  //     .set('custom_code', newData['custom_code'])
  //     .set('display_code', newData['display_code']);
  //   return this.httpClient.post(url, params,
  //     {
  //       headers,
  //     })
  //     .toPromise().then(data => {
  //         const count = (<Array<string>>data).length;
  //         for (let i = 0; i < count; i++) {
  //           listx.push(this.setX(data[i]));
  //         }
  //         return listx;
  //       },
  //     ).catch(this.handleError);
  // }

  // editD(newData) {
  //   const url = '/_s_adamiya/edit_industry_list';
  //   const listx = [];
  //   const params = new HttpParams()
  //     .set('label', newData['label'])
  //     .set('seo_tag', newData['seo_tag'])
  //     .set('custom_code', newData['custom_code'])
  //     .set('display_code', newData['display_code'])
  //     .set('sn', newData['sn']);
  //   return this.httpClient.post(url, params,
  //     {
  //       headers,
  //     })
  //     .toPromise().then(data => {
  //       const count = (<Array<string>>data).length;
  //       if (count > 0)
  //         window.alert('对不起，行业名称已存在！修改失败！');
  //       },
  //     ).catch(this.handleError);
  // }

  // deleteD(newData) {
  //   const url = '/_s_share/delete_to_recycle';
  //   const listx = [];
  //   const params = new HttpParams()
  //     .set('id', newData['id'])
  //     .set('en', 'industry_info');
  //   return this.httpClient.post(url, params,
  //     {
  //       headers,
  //     })
  //     .toPromise().then(data => {
  //         window.alert(data);
  //       },
  //     ).catch(this.handleError);
  // }
}
