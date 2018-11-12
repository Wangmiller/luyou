import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import { XKV } from '../../@xmodel/XKV';

const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'});

@Injectable()
export class KVListService {
  constructor(private httpClient: HttpClient) {
  };

  getD(en): Promise<XKV[]> {
    const url = '/_s_share/get_kv_list';
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
    const create_dt = new Date(data['create_dt']);
    x.create_dt = create_dt.toLocaleString();
    const last_update_dt = new Date(data['last_update_dt']);
    x.last_update_dt = last_update_dt.toLocaleString();
    x.display_code = data['display_code'];
    x.is_deleted = data['is_deleted'];
    x.is_na = data['is_na'];
    return x;
  }

  handleError(error: any): Promise<any> {
    console.error('对不起' + error);
    return Promise.reject(error.message || error);
  }

  createD(newData, en) {
    const url = '/_s_adamiya/create_kv_list';
    const listx = [];
    const params = new HttpParams()
      .set('en', en)
      .set('label', newData['label'])
      .set('display_code', newData['display_code']);
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

  editD(newData, en) {
    const url = '/_s_adamiya/edit_kv_list';
    const listx = [];
    const params = new HttpParams()
      .set('en', en)
      .set('label', newData['label'])
      .set('display_code', newData['display_code'])
      .set('sn', newData['sn']);
    return this.httpClient.post(url, params,
      {
        headers,
      })
      .toPromise().then(data => {
        const count = (<Array<string>>data).length;
        if (count > 0)
          window.alert('对不起，名称或自定义编码已存在！修改失败！');
        },
      ).catch(this.handleError);
  }

  deleteD(newData, en) {
    const url = '/_s_share/delete_to_recycle';
    const listx = [];
    const params = new HttpParams()
      .set('id', newData['id'])
      .set('en', en);
    return this.httpClient.post(url, params,
      {
        headers,
      })
      .toPromise().then(data => {
          //window.alert(data);
        },
      ).catch(this.handleError);
  }
}
