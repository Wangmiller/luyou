import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import { XUser } from '../../@xmodel/XUser';

const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'});

@Injectable()
export class AllUserListService {
  constructor(private httpClient: HttpClient) {
  };

  getD(): Promise<XUser[]> {
    const url = '/_s_adamiya/get_user_list';
    const params = new HttpParams()
      .set('ut', 'user');
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
    x.type_sn = data['type_sn'];
    x.type_label = data['type_label'];
    x.login_name = data['login_name'];
    x.mobile = data['mobile'];
    x.position = data['position'];
    x.email = data['email'];
    x.enterprise_label = data['enterprise_label'];
    x.tel = data['tel'];
    return x;
  }

  handleError(error: any): Promise<any> {
    console.error('对不起' + error);
    return Promise.reject(error.message || error);
  }

  createD(newData) {
    const cusn = localStorage.getItem('cu_sn');
    const url = '/_s_adamiya/create_user_list';
    const params = new HttpParams()
      .set('label', newData['label'])
      .set('position', newData['position'])
      .set('mobile', newData['mobile'])
      .set('type_sn', 'user')
      .set('login_name', newData['login_name'])
      .set('email', newData['email'])
      .set('tel', newData['tel'])
      .set('usn',cusn);
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
    const url = '/_s_adamiya/edit_user_list';
    const params = new HttpParams()
      .set('label', newData['label'])
      .set('position', newData['position'])
      .set('mobile', newData['mobile'])
      .set('login_name', newData['login_name'])
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
