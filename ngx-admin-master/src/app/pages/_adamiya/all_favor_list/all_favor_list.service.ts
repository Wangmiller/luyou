import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import { XProduct } from '../../@xmodel/XProduct';

const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'});

@Injectable()
export class AllFavorListService {
  constructor(private httpClient: HttpClient) {
  };

  getD(): Promise<XProduct[]> {
    const url = '/_s_adamiya/get_favor_list';
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

  setX(data: any): XProduct {
    const x = new XProduct();
    x.id = data['product_id'];
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
    x.favor_user_label = data['user_label'];
    return x;
  }

  handleError(error: any): Promise<any> {
    console.error('对不起' + error);
    return Promise.reject(error.message || error);
  }
}
