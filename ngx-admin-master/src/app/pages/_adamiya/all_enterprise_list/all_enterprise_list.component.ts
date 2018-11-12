
import { Component, OnInit } from '@angular/core';
import { AllEnterpriseListService } from './all_enterprise_list.service';
import { XEnterprise } from '../../@xmodel/XEnterprise';
import { XKV } from '../../@xmodel/XKV';
import { DateRenderComponent } from './../../_share/DateRender.component';
import {TFRenderComponent} from './../../_share/TFRender.component';

class TableColumn {
  field: string;
  title: string;
  type: string;
  isDisplay: boolean;
  isExport: boolean;
  valuePrepareFunction: Function;
}
@Component({
  selector: 'ngx-adamiya-all-enterprise-list',
  templateUrl: './all_enterprise_list.html',
  styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
})

export class AllEnterpriseListComponent implements OnInit {
  xsELevel: XKV[];
  xsEType: XKV[];
  xsEStatus: XKV[];
  xsEClass: XKV[];
  settings = {
    fileName: '企业列表',
    actions: {
      columnTitle: '操作',
      add: true,
      edit: true,
      delete: true,
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
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      label: {
        title: '企业名称',
        type: 'string',
        isExport: true,
      },
      // level_label: {
      //   title: '成熟度',
      //   type: 'string',
      //   editor: {
      //     type: 'list',
      //     config: {
      //       list: [
      //         {value: '已上市', title: '已上市'},
      //         {value: '未计划上市', title: '未计划上市'},
      //         {value: '预备上市', title: '预备上市'},
      //       ],
      //     },
      //   },
      //   filter: {
      //     type: 'list',
      //     config: {
      //       selectText: '全部...',
      //       list: [
      //         { value: '已上市', title: '已上市' },
      //         { value: '未计划上市', title: '未计划上市' },
      //         { value: '预备上市', title: '预备上市' },
      //       ],
      //     },
      //   },
      // },
      // other_credits: {
      //   title: '资质认证',
      //   type: 'string',
      // },
      // type_label: {
      //   title: '企业类别',
      //   type: 'string',
      //   editor: {
      //     type: 'list',
      //     config: {
      //       list: [
      //         {value: '独资公司', title: '独资公司'},
      //         {value: '有限责任公司', title: '有限责任公司'},
      //         {value: '股份有限公司', title: '股份有限公司'},
      //       ],
      //     },
      //   },
      //   filter: {
      //     type: 'list',
      //     config: {
      //       selectText: '全部...',
      //       list: [
      //         { value: '独资公司', title: '独资公司' },
      //         { value: '有限责任公司', title: '有限责任公司' },
      //         { value: '股份有限公司', title: '股份有限公司' },
      //       ],
      //     },
      //   },
      // },
      // seo_tag: {
      //   title: '企业标签',
      //   type: 'string',
      // },
      basic_is_lenovo: {
        title: '是否合作过',
        type: 'custom',
        isExport: true,
        renderComponent: TFRenderComponent,
        editable: true,
        editor: {
          type: 'list',
          config: {
            list: [
              { value: 1, title: '是' },
              { value: 0, title: '否' },
            ],
          },
        },
        filter: {
          type: 'list',
          class: 'select-filter',
          config: {
            selectText: '全部...',
            list: [
              { value: 1, title: '是' },
              { value: 0, title: '否' },
            ],
          },
        },
      },
      lenovo_label: {
        title: '联想负责人',
        type: 'string',
        editable: true,
        isExport: true,
      },
      basic_dic_match_status_label: {
        title: '对接状态',
        type: 'string',
        isExport: true,
        editor: {
          type: 'list',
          config: {
            list: [
              { value: '已对接', title: '已对接' },
              { value: '待对接', title: '待对接' },
            ],
          },
        },
        filter: {
          type: 'list',
          config: {
            selectText: '全部...',
            list: [
              { value: '已对接', title: '已对接' },
              { value: '待对接', title: '待对接' },
            ],
          },
        },
      },
      basic_nda: {
        title: 'NDA签署',
        type: 'string',
        isExport: true,
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
      create_dt: {
        title: '添加时间',
        type: 'custom',
        isExport: true,
        renderComponent: DateRenderComponent,
      },
      Actions: {
        title: '详细',
        type: 'html',
        valuePrepareFunction: (cell, row) => {
          return '<a class="text-white" title="编辑" href="#/pages_a/_adamiya/enterprise_edit/' +
            row.sn +
            '">-<i class="nb-edit"></i>-</a>'
        },
        filter: false,
      },
    },
  };
  timefilter: string = 'all';
  doQuery(timefilter: string): void {
    this.timefilter = timefilter;
    this.service.getD(this.timefilter).then(
      res => {
        this.xs = res;
      }).catch(this.handleError);
    // if (this.settings.isRemoteDataSource) {
    //   this.doFilterRemote();
    // } else {
    //   this.doFilterLocal();
    // }
  }

  export2Csv(): void {
    const columns: TableColumn[] = Array.from(this.columnMap.values());

    let encodedStr = columns.reduce((acct, current: TableColumn) => {

        // @ts-ignore
        if (current.isExport != false) {
        return acct += '"' + current.title + '",';
      } else {
        return acct;
      }
    }, '');
    encodedStr = encodedStr.slice(0, -1);
    encodedStr += '\r\n';

      // @ts-ignore
      let fields: string[] = columns.reduce((acct, column: TableColumn) => {

          // @ts-ignore
          if (column.isExport != false) {
        acct.push(column.field);
      }
      return acct;
    }, []);

    this.service.getD(this.timefilter).then((rows) => {

      rows.forEach((row) => {
        fields.forEach((field) => {
          if (row.hasOwnProperty(field)) {
            let value = row[field];

            if (!value) {
              value = '';
            }
              // @ts-ignore
              let valuePrepare = this.columnMap.get(field).valuePrepareFunction;
            if (valuePrepare) {
              value = valuePrepare.call(null, value, row);
            }
            encodedStr += '"' + value + '",'
          }
        });
        encodedStr = encodedStr.slice(0, -1);
        encodedStr += '\r\n';
      });

      // @ts-ignore
        let a = document.createElement('a');
      a.setAttribute('style', 'display:none;');
      document.body.appendChild(a);

        // @ts-ignore
        let blob = new Blob(['\ufeff', encodedStr], {type: 'text/csv'});
      a.href = window.URL.createObjectURL(blob);
      a.download = (this.settings.fileName || '下载文件') + this.timefilter + '.csv';
      a.click();
    });
  }
  prepareColumnMap(): void {

    for (const key in this.settings.columns) {

      if (!this.settings.columns.hasOwnProperty(key)) {
        continue;
      }

      const title: string = this.settings.columns[key]['title'];
        // @ts-ignore
        let column: TableColumn = new TableColumn();
      column.type = this.settings.columns[key]['type'];
      column.title = this.settings.columns[key]['title'];
      column.field = key;
      column.isDisplay = this.settings.columns[key]['isDisplay'];
      column.isExport = this.settings.columns[key]['isExport'];
      column.valuePrepareFunction = this.settings.columns[key]['valuePrepareFunction'];
      if (column.isExport) {
        this.columnMap.set(column.field, column);
      }

      // if (this.settings.columns[key].isDisplay == false) {
      //   delete this.settings.columns[key];
      // }
    }
  }

  xs: XEnterprise[];
  columnMap: Map<string, TableColumn> = new Map<string, TableColumn>();
  constructor(private service: AllEnterpriseListService) {
  }

  ngOnInit() {

    this.prepareColumnMap();
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
    this.service.getD(this.timefilter).then(
      res => {
        this.xs = res;
      }).catch(this.handleError);
  }

  private handleError(error: any) {
    console.error('对不起' + error);
  }

  onCreateConfirm(event): void {
    this.service.createD(event.newData, this.xsEType, this.xsELevel, this.xsEStatus);
    this.service.getD(this.timefilter).then(
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

   updateAll(): void {
    this.service.updateAll(this.timefilter).then(
        res => {
            this.getNewD();
        }).catch(this.handleError);
   }
   getNewD(): void {
       this.service.getD(this.timefilter).then(
           res => {
               this.xs = res;
           }).catch(this.handleError);
   }
}
