import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import { XKV } from '../../@xmodel/XKV';

const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'});

@Injectable()
export class RecycleListService {
  constructor(private httpClient: HttpClient) {
  };

  getD(en): Promise<XKV[]> {
    const url = '/_s_share/get_recycle_list';
    const params = new HttpParams()
      .set('en', en);
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

  setX(data: any): XKV {
    const x = new XKV();
    x.id = data['id'];
    x.sn = data['sn'];
    x.label = data['label'];
    x.creator_sn = data['creator_sn'];
    x.create_dt = data['create_dt'];
    const last_update_dt = new Date(data['last_update_dt']);
    x.last_update_dt = last_update_dt.toLocaleString();
    x.custom_code = data['custom_code'];
    x.display_code = data['display_code'];
    x.is_deleted = data['is_deleted'];
    x.is_na = data['is_na'];
    return x;
  }

  handleError(error: any): Promise<any> {
    console.error('对不起' + error);
    return Promise.reject(error.message || error);
  }

  deleteD(newData, en) {
    const url = '/_s_share/delete_forever';
    const params = new HttpParams()
      .set('id', newData['id'])
      .set('en', en);
    return this.httpClient.post(url, params,
      {
        headers,
      })
      .toPromise().then((response) => {
        },
      ).catch(this.handleError);
  }

  editD(newData, en) {
    const url = '/_s_share/recycle_restore';
    const params = new HttpParams()
      .set('id', newData['id'])
      .set('custom_code', newData['custom_code'])
      .set('label', newData['label'])
      .set('display_code', newData['display_code'])
      .set('en', en);
    return this.httpClient.post(url, params,
      {
        headers,
      })
      .toPromise().then((response) => {
        },
      ).catch(this.handleError);
  }
}
