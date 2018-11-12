import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import {XSTAPieSeriesData} from '../../@xmodel/XSTAPieSeriesData';
import {XSTAAreaStackSeriesData} from '../../@xmodel/XSTAAreaStackSeriesData';
import {XSTAEnterprise} from '../../@xmodel/XSTAEnterprise';

const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'});

@Injectable()
export class STAByEnterpriseService {
  constructor(private httpClient: HttpClient) {
    localStorage.setItem('sta_by_enterprise_industry_dt', '');
    localStorage.setItem('sta_by_enterprise_scene_dt', '');
    localStorage.setItem('sta_by_enterprise_grow_industry_ym_dt', '');
    localStorage.setItem('sta_by_enterprise_grow_industry_dt', '');
  };

  getDSTA(sn): Promise<XSTAEnterprise[]> {
    const url = '/_s_adamiya/get_sta_enterprise';
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
            listx.push(this.setXSTA(data[i]));
          }
          return listx;
        },
      ).catch(this.handleError);
  }

  setXSTA(data: any): XSTAEnterprise {
    const x = new XSTAEnterprise();
    x.this_year_enterprise_industry_count = data['this_year_enterprise_industry_count'];
    x.this_year_enterprise_scene_count = data['this_year_enterprise_scene_count'];
    x.this_year_enterprise_count = data['this_year_enterprise_count'];
    x.all_enterprise_count = data['all_enterprise_count'];
    x.last_year_enterprise_count = data['last_year_enterprise_count'];
    x.last_update_dt = data['last_update_dt'];
    return x;
  }

  getDIndustry() {
    localStorage.setItem('sta_by_enterprise_xssd_industry', '');
    localStorage.setItem('sta_by_enterprise_xsld_industry', '');
    const url = '/_s_adamiya/get_sta_enterprise_industry';
    const params = new HttpParams()
      .set('ln', '');
    const xssd = [];
    const xsld = [];
    this.httpClient.post(url, params,
      {
        headers,
      })
      .toPromise().then(data => {
        const count = (<Array<string>>data).length;
        for (let i = 0; i < count; i++) {
          xssd.push(this.setX(data[i]));
          xsld.push(data[i]['name']);
        }
        const ls1 = JSON.stringify(xssd);
        // window.alert(ls1);
        const ls2 = JSON.stringify(xsld);
        // window.alert(ls2);
        localStorage.setItem('sta_by_enterprise_xssd_industry', ls1);
        localStorage.setItem('sta_by_enterprise_xsld_industry', ls2);
        localStorage.setItem('sta_by_enterprise_industry_dt', '1');
      },
    ).catch(this.handleError);
  }

  getDScene() {
    localStorage.setItem('sta_by_enterprise_xssd_scene', '');
    localStorage.setItem('sta_by_enterprise_xsld_scene', '');
    const url = '/_s_adamiya/get_sta_enterprise_scene';
    const params = new HttpParams()
      .set('ln', '');
    const xssd = [];
    const xsld = [];
    this.httpClient.post(url, params,
      {
        headers,
      })
      .toPromise().then(data => {
        const count = (<Array<string>>data).length;
        for (let i = 0; i < count; i++) {
          xssd.push(this.setX(data[i]));
          xsld.push(data[i]['name']);
        }
        const ls1 = JSON.stringify(xssd);
        // window.alert(ls1);
        const ls2 = JSON.stringify(xsld);
        // window.alert(ls2 + '222');
        localStorage.setItem('sta_by_enterprise_xssd_scene', ls1);
        localStorage.setItem('sta_by_enterprise_xsld_scene', ls2);
        localStorage.setItem('sta_by_enterprise_scene_dt', '1');
      },
    ).catch(this.handleError);
  }

  setX(data: any): XSTAPieSeriesData {
    const x = new XSTAPieSeriesData();
    x.value = data['value'];
    x.name = data['name'];
    return x;
  }

  oldname;
  newname;
  index;
  oldym;
  xsldym = [];

  getDGrowIndustryYM() {
    localStorage.setItem('sta_by_enterprise_xsld_year_month', '');
    this.oldym = '';
    const url = '/_s_adamiya/get_sta_enterprise_grow_by_industry_ym';
    const params = new HttpParams()
      .set('ln', '');
    this.httpClient.post(url, params,
      {
        headers,
      })
      .toPromise().then(data => {
        const count = (<Array<string>>data).length;
        for (let i = 0; i < count; i++) {
          // 年月序列
          const newym = data[i]['yyyy'].toString() + '/' + data[i]['mm'].toString();
          if (newym !== this.oldym) {
            this.oldym = newym;
            this.xsldym.push(newym);
          }
        }
        const ls1 = JSON.stringify(this.xsldym);
        // window.alert(ls1);
        localStorage.setItem('sta_by_enterprise_xsld_year_month', ls1);
        localStorage.setItem('sta_by_enterprise_grow_industry_ym_dt', '1');
      },
    ).catch(this.handleError);
  }

  getDGrowIndustry() {
    localStorage.setItem('sta_by_enterprise_xssd_grow_industry', '');
    this.oldname = '';
    this.newname = '';
    const url = '/_s_adamiya/get_sta_enterprise_grow_by_industry';
    const params = new HttpParams()
      .set('ln', '');
    const xssd = [];
    this.httpClient.post(url, params,
      {
        headers,
      })
      .toPromise().then(data => {
        const count = (<Array<string>>data).length;
        this.index = 0;
        while (this.index < count) {
          // 行业序列
          this.oldname = data[this.index]['name']; // 必然有一个元素才会进入 while
          // window.alert(this.oldname);
          const xasssd = new XSTAAreaStackSeriesData();
          const xasssd_data = [];
          xasssd.name = data[this.index]['name'];
          xasssd.type = data[this.index]['type'];
          xasssd.stack = data[this.index]['stack'];
          xasssd.areaStyle = data[this.index]['areaStyle'];
          // 行业序列数据初始化
          for (let j = 0; j < this.xsldym.length; j++) {
            xasssd_data.push('0');
          }
          for (let i = this.index; i < count; i++) {
            this.newname = data[i]['name'];
            if (this.newname !== this.oldname) {
              break;
            }
            this.index ++;
            // 行业序列数据，要匹配年月
            const ym = data[i]['yyyy'].toString() + '/' + data[i]['mm'].toString();
            const ymindex = this.xsldym.indexOf(ym);
            if (ymindex > -1)
              xasssd_data[ymindex] = data[i]['value'];
          }
          xasssd.data = xasssd_data;
          xssd.push(xasssd);
        }
        const ls1 = JSON.stringify(xssd);
        // window.alert(ls1);
        localStorage.setItem('sta_by_enterprise_xssd_grow_industry', ls1);
        localStorage.setItem('sta_by_enterprise_grow_industry_dt', '1');
      },
    ).catch(this.handleError);
  }

  handleError(error: any): Promise<any> {
    console.error('对不起' + error);
    return Promise.reject(error.message || error);
  }
}
