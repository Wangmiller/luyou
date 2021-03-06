import {Component, OnInit} from '@angular/core';
import {UserEnterpriseListService} from './user_enterprise_list.service';
import {XEnterprise} from '../../@xmodel/XEnterprise';
import {XKV} from '../../@xmodel/XKV';

@Component({
  selector: 'ngx-share-user-enterprise-list',
  templateUrl: './user_enterprise_list.html',
  styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
})

export class UserEnterpriseListComponent implements OnInit {
  xsELevel: XKV[];
  xsEType: XKV[];
  xsEStatus: XKV[];
  xsEClass: XKV[];
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
        title: '企业名称',
        type: 'string',
      },
      level_label: {
        title: '成熟度',
        type: 'string',
        editor: {
          type: 'list',
          config: {
            list: [
              {value: '已上市', title: '已上市'},
              {value: '未计划上市', title: '未计划上市'},
              {value: '预备上市', title: '预备上市'},
            ],
          },
        },
        filter: {
          type: 'list',
          config: {
            selectText: '全部...',
            list: [
              { value: '已上市', title: '已上市' },
              { value: '未计划上市', title: '未计划上市' },
              { value: '预备上市', title: '预备上市' },
            ],
          },
        },
      },
      other_credits: {
        title: '资质认证',
        type: 'string',
      },
      type_label: {
        title: '企业类别',
        type: 'string',
        editor: {
          type: 'list',
          config: {
            list: [
              {value: '独资公司', title: '独资公司'},
              {value: '有限责任公司', title: '有限责任公司'},
              {value: '股份有限公司', title: '股份有限公司'},
            ],
          },
        },
        filter: {
          type: 'list',
          config: {
            selectText: '全部...',
            list: [
              { value: '独资公司', title: '独资公司' },
              { value: '有限责任公司', title: '有限责任公司' },
              { value: '股份有限公司', title: '股份有限公司' },
            ],
          },
        },
      },
      seo_tag: {
        title: '企业标签',
        type: 'string',
      },
      basic_is_lenovo: {
        title: '是否合作过',
        type: 'string',
        //editable: false,
        filter: {
          type: 'list',
          config: {
            selectText: '全部...',
            list: [
              { value: '是', title: '是' },
              { value: '否', title: '否' },
            ],
          },
        },
      },
      lenovo_label: {
        title: '联想负责人',
        type: 'string',
        editable: false,
      },
      basic_dic_match_status_label: {
        title: '对接状态',
        type: 'string',
        editor: {
          type: 'list',
          config: {
            list: [
              {value: '已对接', title: '已对接'},
              {value: '未对接', title: '未对接'},
            ],
          },
        },
        filter: {
          type: 'list',
          config: {
            selectText: '全部...',
            list: [
              { value: '已对接', title: '已对接' },
              { value: '未对接', title: '未对接' },
            ],
          },
        },
      },
      basic_nda: {
        title: 'NDA签署',
        type: 'string',
        editor: {
          type: 'list',
          config: {
            list: [
              { value: '是', title: '是' },
              { value: '否', title: '否' },
            ],
          },
        },
        filter: {
          type: 'list',
          config: {
            selectText: '全部...',
            list: [
              { value: '是', title: '是' },
              { value: '否', title: '否' },
            ],
          },
        },
      },
      Actions: {
        title: '编辑',
        type: 'html',
        valuePrepareFunction: (cell, row) => {
          return '<a class="text-white" title="编辑" href="#/pages_u/_share/enterprise_edit/' +
            row.sn +
            '">-<i class="nb-edit"></i>-</a>'
        },
        filter: false,
        editable: false,
      },
    },
  };

  xs: XEnterprise[];

  constructor(private service: UserEnterpriseListService) {
  }

  ngOnInit() {
    this.service.getDELevel().then(
      res => {
        this.xsELevel = res;
      }).catch(this.handleError);
    this.service.getDEType().then(
      res => {
        this.xsEType = res;
      }).catch(this.handleError);
    this.service.getDEStatus().then(
      res => {
        this.xsEStatus = res;
      }).catch(this.handleError);
    this.service.getD().then(
      res => {
        this.xs = res;
      }).catch(this.handleError);
  }

  private handleError(error: any) {
    console.error('对不起' + error);
  }

  onCreateConfirm(event): void {
    this.service.createD(event.newData, this.xsEType, this.xsELevel, this.xsEStatus);
    this.service.getD().then(
      res => {
        this.xs = res;
        event.confirm.resolve(event.newData);
      }).catch(this.handleError);
    event.confirm.resolve(event.newData);
  }

  onEditConfirm(event): void {
    this.service.editD(event.newData, this.xsEType, this.xsELevel, this.xsEStatus);
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
