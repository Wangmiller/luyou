import { Component, OnInit } from '@angular/core';
import {XKV} from '../../@xmodel/XKV';
import {DateRenderComponent} from '../../_share/DateRender.component';
import {XPartner} from '../../@xmodel/XPartner';
import {XPartnerContract} from '../../@xmodel/XPartnerContract';
import {XPartnerVisitRecord} from '../../@xmodel/XPartnerVisitRecord';
import {XPartnerScore} from '../../@xmodel/XPartnerScore';
import {XPartnerDeveloperEvaluation} from '../../@xmodel/XPartnerDeveloperEvaluation';
import {PartnereditService} from './partner_edit.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'ngx-adamiya-partner-edit',
  templateUrl: './partner_edit.component.html',
  styleUrls: ['./partner_edit.component.scss'],
})
export class PartnereditComponent implements OnInit {
    private id: number;
    private sn: string;
    private company_name: string;
    private company_address: string;
    private industry_id: number;
    private industry_name: string;
    private product_id: number;
    private product_name: string;
    private contract_name: string;
    private contract_position: string;
    private contract_phone: string;
    private contract_wechat: string;
    private first_visit_time: string;
    private first_visitor: string;
    private score: number;
    private product_desc: string;
    public CurrentX: XPartner;
    XPartnerCollection: XPartner[];
    XPartnerContracts: XPartnerContract[];
    XPartnerScores: XPartnerScore[];
    XPartnerScore: XPartnerScore;
    public currentXPartnerScore = new XPartnerScore();
    XPartnerDeveloperEvaluations: XPartnerDeveloperEvaluation[];
    XPartnerVisitRecords: XPartnerVisitRecord[];
    XPartnerDeveloperEvaluation: XPartnerDeveloperEvaluation;
    XPartnerVisitRecord: XPartnerVisitRecord;

    private handleError(error: any) {
        window.alert('对不起，' + error);
    }
    constructor(private service: PartnereditService, public route: ActivatedRoute) {
        const dateObj = new Date();
        this.sn = this.route.snapshot.params['sn'];
    }

    // 联系人员及联系方式模块
    setcontracts = {
        fileName: '联系人员及联系方式',
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
            contract_name: {
                title: '姓名',
                type: 'string',
                isExport: true
            },
            contract_position: {
                title: '职务',
                type: 'string',
                isExport: true
            },
            contract_phone: {
                title: '电话',
                type: 'string',
                isExport: true
            },
            contract_wechat: {
                title: '微信',
                type: 'string',
                isExport: true
            }
        },
    };
// 联系人员及联系方式模块
    setVisitRecords = {
        fileName: '联系人员及联系方式',
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
            id: {
                title: 'id',
                type: 'string',
                isExport: true
            },
            visitor: {
                title: '负责人',
                type: 'string',
                isExport: true
            },
            content: {
                title: '跟踪纪要',
                type: 'string',
                isExport: true
            },
            visit_date: {
                title: '跟踪日期',
                type: 'string',
                isExport: true
            }
        },
    };
// 联系人员及联系方式模块
    setScore = {
        fileName: '联系人员及联系方式',
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
            contract_name: {
                title: '姓名',
                type: 'string',
                isExport: true
            },
            contract_position: {
                title: '职务',
                type: 'string',
                isExport: true
            },
            contract_phone: {
                title: '电话',
                type: 'string',
                isExport: true
            },
            contract_wechat: {
                title: '微信',
                type: 'string',
                isExport: true
            }
        },
    };
// 联系人员及联系方式模块
    setDeveloperEvaluation = {
        fileName: '联系人员及联系方式',
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
            contract_name: {
                title: '姓名',
                type: 'string',
                isExport: true
            },
            contract_position: {
                title: '职务',
                type: 'string',
                isExport: true
            },
            contract_phone: {
                title: '电话',
                type: 'string',
                isExport: true
            },
            contract_wechat: {
                title: '微信',
                type: 'string',
                isExport: true
            }
        },
    };
    createCompanyBase() {
        const p = new XPartner();
        p.company_name = this.company_name;
        p.company_address = this.company_address;
        p.industry_id = this.industry_id;
        p.product_id = this.product_id;
        p.first_visitor = this.first_visitor;
        p.first_visit_time = this.first_visit_time;
        p.product_desc = this.product_desc;
        this.service.insertCompanyBase(p);
    };
    createScore() {
        const ps = new  XPartnerScore();
        /*ps.company_name = this.company_name;
        ps.company_address = this.company_address;
        ps.industry_id = this.industry_id;
        ps.product_id = this.product_id;
        ps.first_visitor = this.first_visitor;
        ps.first_visit_time = this.first_visit_time;
        ps.product_desc = this.product_desc;
        this.service.insertCompanyBase(ps);*/
    };
    ngOnInit() {
        console.log(this.sn);
        if (this.sn !== undefined) {
            this.service.getD(this.sn).then(
                res => {
                    this.XPartnerCollection = res;
                    this.CurrentX = this.XPartnerCollection[0];
                    this.id = this.CurrentX.id;
                    this.sn = this.CurrentX.sn;
                    this.company_name = this.CurrentX.company_name;
                    this.company_address = this.CurrentX.company_address;
                    this.industry_id = this.CurrentX.industry_id;
                    this.industry_name = this.CurrentX.industry_name;
                    this.contract_name = this.CurrentX.contract_name;
                    this.contract_position = this.CurrentX.contract_position;
                    this.contract_phone = this.CurrentX.contract_phone;
                    this.contract_wechat = this.CurrentX.contract_wechat;
                    this.product_id = this.CurrentX.product_id;
                    this.product_name = this.CurrentX.product_name;
                    this.first_visit_time = this.CurrentX.first_visit_time;
                    this.first_visitor = this.CurrentX.first_visitor;
                    this.product_desc = this.CurrentX.product_desc;
                    this.score = this.CurrentX.score;

                }).catch(this.handleError);

            this.service.getXC(this.sn).then(
                res => {
                    this.XPartnerContracts = res;
                }).catch(this.handleError);

            this.service.getXS(this.sn).then(
                res => {
                    this.XPartnerScores = res;
                    this.currentXPartnerScore = this.XPartnerScores[0];
                }).catch(this.handleError);
            this.service.getXD(this.sn).then(
                res => {
                    this.XPartnerDeveloperEvaluations = res;
                }).catch(this.handleError);
            this.service.getXR(this.sn).then(
                res => {
                    this.XPartnerVisitRecords = res;
                }).catch(this.handleError);
        }
    }
}
