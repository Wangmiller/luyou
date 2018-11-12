import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import { XProject } from '../../@xmodel/XProject';
import { XKV } from '../../@xmodel/XKV';
import {XFile} from '../../@xmodel/XFile';

const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded;charset =utf-8'});

@Injectable()
export class ProjectEditService {
  constructor(private httpClient: HttpClient) {
  };

  getD(sn): Promise<XProject[]> {
    const url = '/_s_share/get_project_detail';
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

  getDEType() {
    const params = new HttpParams()
      .set('en', 'project_type');
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
      .set('en', 'project_status');
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
      .set('en', 'project_level');
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

  setX(data: any): XProject {
    const x = new XProject();
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
    x.enterprise_sn = data['enterprise_sn'];
    x.lenovo_user_sn = data['lenovo_user_sn'];
    x.total_budget = data['total_budget'];
    x.main_content = data['main_content'];
    const contact_dt = new Date(data['contact_dt']);
    x.contact_dt = contact_dt.getFullYear() + '-'
      + ('0' + (contact_dt.getMonth() + 1)).slice(-2) + '-' + ('0' + contact_dt.getDate()).slice(-2);
    const plan_start_dt = new Date(data['plan_start_dt']);
    x.plan_start_dt = plan_start_dt.getFullYear() + '-'
      + ('0' + (plan_start_dt.getMonth() + 1)).slice(-2) + '-' + ('0' + plan_start_dt.getDate()).slice(-2);
    const plan_end_dt = new Date(data['plan_end_dt']);
    x.plan_end_dt = plan_end_dt.getFullYear() + '-'
      + ('0' + (plan_end_dt.getMonth() + 1)).slice(-2) + '-' + ('0' + plan_end_dt.getDate()).slice(-2);
    const real_start_dt = new Date(data['real_start_dt']);
    x.real_start_dt = real_start_dt.getFullYear() + '-'
      + ('0' + (real_start_dt.getMonth() + 1)).slice(-2) + '-' + ('0' + real_start_dt.getDate()).slice(-2);
    const real_end_dt = new Date(data['real_end_dt']);
    x.real_end_dt = real_end_dt.getFullYear() + '-'
      + ('0' + (real_end_dt.getMonth() + 1)).slice(-2) + '-' + ('0' + real_end_dt.getDate()).slice(-2);
    x.total_real_investment = data['total_real_investment'];
    x.lenovo_label = data['lenovo_label'];
    x.enterprise_label = data['enterprise_label'];
    return x;
  }

  handleError(error: any): Promise<any> {
    console.error('对不起' + error);
    return Promise.reject(error.message || error);
  }

  getDFile(sn) {
    const params = new HttpParams()
      .set('sn', sn);
    const url = '/_s_share/get_project_file_list';
    const listx = [];
    return this.httpClient.post(url, params,
      {
        headers,
      })
      .toPromise().then(data => {
          const count = (<Array<string>>data).length;
          for (let i = 0; i < count; i++) {
            listx.push(this.setXFile(data[i]));
          }
          return listx;
        },
      ).catch(this.handleError);
  }

  setXFile(data: any): XFile {
    const x = new XFile();
    x.id = data['id'];
    x.sn = data['file_sn'];
    x.label = data['label'];
    x.custom_code = data['custom_code'];
    x.display_code = data['display_code'];
    x.is_deleted = data['is_deleted'];
    x.is_na = data['is_na'];
    const create_dt = new Date(data['create_dt']);
    x.create_dt = create_dt.toLocaleString();
    x.file_bytes = data['file_bytes'];
    x.file_postfix = data['file_postfix'];
    x.file_md5 = data['file_md5'];
    x.file_save_path = data['file_save_path'];
    return x;
  }

  editD(newData) {
    const url = '/_s_share/edit_project_detail';
    const listx = [];
    const params = new HttpParams()
      .set('label', newData['label'])
      .set('custom_code', newData['custom_code'])
      .set('total_real_investment', newData['total_real_investment'])
      .set('total_budget', newData['total_budget'])
      .set('type_sn', newData['type_sn'])
      .set('level_sn', newData['level_sn'])
      .set('status_sn', newData['status_sn'])
      .set('contact_dt', newData['contact_dt'])
      .set('plan_start_dt', newData['plan_start_dt'])
      .set('plan_end_dt', newData['plan_end_dt'])
      .set('real_start_dt', newData['real_start_dt'])
      .set('real_end_dt', newData['real_end_dt'])
      .set('sn', newData['sn']);
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
