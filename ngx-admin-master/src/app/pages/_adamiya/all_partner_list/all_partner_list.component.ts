import { Component, OnInit } from '@angular/core';
import {XKV} from '../../@xmodel/XKV';
import {DateRenderComponent} from '../../_share/DateRender.component';
import {XPartner} from '../../@xmodel/XPartner';
import {AllPartnerListService} from '../all_partner_list/all_partner_list.service';


class TableColumn {
    field: string;
    title: string;
    type: string;
    isDisplay: boolean;
    isExport: boolean;
    valuePrepareFunction: Function;
}

@Component({
  selector: 'ngx-adamiya-all-partner-list',
  templateUrl: './all_partner_list.component.html',
  styleUrls: ['./all_partner_list.component.scss'],
})
export class AllPartnerListComponent implements OnInit {
    /*xsELevel: XKV[];
    xsEType: XKV[];
    xsEStatus: XKV[];
    xsEClass: XKV[];*/
    settings = {
        fileName: '企业列表',
        actions: {
            columnTitle: '操作',
            add: false,
            edit: false,
            delete: true,
        },
        add: {
            addButtonContent: '<i class="nb-plus"></i>',
            createButtonContent: '<i class="nb-checkmark"></i>',
            cancelButtonContent: '<i class="nb-close"></i>',
            confirmCreate: false,
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
            /*id: {
                title: 'id',
                type: 'number',
                isExport: false,
            },*/
            company_name: {
                title: '公司名称',
                type: 'string',
                isExport: true
            },
            industry_name: {
                title: '所属行业',
                type: 'number',
                isExport: true
            },
            product_name: {
                title: '产品名称',
                type: 'number',
                isExport: true
            },
            contract_name: {
                title: '联系人姓名',
                type: 'string',
                isExport: true
            },
            contract_position: {
                title: '职务',
                type: 'string',
                isExport: true
            },
            first_visit_time: {
                title: '首次拜访时间',
                type: 'string',
                isExport: true
            },
            first_visitor: {
                title: '首次拜访人',
                type: 'string',
                isExport: true
            },
            score: {
                title: '评分',
                type: 'number',
                isExport: true,
                renderComponent: DateRenderComponent,
            },
            /*Actions: {
                title: '编辑',
                type: 'html',
                valuePrepareFunction: (cell, row) => {
                    return '<a class="text-white" title="编辑" href="#/pages_a/_adamiya/partner_edit/' +
                        row.sn +
                        '">-<i class="nb-edit"></i>-</a>'
                },
                filter: false,
                editable: false,
            },*/
            detail: {
                title: '详细',
                type: 'html',
                valuePrepareFunction: (cell, row) => {
                    return '<a class="text-white" title="详细" href="#/pages_a/_adamiya/partner_info/' +
                        row.sn +
                        '">*<i class="nb-edit"></i>*</a>'
                },
                filter: false,
                editable: false,
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

            if (current.isExport !== false) {
                return acct += '"' + current.title + '",';
            } else {
                return acct;
            }
        }, '');
        encodedStr = encodedStr.slice(0, -1);
        encodedStr += '\r\n';

        const fields: string[] = columns.reduce((acct, column: TableColumn) => {

            if (column.isExport !== false) {
                acct.push(column.field);
            }
            return acct;
        }, []);

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

    xs: XPartner[];
    columnMap: Map<string, TableColumn> = new Map<string, TableColumn>();
    constructor(private service: AllPartnerListService) {
    }

    ngOnInit() {

        this.prepareColumnMap();
        this.service.getD(this.timefilter).then(
            res => {
                this.xs = res;
            }).catch(this.handleError);
    }

    private handleError(error: any) {
        console.error('对不起' + error);
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
