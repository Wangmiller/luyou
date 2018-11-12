import {Component, OnInit} from '@angular/core';
import {UserProjectListService} from './user_project_list.service';
import {XProject} from '../../@xmodel/XProject';

@Component({
  selector: 'ngx-share-user-project-list',
  templateUrl: './user_project_list.html',
  styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
})

export class UserProjectListComponent implements OnInit {

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
      custom_code: {
        title: '项目编号',
        type: 'string',
      },
      label: {
        title: '项目名称',
        type: 'string',
      },
      total_budget: {
        title: '总预算',
        type: 'number',
      },
      type_label: {
        editable: false,
        title: '类型',
        type: 'string',
      },
      status_label: {
        editable: false,
        title: '状态',
        type: 'string',
      },
      lenovo_label: {
        editable: false,
        title: '对接人',
        type: 'string',
      },
      create_dt: {
        editable: false,
        title: '创建时间',
        type: 'string',
      },
      Actions: {
        title: '编辑',
        type: 'html',
        valuePrepareFunction: (cell, row) => {
          return '<a class="text-white" title="编辑" href="#/pages_u/_share/project_edit/' +
            row.sn +
            '">-<i class="nb-edit"></i>-</a>'
        },
        filter: false,
      },
    },
  };

  xs: XProject[];

  constructor(private service: UserProjectListService) {
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
    event.confirm.resolve(event.newData);
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
