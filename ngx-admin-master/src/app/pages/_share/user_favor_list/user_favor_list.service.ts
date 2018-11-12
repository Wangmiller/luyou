import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import { XProduct } from '../../@xmodel/XProduct';

const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'});

@Injectable()
export class UserFavorListService {
  constructor(private httpClient: HttpClient) {
  };

  getD(): Promise<XProduct[]> {
    const url = '/_s_share/get_user_favor_list';
    const cusn = localStorage.getItem('cu_sn');
    if (cusn && cusn !== '') {
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
    x.sn = data['product_sn'];
    x.label = data['product_label'];
    x.sku = data['sku'];
    x.price_sale = data['price_sale'];
    x.price_out = data['price_out'];
    x.moq = data['moq'];
    x.moq_unit = data['moq_unit'];
    x.level_label = data['product_level_label'];
    x.type_label = data['product_type_label'];
    x.status_label = data['product_status_label'];
    return x;
  }

  handleError(error: any): Promise<any> {
    console.error('对不起' + error);
    return Promise.reject(error.message || error);
  }

  deleteD(newData) {
    const url = '/_s_share/delete_to_recycle';
    const listx = [];
    const params = new HttpParams()
      .set('id', newData['id'])
      .set('en', 'cr_user_product');
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
