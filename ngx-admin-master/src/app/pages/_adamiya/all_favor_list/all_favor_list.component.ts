import { Component, OnInit } from '@angular/core';
import { AllFavorListService } from './all_favor_list.service';
import { XProduct } from '../../@xmodel/XProduct';

@Component({
  selector: 'ngx-adamiya-all-favor-list',
  templateUrl: './all_favor_list.html',
  styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
})

export class AllFavorListComponent implements OnInit {

  settings = {
    actions: {
      add: false,
      edit: false,
      delete: false,
    },
    columns: {
      // id: {
      //   title: 'ID',
      //   type: 'number',
      //   filter: false,
      //   editable: false,
      // },
      label: {
        title: '产品名称',
        type: 'string',
      },
      sku: {
        title: 'SKU',
        type: 'string',
      },
      enterprise_label: {
        title: '企业',
        type: 'string',
      },


      // moq: {
      //   title: 'MOQ',
      //   type: 'number',
      // },
      // moq_unit: {
      //   title: '单位',
      //   type: 'string',
      // },
      // price_sale: {
      //   title: '零售价（元）',
      //   type: 'number',
      // },
      // price_out: {
      //   title: '出货价（元）',
      //   type: 'number',
      // },


      coop_status: {
        title: '合作状态',
        type: 'string',
        editor: {
          type: 'list',
          config: {
            list: [
              { value: 'lecoo', title: 'lecoo' },
              { value: 'thinkplus', title: 'thinkplus' },
              { value: '智慧联想', title: '智慧联想' },
              { value: '天禧', title: '天禧' },
              { value: '惠商', title: '惠商' },
              { value: '待明确', title: '待明确' },
            ],
          },
        },
        filter: {
          type: 'list',
          config: {
            selectText: '全部...',
            list: [
              { value: 'lecoo', title: 'lecoo' },
              { value: 'thinkplus', title: 'thinkplus' },
              { value: '智慧联想', title: '智慧联想' },
              { value: '天禧', title: '天禧' },
              { value: '惠商', title: '惠商' },
              { value: '待明确', title: '待明确' },
            ],
          },
          favor_user_label: {
            title: '收藏者',
            type: 'string',
            editable: false,
          },
          Actions: {
            title: '详细编辑',
            type: 'html',
            valuePrepareFunction: (cell, row) => {
              return '<a class="text-white" title="编辑" href="#/pages_a/_adamiya/product_detail/' +
                row.sn +
                '">-<i class="nb-edit"></i>-</a>'
            },
            filter: false,
          },
        }
      }
    }
  };

  xs: XProduct[];

  constructor(private service: AllFavorListService) {
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
