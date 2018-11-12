import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import { XProject } from '../../@xmodel/XProject';

const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'});

@Injectable()
export class ProjectListService {
  constructor(private httpClient: HttpClient) {
  };

  getD(): Promise<XProject[]> {
    const url = '/_s_share/get_project_list';
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

  setX(data: any): XProject {
    const x = new XProject();
    x.id = data['id'];
    x.sn = data['sn'];
    x.label = data['label'];
    x.lenovo_user_sn = data['lenovo_user_sn'];
    x.enterprise_sn = data['enterprise_sn'];
    const create_dt = new Date(data['create_dt']);
    x.create_dt = create_dt.getFullYear() + '/'
      + (create_dt.getMonth() + 1) + '/' + create_dt.getDate();
    x.total_budget = data['total_budget'];
    x.lenovo_label = data['lenovo_label'];
    x.enterprise_label = data['enterprise_label'];
    x.plan_start_dt = data['plan_start_dt'];
    x.plan_end_dt = data['plan_end_dt'];
    x.total_real_investment = data['total_real_investment'];
    x.level_label = data['level_label'];
    x.type_label = data['type_label'];
    x.status_label = data['status_label'];
    return x;
  }

  handleError(error: any): Promise<any> {
    console.error('对不起' + error);
    return Promise.reject(error.message || error);
  }
}
