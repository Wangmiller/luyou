import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import { XProduct } from '../../@xmodel/XProduct';

const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'});

@Injectable()
export class UserProductListService {
  constructor(private httpClient: HttpClient) {
  };

  getD(): Promise<XProduct[]> {
    const cusn = localStorage.getItem('cu_sn');
    if (cusn && cusn !== '') {
      const url = '/_s_share/get_user_product_list';
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

  setX(data: any): XProduct {
    const x = new XProduct();
    x.id = data['id'];
    x.sn = data['sn'];
    x.label = data['label'];
    x.sku = data['sku'];
    x.price_sale = data['price_sale'];
    x.price_out = data['price_out'];
    x.moq = data['moq'];
    x.moq_unit = data['moq_unit'];
    x.level_label = data['level_label'];
    x.type_label = data['type_label'];
    x.status_label = data['status_label'];
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
        .set('price_out', newData['price_out'])
        .set('price_sale', newData['price_sale'])
        .set('sku', newData['sku'])
        .set('moq', newData['moq'])
        .set('usn', cusn)
        .set('enterprise_sn', '0')
        .set('moq_unit', newData['moq_unit']);
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
    const listx = [];
    const params = new HttpParams()
      .set('label', newData['label'])
      .set('price_out', newData['price_out'])
      .set('price_sale', newData['price_sale'])
      .set('sku', newData['sku'])
      .set('moq', newData['moq'])
      .set('moq_unit', newData['moq_unit'])
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
    const listx = [];
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
