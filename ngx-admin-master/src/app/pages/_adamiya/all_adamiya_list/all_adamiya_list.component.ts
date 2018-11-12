import {Component, OnInit} from '@angular/core';
import {AllAdamiyaListService} from './all_adamiya_list.service';
import {XUser} from '../../@xmodel/XUser';

@Component({
  selector: 'ngx-adamiya-all-adamiya-list',
  templateUrl: './all_adamiya_list.html',
  styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
})

export class AllAdamiyaListComponent implements OnInit {

  settings = {
    actions: {
      delete: false,
    },
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
    columns: {
      label: {
        title: '姓名',
        type: 'string',
      },
      login_name: {
        title: '登录名',
        type: 'string',
      },
      position: {
        title: '职位',
        type: 'string',
      },
      mobile: {
        title: '手机',
        type: 'string',
      },
      email: {
        title: '邮箱',
        type: 'string',
      },
      tel: {
        title: '办公电话',
        type: 'string',
      },
      Actions: {
        title: '编辑',
        type: 'html',
        valuePrepareFunction: (cell, row) => {
          return '<a class="text-white" title="编辑" href="#/pages_a/_adamiya/adamiya_edit/' +
            row.sn +
            '">-<i class="nb-edit"></i>-</a>'
        },
        editable: false,
        filter: false,
      },
    },
  };

  xs: XUser[];

  constructor(private service: AllAdamiyaListService) {
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
  }

  onEditConfirm(event): void {
    this.service.editD(event.newData);
    event.confirm.resolve(event.newData);
  }
}
