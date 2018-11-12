import {Component, OnInit} from '@angular/core';
import {ProjectListService} from './project_list.service';
import {XProject} from '../../@xmodel/XProject';

@Component({
  selector: 'ngx-share-project-list',
  templateUrl: './project_list.html',
  styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
})

export class ProjectListComponent implements OnInit {

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
        type: 'string',
      },
      create_dt: {
        title: '创建时间',
        type: 'string',
      },
      lenovo_label: {
        title: '联想对接人',
        type: 'string',
      },
      status_label: {
        title: '状态',
        type: 'string',
      },
      type_label: {
        title: '类型',
        type: 'string',
      },
      Actions: {
        title: '详细',
        type: 'html',
        valuePrepareFunction: (cell, row) => {
          return '<a class="text-white" title="详细" href="#/pages_u/_share/project_detail/' +
            row.sn +
            '"><i class="nb-list"></i></a>'
        },
        filter: false,
      },
    },
  };

  xs: XProject[];

  constructor(private service: ProjectListService) {
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
