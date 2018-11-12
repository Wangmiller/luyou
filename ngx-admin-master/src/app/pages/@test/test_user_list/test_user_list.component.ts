import {Component, OnInit} from '@angular/core';
import {TestUserListService} from './test_user_list.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'ngx-accesses-test-user-list',
  templateUrl: './test_user_list.component.html',
  styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
})

export class TestUserListComponent implements OnInit {

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
      confirmEdit: true,
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      Actions: {
        title: 'Detail',
        type: 'html',
        valuePrepareFunction: (cell, row) => {
          return '<a title="Detail" href="#/pages/_s_share/product_list"> <i class="nb-edit"></i></a>'
        },
        filter: false,
      },
      label: {
        title: '姓名',
        type: 'string',
      },
      login_name: {
        title: '登录名',
        type: 'string',
      },
      type_sn: {
        title: '类型',
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
    },
  };

  dataSource: Observable<any>;
  dataSet: Array<any> = [];

  constructor(private service: TestUserListService) {
    this.dataSource = this.service.getD();
  }

  ngOnInit() {
    this.dataSource.subscribe(
      (data) => this.dataSet = data,
    )
  }

  onCreateConfirm(event): void {
    if (window.confirm(event.data['label'])) {
      window.alert(event.newdata['tel']);
      event.confirm.resolve(event.newData);
      this.service.createD(event.newData);
    } else {
      event.confirm.reject();
    }
  }

  onEditConfirm(event): void {
    if (window.confirm('确定要删除吗？')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  onDeleteConfirm(event): void {
    if (window.confirm('确定要删除吗？')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
