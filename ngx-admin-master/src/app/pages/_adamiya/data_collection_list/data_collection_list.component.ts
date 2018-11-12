import { Component, OnInit } from '@angular/core';
import { DataCollectionListService } from './data_collection_list.service';
import { XDataCollection } from '../../@xmodel/XDataCollection';
import {XFilter} from '../../@xmodel/XFilter';

class TableColumn {
  title: string;
  type: string;
  isDisplay: boolean;
  isExport: boolean;
  valuePrepareFunction: Function;
}
@Component({
  selector: 'ngx-adamiya-data-collection-list',
  templateUrl: './data_collection_list.html',
  styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
})

export class DataCollectionListComponent implements OnInit {
  xScene: XFilter[];
  xSource: XFilter[];
  settings = {
    fileName: '企业列表',
    actions: {
      columnTitle: '操作',
      add: false,
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
      deleteButtonContent: '<i class="nb-plus"></i>',
      confirmDelete: true,
    },
    columns: {
        product_name: {
        title: '产品名称',
        type: 'string',
        isExport: true,
        editable: false,
      },
        /*source: {
        title: '来源',
        type: 'string',
        editable: false,
        isExport: true,
      },*/
        source: {
            title: '来源',
            type: 'string',
            editable: false,
            isExport: true,
            /*editor: {
                type: 'list',
                config: {
                    list: [],
                },
            },*/
            filter: {
                type: 'list',
                class: 'select-filter',
                config: {
                    selectText: '全部',
                    list: [],
                },
            },
        },
        enterprise_name: {
            title: '企业',
            type: 'string',
            editable: false,
            isExport: true,
        },
        // industry_involved: {
        //     title: '所属行业',
        //     type: 'string',
        //     editable: true,
        //     isExport: true,
        // },
        label: {
            title: '场景',
            type: 'string',
            isExport: true,
            editor: {
                type: 'list',
                config: {
                    list: [],
                },
            },
            filter: {
                type: 'list',
                class: 'select-filter',
                config: {
                    selectText: '全部',
                    list: [],
                },
            },
        },
        project_status: {
            title: '状态',
            type: 'string',
            editable: false,
            /*editor: {
                type: 'list',
                config: {
                    list: [
                        { value: '众筹中', title: '众筹中' },
                        { value: '众筹结束', title: '众筹结束' },
                    ],
                },
            },*/
            filter: {
                type: 'list',
                class: 'select-filter',
                config: {
                    selectText: '全部...',
                    list: [
                        { value: '众筹中', title: '众筹中' },
                        { value: '众筹结束', title: '众筹结束' },
                    ],
                },
            },
        },
        progresss: {
            title: '进展',
            type: 'number',
            editable: false,
            isExport: true,
            valuePrepareFunction: (cell, row) => {
                return row.progresss + '%';
            },
        },
        supporter: {
            title: '支持人数',
            type: 'number',
            editable: false,
            isExport: true,
        },
        /*detail_url: {
            title: '地址',
            type: 'string',
            editable: false,
            isExport: true,
        },*/
    Actions: {
        title: '详情',
        type: 'html',
        valuePrepareFunction: (cell, row) => {
          return '<a class="text-white" title="详情" href="#/pages_a/_adamiya/data_collection_detail/' +
            row.product_name +
            '"><i class="nb-list"></i></a>'
        },
        filter: false,
        editable: false,
      },
    },
  };
  timefilter: string = 'sn';
  doQuery(timefilter: string): void {
    this.timefilter = timefilter;
    this.service.getD(this.timefilter).then(
      res => {
        this.xs = res;
      }).catch(this.handleError);
  }

  xs: XDataCollection[];
  columnMap: Map<string, TableColumn> = new Map<string, TableColumn>();
  constructor(private service: DataCollectionListService) {
  }

  ngOnInit() {
    this.service.getD(this.timefilter).then(
      res => {
        this.xs = res;
      }).catch(this.handleError);
      this.service.getSource().then(
          res => {
              this.xSource = res;
          }).catch(this.handleError);
      this.service.getScene().then(
          res => {
              this.xScene = res;
              this.settings = {
                  fileName: '企业列表',
                  actions: {
                      columnTitle: '操作',
                      add: false,
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
                      deleteButtonContent: '<i class="nb-plus"></i>',
                      confirmDelete: true,
                  },
                  columns: {
                      product_name: {
                          title: '产品名称',
                          type: 'string',
                          isExport: true,
                          editable: false,
                      },
                      /*source: {
                          title: '来源',
                          type: 'string',
                          editable: false,
                          isExport: true,
                      },*/
                      source: {
                          title: '来源',
                          type: 'string',
                          editable: false,
                          isExport: true,
                          /*editor: {
                              type: 'list',
                              config: {
                                  list: this.xSource,
                              },
                          },*/
                          filter: {
                              type: 'list',
                              class: 'select-filter',
                              config: {
                                  selectText: '全部',
                                  list: this.xSource,
                              },
                          },
                      },
                      enterprise_name: {
                          title: '企业',
                          type: 'string',
                          editable: false,
                          isExport: true,
                      },
                      // industry_involved: {
                      //     title: '所属行业',
                      //     type: 'string',
                      //     editable: true,
                      //     isExport: true,
                      // },
                      label: {
                          title: '场景',
                          type: 'string',
                          isExport: true,
                          editor: {
                              type: 'list',
                              config: {
                                  list: this.xScene,
                              },
                          },
                          filter: {
                              type: 'list',
                              class: 'select-filter',
                              config: {
                                  selectText: '全部',
                                  list: this.xScene,
                              },
                          },
                      },
                      project_status: {
                          title: '状态',
                          type: 'string',
                          editable: false,
                          /*editor: {
                              type: 'list',
                              config: {
                                  list: [
                                      { value: '众筹中', title: '众筹中' },
                                      { value: '众筹结束', title: '众筹结束' },
                                  ],
                              },
                          },*/
                          filter: {
                              type: 'list',
                              class: 'select-filter',
                              config: {
                                  selectText: '全部...',
                                  list: [
                                      { value: '众筹中', title: '众筹中' },
                                      { value: '众筹结束', title: '众筹结束' },
                                  ],
                              },
                          },
                      },
                      progresss: {
                          title: '进展',
                          type: 'number',
                          editable: false,
                          isExport: true,
                          valuePrepareFunction: (cell, row) => {
                              return row.progresss + '%';
                          },
                      },
                      supporter: {
                          title: '支持人数',
                          type: 'number',
                          editable: false,
                          isExport: true,
                      },
                      /*detail_url: {
                          title: '地址',
                          type: 'string',
                          editable: false,
                          isExport: true,
                      },*/
                      Actions: {
                          title: '详情',
                          type: 'html',
                          valuePrepareFunction: (cell, row) => {
                              return '<a class="text-white" title="详情" href="#/pages_a/_adamiya/data_collection_detail/'
                                  + row.sn +
                                  '"><i class="nb-list"></i></a>'
                          },
                          filter: false,
                          editable: false,
                      },
                  },
              };
          }).catch(this.handleError);
  }
  getScene(): XFilter[] {
      this.service.getScene().then(
          res => {
              this.xScene = res;
          }).catch(this.handleError);
      return this.xScene;
  }

  private handleError(error: any) {
    console.error('对不起' + error);
  }

  // onCreateConfirm(event): void {
  //   this.service.createD(event.newData);
  //   this.service.getD(this.timefilter).then(
  //     res => {
  //       this.xs = res;
  //       event.confirm.resolve(event.newData);
  //     }).catch(this.handleError);
  //   event.confirm.resolve(event.newData);
  // }

  onEditConfirm(event): void {
    this.service.editD(event.newData);
    event.confirm.resolve();
  }

  onDeleteConfirm(event): void {
      if (window.confirm('确定要加入选品池吗？')) {
          this.service.doAdd(event.data);
      } else {
          event.confirm.reject();
      }
  }
}
