import {Component, OnInit} from '@angular/core';
import {ProductListService} from './product_list.service';
import {XProduct} from '../../@xmodel/XProduct';

@Component({
  selector: 'ngx-share-product-list',
  templateUrl: './product_list.html',
  styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
})

export class ProductListComponent implements OnInit {

  settings = {
    actions: {
      add: false,
      edit: false,
      delete: false,
    },
    columns: {
      id: {
        editable: false,
        title: 'ID',
        type: 'number',
        filter: false,
      },
      label: {
        title: '产品名称',
        type: 'string',
      },
      sku: {
        title: 'SKU',
        type: 'string',
      },
      moq: {
        title: 'MOQ',
        type: 'number',
      },
      moq_unit: {
        title: '单位',
        type: 'string',
      },
      price_sale: {
        title: '零售价（元）',
        type: 'number',
      },
      price_out: {
        title: '出货价（元）',
        type: 'number',
      },
      Actions: {
        title: '详细',
        type: 'html',
        valuePrepareFunction: (cell, row) => {
          return '<a class="text-white" title="详细" href="#/pages_u/_share/product_detail/' +
            row.sn +
            '"><i class="nb-list"></i></a>'
        },
        filter: false,
      },
    },
  };

  xs: XProduct[];

  constructor(private service: ProductListService) {
  }

  ngOnInit() {
    this.service.getD().then(
      res => {
        this.xs = res;
      }).catch(this.handleError);
  }

  private handleError(error: any) {
    console.error('对不起' + error);
  }

}
