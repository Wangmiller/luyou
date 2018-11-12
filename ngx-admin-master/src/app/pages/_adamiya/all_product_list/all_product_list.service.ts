import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import { XProduct } from '../../@xmodel/XProduct';
import {XFilter} from '../../@xmodel/XFilter';

const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'});
const dicenterprise = new Array(); // 定义一个字典

@Injectable()
export class AllProductListService {
  constructor(private httpClient: HttpClient) {
  };

  getD(timefilter:string): Promise<XProduct[]> {
    const url = '/_s_share/get_product_list';
    const params = new HttpParams()
      .set('ln', '')
      .set('timefilter',timefilter);
    const listx = [];
    return this.httpClient.post(url, params,
      {
        headers,
      })
      .toPromise().then(data => {
          const count = (<Array<string>>data).length;
          for (let i = 0; i < count; i++) {
            listx.push(this.setX(data[i]));
            // console.log(data[i]);
          }
          return listx;
        },
      ).catch(this.handleError);
  }

  setX(data: any): XProduct {
    const x = new XProduct();
    x.id = data['id'];
    x.sn = data['sn'];
    x.label = data['label'];
    x.custom_code = data['custom_code'];
    x.sku = data['sku'];
    x.price_sale = data['price_sale'];
    x.price_out = data['price_out'];
    x.moq = data['moq'];
    x.moq_unit = data['moq_unit'];
    x.level_sn = data['level_sn'];
    x.type_sn = data['type_sn'];
    x.status_sn = data['status_sn'];
    x.level_label = data['level_label'];
    x.type_label = data['type_label'];
    x.status_label = data['status_label'];
    x.enterprise_sn = data['enterprise_sn'];
    x.enterprise_label = data['enterprise_label'];
    x.attachedfile = '/upload/attachedfile/' + data['enterprise_label'];
    x.coop_status = data['coop_status'] || '待明确';
    x.create_dt = data['create_dt'];
    x.sample_provided = data['sample_provided'];
    // console.log(x);
    return x;
  }

  getDEnterprise(): Promise<XFilter[]> {
    // return this.http.get('/_s_adamiya/get_enterprise_list').map((res) => res.json());
    const url = '/_s_share/get_enterprise_list';
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
            listx.push(this.setXFilter(data[i]));
          }
          return listx;
        },
      ).catch(this.handleError);
  }

  setXFilter(data: any): XFilter {
    const x = new XFilter();
    x.title = data['label'];
    x.value = data['label'];
    dicenterprise[data['label']] = data['sn'];
    return x;
  }

  handleError(error: any): Promise<any> {
    console.error('对不起' + error);
    return Promise.reject(error.message || error);
  }

  createD(newData) {
    const cusn = localStorage.getItem('cu_sn');
    if (cusn && cusn !== '') {
      const url = '/_s_share/create_product_list';
      const listx = [];
      const params = new HttpParams()
        .set('label', newData['label'])
        .set('sku', newData['sku'])
        .set('usn', cusn)
        .set('enterprise_sn', dicenterprise[newData['enterprise_label']])
        .set('moq_unit', newData['moq_unit'] || '')
        .set('sample_provided', newData['sample_provided'] || 0);
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
    const url = '/_s_share/edit_product_list';
    const params = new HttpParams()
      .set('label', newData['label'])
      .set('enterprise_sn', dicenterprise[newData['enterprise_label']])
      .set('sku', newData['sku'])
      .set('sn', newData['sn'])
      .set('sample_provided', newData['sample_provided'] || 0);
    // window.alert('lll');
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
      .set('en', 'product_info');
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
