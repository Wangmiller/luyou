import {Component, OnInit} from '@angular/core';
import {EnterpriseListService} from './enterprise_list.service';
import {XEnterprise} from '../../@xmodel/XEnterprise';

@Component({
  selector: 'ngx-share-enterprise-list',
  templateUrl: './enterprise_list.html',
  styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
})

export class EnterpriseListComponent implements OnInit {

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
        title: '企业名称',
        type: 'string',
      },
      level_label: {
        title: '成熟等级',
        type: 'string',
      },
      type_label: {
        title: '类型',
        type: 'string',
        editable: false,
      },
      basic_cn_uid: {
        title: '统一信用代码',
        type: 'string',
      },
      basic_setup_dt: {
        title: '设立日期',
        type: 'string',
      },
      basic_reg_capital: {
        title: '注册资本',
        type: 'string',
      },
      basic_biz_tel: {
        title: '办公电话',
        type: 'string',
      },
      Actions: {
        title: '详细',
        type: 'html',
        valuePrepareFunction: (cell, row) => {
          return '<a class="text-white" title="详细" href="#/pages_u/_share/enterprise_detail/' +
            row.sn +
            '"><i class="nb-list"></i></a>'
        },
        filter: false,
      },
    },
  };

  xs: XEnterprise[];

  constructor(private service: EnterpriseListService) {
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

