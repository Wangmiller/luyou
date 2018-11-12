import {Component, OnInit} from '@angular/core';
import {UserEditService} from './user_edit.service';
import {ActivatedRoute} from '@angular/router';
import { XUser } from '../../@xmodel/XUser';
import { XKV } from '../../@xmodel/XKV';
import {nbWindowFactory} from "@nebular/theme";

@Component({
  selector: 'ngx-adamiya-user-edit',
  styleUrls: ['user_edit.scss'],
  templateUrl: 'user_edit.html',
  providers: [UserEditService],

})
export class UserEditComponent implements OnInit {
  private sn: string;
  public CurrentX = new XUser();
  settingsProject = {
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
          return '<a class="text-white" title="详细" href="#/pages_a/_s_share/user_detail/' +
            row.sn +
            '"><i class="nb-list"></i></a>'
        },
        filter: false,
      },
    },
  };

  settingsProduct = {
    actions: {
      add: false,
      edit: false,
      delete: {
        deleteButtonContent: '<i class="nb-trash"></i>',
        confirmDelete: true,
      },
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
          return '<a class="text-white" title="详细" href="#/pages_u/_s_share/user_detail/' +
            row.sn +
            '"><i class="nb-list"></i></a>'
        },
        filter: false,
      },
    },
  };

  settingsFile = {
    actions: {
      add: false,
      edit: false,
      delete: {
        deleteButtonContent: '<i class="nb-trash"></i>',
        confirmDelete: true,
      },
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
    },
  };

  xsUser: XUser[];
  xsELevel: XKV[];
  xsEType: XKV[];
  xsEStatus: XKV[];
  xsEClass: XKV[];

  constructor(private service: UserEditService, public route: ActivatedRoute) {
    const dateObj = new Date();
    this.sn = this.route.snapshot.params['sn'];
  }

  private handleError(error: any) {
    window.alert('对不起，' + error);
  }

  ngOnInit() {
    this.service.getDULevel().then(
      res => {
        this.xsELevel = res;
      }).catch(this.handleError);
    this.service.getDUType().then(
      res => {
        this.xsEType = res;
      }).catch(this.handleError);
    this.service.getDUStatus().then(
      res => {
        this.xsEStatus = res;
      }).catch(this.handleError);
    this.service.getD(this.sn).then(
      res => {
        this.xsUser = res;
        this.CurrentX = this.xsUser[0];
      }).catch(this.handleError);
  }


  backD() {
    window.location.href = '#/pages_a/_adamiya/all_user_list';
  }

  updateD() {
    this.service.editD(this.CurrentX);
  }

  updateP() {
    this.service.editP(this.CurrentX);
  }

}
