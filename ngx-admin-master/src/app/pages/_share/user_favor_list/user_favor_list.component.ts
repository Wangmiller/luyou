import {Component, OnInit} from '@angular/core';
import {XProduct} from '../../@xmodel/XProduct';
import {UserFavorListService} from './user_favor_list.service';

@Component({
  selector: 'ngx-share-user-favor-list',
  templateUrl: './user_favor_list.html',
  styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
})

export class UserFavorListComponent implements OnInit {

  settings = {
    actions: {
      add: false,
      edit: false,
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
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

  constructor(private service: UserFavorListService) {
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

  onDeleteConfirm(event): void {
    if (window.confirm('确定要移除收藏吗？')) {
      this.service.deleteD(event.data);
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
