import {Component, OnInit} from '@angular/core';
import {UserProductListService} from './user_product_list.service';
import {XProduct} from '../../@xmodel/XProduct';

@Component({
  selector: 'ngx-share-user-product-list',
  templateUrl: './user_product_list.html',
  styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
})

export class UserProductListComponent implements OnInit {

  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmCreate: true,
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmSave: true,
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
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
        title: '编辑',
        type: 'html',
        valuePrepareFunction: (cell, row) => {
          return '<a class="text-white" title="编辑" href="#/pages_u/_share/product_edit/' +
            row.sn +
            '">-<i class="nb-edit"></i>-</a>'
        },
        filter: false,
      },
    },
  };

  xs: XProduct[];

  constructor(private service: UserProductListService) {
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

  onCreateConfirm(event): void {
    this.service.createD(event.newData);
    event.confirm.resolve(event.newData);
    this.service.getD().then(
      res => {
        this.xs = res;
      }).catch(this.handleError);
  }

  onEditConfirm(event): void {
    this.service.editD(event.newData);
    event.confirm.resolve();
  }

  onDeleteConfirm(event): void {
    if (window.confirm('确定要删除吗？')) {
      this.service.deleteD(event.data);
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
