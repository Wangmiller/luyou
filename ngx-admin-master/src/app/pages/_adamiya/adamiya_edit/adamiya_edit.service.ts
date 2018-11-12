import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import { XUser } from '../../@xmodel/XUser';
import { XKV } from '../../@xmodel/XKV';

const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded;charset =utf-8'});

@Injectable()
export class AdamiyaEditService {
  constructor(private httpClient: HttpClient) {
  };

  getD(sn): Promise<XUser[]> {
    const url = '/_s_adamiya/get_adamiya_detail';
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

  getDUType() {
    const params = new HttpParams()
      .set('en', 'user_type');
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

  getDUStatus() {
    const params = new HttpParams()
      .set('en', 'user_status');
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

  getDULevel() {
    const params = new HttpParams()
      .set('en', 'user_level');
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
    x.email = data['email'];
    x.tel = data['tel'];
    return x;
  }

  editD(x) {
    const url = '/_s_share/edit_adamiya_detail';
    const listx = [];
    const params = new HttpParams()
      .set('sn', x.sn)
      .set('label', x.label)
      .set('custom_code', x.custom_code)
      .set('display_code', x.display_code)
      .set('is_deleted', x.is_deleted)
      .set('is_na', x.is_na)
      .set('class_sn', x.class_sn)
      .set('type_sn', x.type_sn)
      .set('status_sn', x.status_sn)
      .set('level_sn', x.level_sn)
      .set('more_info', x.more_info)
      .set('seo_tag', x.seo_tag)
      .set('position', x.position)
      .set('mobile', x.mobile)
      .set('login_name', x.login_name)
      .set('email', x.email)
      .set('tel', x.tel)
      .set('id', x.id);

    return this.httpClient.post(url, params,
      {
        headers,
      }).toPromise().then(data => {
      const count = (<Array<string>>data).length;
      if (count > 0)
        window.alert('对不起，登录账号或身份证号已存在！修改失败！');
      },
    ).catch(this.handleError);
  }

  handleError(error: any): Promise<any> {
    console.error('对不起' + error);
    return Promise.reject(error.message || error);
  }

  editP(x) {
    const url = '/_s_adamiya/reset_password';
    const params = new HttpParams()
      .set('sn', x.sn);

    return this.httpClient.post(url, params,
      {
        headers,
      }).toPromise().then(data => {
        window.alert(x.label + '的密码已被重置为999999');
      },
    ).catch(this.handleError);
  }

  deleteD(newData) {
    const url = '/_s_share/delete_to_recycle';
    const listx = [];
    const params = new HttpParams()
      .set('id', newData['id'])
      .set('en', 'user_info');
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
