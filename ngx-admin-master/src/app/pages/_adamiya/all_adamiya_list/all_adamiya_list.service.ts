import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import { XUser } from '../../@xmodel/XUser';

const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'});

@Injectable()
export class AllAdamiyaListService {
  constructor(private httpClient: HttpClient) {
  };

  getD(): Promise<XUser[]> {
    const url = '/_s_adamiya/get_adamiya_list';
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

  setX(data: any): XUser {
    const x = new XUser();
    x.id = data['id'];
    x.sn = data['sn'];
    x.label = data['label'];
    x.login_name = data['login_name'];
    x.type_sn = data['type_sn'];
    x.type_label = data['type_label'];
    x.position = data['position'];
    x.mobile = data['mobile'];
    x.email = data['email'];
    x.tel = data['tel'];
    return x;
  }

  handleError(error: any): Promise<any> {
    console.error('对不起' + error);
    return Promise.reject(error.message || error);
  }

  createD(newData) {
    const url = '/_s_adamiya/create_adamiya_list';
    const params = new HttpParams()
      .set('label', newData['label'])
      .set('position', newData['position'])
      .set('type_sn', newData['type_sn'])
      .set('login_name', newData['login_name'])
      .set('mobile', newData['mobile'])
      .set('email', newData['email'])
      .set('tel', newData['tel']);
    return this.httpClient.post(url, params,
      {
        headers,
      })
      .toPromise().then(data => {
          const count = (<Array<string>>data).length;
          if (count > 0) {
            window.alert('对不起，登录账号已存在！');
          }
        },
      ).catch(this.handleError);
  }

  editD(newData) {
    const url = '/_s_adamiya/edit_adamiya_list';
    const params = new HttpParams()
      .set('label', newData['label'])
      .set('position', newData['position'])
      .set('type_sn', newData['type_sn'])
      .set('login_name', newData['login_name'])
      .set('mobile', newData['mobile'])
      .set('email', newData['email'])
      .set('tel', newData['tel'])
      .set('sn', newData['sn']);
    return this.httpClient.post(url, params,
      {
        headers,
      })
      .toPromise().then(data => {
          const count = (<Array<string>>data).length;
          if (count > 0)
            window.alert('对不起，登录账号已存在！修改失败！');
        },
      ).catch(this.handleError);
  }

  deleteD(newData) {
    const url = '/_s_share/delete_to_recycle';
    const params = new HttpParams()
      .set('id', newData['id'])
      .set('en', 'user_info');
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
