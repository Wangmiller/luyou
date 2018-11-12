import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import { XProductCompare } from '../../@xmodel/XProductCompare';

const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'});

@Injectable()
export class ProductCompareService {
  constructor(private httpClient: HttpClient) {
  };

  handleError(error: any): Promise<any> {
    console.error('对不起' + error);
    return Promise.reject(error.message || error);
  }

  deleteD() {
    const cusn = localStorage.getItem('cu_sn');
    if (cusn && cusn !== '') {
      const xs_pc = [];
      const x0 = new XProductCompare();
      x0.compare_item = '0';
      x0.display_code = 0;
      xs_pc.push(x0);
      const x1 = new XProductCompare();
      x1.compare_item = '产品出货价';
      x1.display_code = 1;
      xs_pc.push(x1);
      const x2 = new XProductCompare();
      x2.compare_item = '产品零售价';
      x2.display_code = 2;
      xs_pc.push(x2);
      const x3 = new XProductCompare();
      x3.compare_item = '使用场景';
      x3.display_code = 3;
      xs_pc.push(x3);
      const x4 = new XProductCompare();
      x4.compare_item = '行业类别';
      x4.display_code = 4;
      xs_pc.push(x4);
      const x5 = new XProductCompare();
      x5.compare_item = 'SKU';
      x5.display_code = 5;
      xs_pc.push(x5);
      const x6 = new XProductCompare();
      x6.compare_item = '产品特性关键字';
      x6.display_code = 6;
      xs_pc.push(x6);
      const x7 = new XProductCompare();
      x7.compare_item = '公司名称';
      x7.display_code = 7;
      xs_pc.push(x7);
      const x8 = new XProductCompare();
      x8.compare_item = '产品成熟度';
      x8.display_code = 8;
      xs_pc.push(x8);
      const x9 = new XProductCompare();
      x9.compare_item = 'MOQ';
      x9.display_code = 9;
      xs_pc.push(x9);
      const x10 = new XProductCompare();
      x10.compare_item = '对接状态';
      x10.display_code = 10;
      xs_pc.push(x10);

      const lsnew = JSON.stringify(xs_pc);
      localStorage.setItem(cusn + '_product_compare_sns', '');
      localStorage.setItem(cusn + '_product_compare', lsnew);
      localStorage.setItem(cusn + '_product_compare_dt', '1');
    }
  }
}
