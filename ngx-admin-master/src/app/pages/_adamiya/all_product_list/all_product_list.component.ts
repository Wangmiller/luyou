import {Component, OnInit} from '@angular/core';
import {AllProductListService} from './all_product_list.service';
import {XProduct} from '../../@xmodel/XProduct';
import {XFilter} from '../../@xmodel/XFilter';
import {DateRenderComponent} from './../../_share/DateRender.component';
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
    selector: 'ngx-adamiya-all-product-list',
    templateUrl: './all_product_list.html',
    styles: [`
        nb-card {
            transform: translate3d(0, 0, 0);
        }
    `],
})

export class AllProductListComponent implements OnInit {

    xs: XProduct[];
    xsEnterprise: XFilter[];

    // @ts-ignore
    // @ts-ignore
    settings = {
        fileName: '产品列表',
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
                title: '产品名称',
                type: 'string',
                isExport: true,
            },
            sku: {
                title: 'SKU',
                type: 'string',
                isExport: true,
            },
            enterprise_label: {
                title: '所属企业',
                type: 'string',
                editable: false,
                isExport: true,
                editor: {
                    type: 'list',
                    config: {
                        list: this.xsEnterprise,
                    },
                },
                filter: {
                    type: 'list',
                    config: {
                        selectText: '全部...',
                        list: this.xsEnterprise,
                    },
                },
            },
            coop_status: {
                title: '合作状态',
                type: 'string',
                editor: {
                    type: 'list',
                    config: {
                        list: [
                            {value: 'lecoo', title: 'lecoo'},
                            {value: 'thinkplus', title: 'thinkplus'},
                            {value: '智慧联想', title: '智慧联想'},
                            {value: '天禧', title: '天禧'},
                            {value: '惠商', title: '惠商'},
                            {value: '待明确', title: '待明确'},
                        ],
                    },
                },
                filter: {
                    type: 'list',
                    config: {
                        selectText: '全部...',
                        list: [
                            {value: 'lecoo', title: 'lecoo'},
                            {value: 'thinkplus', title: 'thinkplus'},
                            {value: '智慧联想', title: '智慧联想'},
                            {value: '天禧', title: '天禧'},
                            {value: '惠商', title: '惠商'},
                            {value: '待明确', title: '待明确'},
                        ],
                    },
                },
            },
            sample_provided: {
                title: '提供样品',
                type: 'custom',
                isExport: true,
                renderComponent: TFRenderComponent,
                editable: true,
                editor: {
                    type: 'list',
                    config: {
                        list: [
                            {value: 1, title: '是'},
                            {value: 0, title: '否'},
                        ],
                    },
                },
                filter: {
                    type: 'list',
                    class: 'select-filter',
                    config: {
                        selectText: '全部...',
                        list: [
                            {value: 1, title: '是'},
                            {value: 0, title: '否'},
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
                title: '详细编辑',
                type: 'html',
                valuePrepareFunction: (cell, row) => {
                    return '<a class="text-white" title="编辑" href="#/pages_a/_adamiya/product_edit/' +
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
    }

    export2Csv(): void {
        const columns: TableColumn[] = Array.from(this.columnMap.values());

        let encodedStr = columns.reduce((acct, current: TableColumn) => {

            if (current.isExport != false) {
                return acct += '"' + current.title + '",';
            }
            else {
                return acct;
            }
        }, '');
        encodedStr = encodedStr.slice(0, -1);
        encodedStr += '\r\n';

        const fields: string[] = columns.reduce((acct, column: TableColumn) => {

            if (column.isExport != false) {
                acct.push(column.field);
            }
            return acct;
        }, []);

        // @ts-ignore
        // @ts-ignore
        this.service.getD(this.timefilter).then((rows) => {

            rows.forEach((row) => {
                fields.forEach((field) => {
                    if (row.hasOwnProperty(field)) {
                        let value = row[field];

                        if (!value) {
                            value = '';
                        }
                        const valuePrepare = this.columnMap.get(field).valuePrepareFunction;
                        if (valuePrepare) {
                            value = valuePrepare.call(null, value, row);
                        }
                        encodedStr += '"' + value + '",'
                    }
                });
                encodedStr = encodedStr.slice(0, -1);
                encodedStr += '\r\n';
            });

            const a = document.createElement('a');
            a.setAttribute('style', 'display:none;');
            document.body.appendChild(a);

            //Set utf-8 header to let excel recognize its encoding
            const blob = new Blob(['\ufeff', encodedStr], {type: 'text/csv'});
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
            const column: TableColumn = new TableColumn();
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

    columnMap: Map<string, TableColumn> = new Map<string, TableColumn>();

    constructor(private service: AllProductListService) {
    }

    ngOnInit() {
        this.prepareColumnMap();
        this.service.getDEnterprise().then(
            rese => {
                this.xsEnterprise = rese;
                this.settings = {
                    fileName: '产品列表',
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
                            title: '产品名称',
                            type: 'string',
                            isExport: true,
                        },
                        sku: {
                            title: 'SKU',
                            type: 'string',
                            isExport: true,
                        },
                        enterprise_label: {
                            title: '所属企业',
                            type: 'string',
                            editable: false,
                            isExport: true,
                            editor: {
                                type: 'list',
                                config: {
                                    list: this.xsEnterprise,
                                },
                            },
                            filter: {
                                type: 'list',
                                config: {
                                    selectText: '全部...',
                                    list: this.xsEnterprise,
                                },
                            },
                        },
                        coop_status: {
                            title: '合作状态',
                            type: 'string',
                            editor: {
                                type: 'list',
                                config: {
                                    list: [
                                        {value: 'lecoo', title: 'lecoo'},
                                        {value: 'thinkplus', title: 'thinkplus'},
                                        {value: '智慧联想', title: '智慧联想'},
                                        {value: '天禧', title: '天禧'},
                                        {value: '惠商', title: '惠商'},
                                        {value: '待明确', title: '待明确'},
                                    ],
                                },
                            },
                            filter: {
                                type: 'list',
                                config: {
                                    selectText: '全部...',
                                    list: [
                                        {value: 'lecoo', title: 'lecoo'},
                                        {value: 'thinkplus', title: 'thinkplus'},
                                        {value: '智慧联想', title: '智慧联想'},
                                        {value: '天禧', title: '天禧'},
                                        {value: '惠商', title: '惠商'},
                                        {value: '待明确', title: '待明确'},
                                    ],
                                },
                            },
                        },
                        sample_provided: {
                            title: '提供样品',
                            type: 'custom',
                            isExport: true,
                            renderComponent: TFRenderComponent,
                            editable: true,
                            editor: {
                                type: 'list',
                                config: {
                                    list: [
                                        {value: 1, title: '是'},
                                        {value: 0, title: '否'},
                                    ],
                                },
                            },
                            filter: {
                                type: 'list',
                                class: 'select-filter',
                                config: {
                                    selectText: '全部...',
                                    list: [
                                        {value: 1, title: '是'},
                                        {value: 0, title: '否'},
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
                            title: '详细编辑',
                            type: 'html',
                            valuePrepareFunction: (cell, row) => {
                                return '<a class="text-white" title="编辑" href="#/pages_a/_adamiya/product_edit/' +
                                    row.sn +
                                    '">-<i class="nb-edit"></i>-</a>'
                            },
                            filter: false,
                        },
                    },
                };
            }).catch(this.handleError);
        //this.initSetteings();
        this.service.getD(this.timefilter).then(
            res => {
                this.xs = res;
            }).catch(this.handleError);
    }

    /*initSetteings() {

    }*/

    private handleError(error: any) {
        console.error('对不起' + error);
    }

    onCreateConfirm(event): void {
        this.service.createD(event.newData);
        this.service.getD(this.timefilter).then(
            res => {
                this.xs = res;
                event.confirm.resolve(event.newData);
            }).catch(this.handleError);
        event.confirm.resolve(event.newData);
    }

    onEditConfirm(event): void {
        // window.alert('lll');
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


//TODO make external search and export following: https://github.com/hoswey/ng2-admin/blob/master/src/app/shared/component/me-simple-table/me-simple-data.html
