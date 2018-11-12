import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import { XProject } from '../../@xmodel/XProject';

const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'});

@Injectable()
export class UserProjectListService {
  constructor(private httpClient: HttpClient) {
  };

  getD(): Promise<XProject[]> {
    const cusn = localStorage.getItem('cu_sn');
    if (cusn && cusn !== '') {
      const url = '/_s_share/get_user_project_list';
      const params = new HttpParams()
        .set('usn', cusn);
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
  }

  setX(data: any): XProject {
    const x = new XProject();
    x.id = data['id'];
    x.sn = data['sn'];
    x.label = data['label'];
    x.custom_code = data['custom_code'];
    const create_dt = new Date(data['create_dt']);
    x.create_dt = create_dt.getFullYear() + '/'
      + (create_dt.getMonth() + 1) + '/' + create_dt.getDate();
    x.type_sn = data['type_sn'];
    x.status_sn = data['status_sn'];
    x.level_sn = data['level_sn'];
    x.type_label = data['type_label'];
    x.status_label = data['status_label'];
    x.level_label = data['level_label'];
    x.total_real_investment = data['total_real_investment'];
    x.total_budget = data['total_budget'];
    x.lenovo_label = data['lenovo_label'];
    x.contact_dt = data['contact_dt'];
    x.creator_label = data['creator_label'];
    x.enterprise_label = data['enterprise_label'];
    x.plan_start_dt = data['plan_start_dt'];
    x.plan_end_dt = data['plan_end_dt'];
    x.real_start_dt = data['real_start_dt'];
    x.real_end_dt = data['real_end_dt'];
    return x;
  }

  handleError(error: any): Promise<any> {
    console.error('对不起' + error);
    return Promise.reject(error.message || error);
  }

  createD(newData) {
    const cusn = localStorage.getItem('cu_sn');
    if (cusn && cusn !== '') {
      const url = '/_s_share/create_project_list';
      const listx = [];
      const params = new HttpParams()
        .set('label', newData['label'])
        .set('custom_code', newData['custom_code'])
        .set('total_real_investment', newData['total_real_investment'])
        .set('total_budget', newData['total_budget'])
        .set('type_sn', newData['type_sn'])
        .set('level_sn', newData['level_sn'])
        .set('status_sn', newData['status_sn'])
        .set('usn', cusn)
        .set('contact_dt', newData['contact_dt']);
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
  }

  editD(newData) {
    const url = '/_s_share/edit_project_list';
    const params = new HttpParams()
      .set('label', newData['label'])
      .set('custom_code', newData['custom_code'])
      .set('total_real_investment', newData['total_real_investment'])
      .set('total_budget', newData['total_budget'])
      .set('type_sn', newData['type_sn'])
      .set('level_sn', newData['level_sn'])
      .set('status_sn', newData['status_sn'])
      .set('contact_dt', newData['contact_dt'])
      .set('sn', newData['sn']);
    return this.httpClient.post(url, params,
      {
        headers,
      })
      .toPromise().then(data => {
          //window.alert(data);
        },
      ).catch(this.handleError);
  }

  deleteD(newData) {
    const url = '/_s_share/delete_to_recycle';
    const params = new HttpParams()
      .set('id', newData['id'])
      .set('en', 'project_info');
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
