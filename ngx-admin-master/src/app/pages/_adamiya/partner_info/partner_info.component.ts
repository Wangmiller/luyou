import { Component, OnInit, ElementRef, Renderer2, ViewChild } from '@angular/core';
import {XKV} from '../../@xmodel/XKV';
import {DateRenderComponent} from '../../_share/DateRender.component';
import {XPartner} from '../../@xmodel/XPartner';
import {XPartnerContract} from '../../@xmodel/XPartnerContract';
import {XPartnerVisitRecord} from '../../@xmodel/XPartnerVisitRecord';
import {XPartnerScore} from '../../@xmodel/XPartnerScore';
import {XPartnerDeveloperEvaluation} from '../../@xmodel/XPartnerDeveloperEvaluation';
import {PartnerinfoService} from './partner_info.service';
import {ActivatedRoute} from '@angular/router';
import {AllIndustryListService} from '../all_industry_list/all_industry_list.service';
import {XIndustry} from '../../@xmodel/XIndustry';
import {AllProductListService} from '../all_product_list/all_product_list.service';
import {XProduct} from '../../@xmodel/XProduct';
@Component({
  selector: 'ngx-adamiya-partner-info',
  templateUrl: './partner_info.component.html',
  styleUrls: ['./partner_info.component.scss'],
})
export class PartnerinfoComponent implements OnInit {
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
    allIndustryListService: AllIndustryListService;
    industrys: XIndustry[];
    industry: XIndustry;
    products: XProduct[];
    private handleError(error: any) {
        window.alert('对不起，' + error);
    }
    constructor(private service: PartnerinfoService, private industrySer: AllIndustryListService,
                private productSer: AllProductListService,
                public route: ActivatedRoute) {
        const dateObj = new Date();
        this.sn = this.route.snapshot.params['sn'];
    }
    getIndustry() {
        this.industrySer.getD().then(
            res => {
                this.industrys = res;
            }).catch(this.handleError);
    }
    getProduct() {
        this.productSer.getD('all').then(
            res => {
                this.products = res;
            }).catch(this.handleError);
    }
    public scoreError: boolean;
    totalScore($event) {
        this.scoreError = false;
        // @ts-ignore
        let d = parseInt($event.target.max);
        // @ts-ignore
        let val = parseInt($event.target.value);
        if (val > d) {
            alert('超出最大值');
            // $event.target.addClass('warn');
            $event.target.classList.add("warn");
            this.scoreError = false;
            return;
        }else {
            $event.target.classList.remove("warn");
            this.scoreError = true;
        }
        const dl = document.getElementsByClassName('score');
        let s = 0;
        for (let i = 0; i < dl.length; i++) {
            // @ts-ignore
            let c = dl[i].classList.value.indexOf('warn');
            if (c !== -1) {
                this.scoreError = false;
            }
            // @ts-ignore
            let v = parseInt(dl[i].value);
            // console.log(isNaN(v));
            let b = isNaN(v);
            if (!b) {
                // @ts-ignore
               let n = parseInt(v);
                s += n;
            }
        }
        // @ts-ignore
        // document.getElementById('total_score').value = s;
        this.currentXPartnerScore.total_score = s;
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
            /*id: {
                title: 'id',
                type: 'string',
                isExport: true
            },*/
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
        if (this.sn !== undefined) {
            this.service.updateCompanyBase(p, this.sn);
        }else {
            this.service.insertCompanyBase(p);
        }
    };
    submit() {
        // @ts-ignore
        // this.service.insertScore(this.currentXPartnerScore, this.sn);
        if (this.sn === undefined) {
            window.alert('请先填写公司信息！')
        } else {
            this.service.getXS(this.sn).then(
                res => {
                    let  url = '';
                    if (res.length > 0) {
                        url = '/_s_share/edit_partner_score'
                    }else {
                        url = '/_s_share/create_partner_score'
                    }
                    this.service.insertScore(this.currentXPartnerScore, this.sn, url);
                }).catch(this.handleError);
        }
    }
    onCreateContract(event): void {
        this.service.createContract(event.newData, this.sn).then(
            res => {
                if (res.sn !== undefined) {
                    this.service.getXC(this.sn).then(
                        data => {
                            if (res.length > 0) {
                                this.XPartnerContracts = data;
                            }
                        }).catch(this.handleError);
                    event.confirm.resolve(event.newData);
                }
            }
        ).catch(this.handleError);
    }
    onDeleteContract(event): void {
        if (window.confirm('确定要删除吗？')) {
            this.service.deleteContract(event.data);
            event.confirm.resolve();
        } else {
            event.confirm.reject();
        }
    }
    onEditContract(event): void {
        this.service.editContract(event.newData);
        event.confirm.resolve();
    }

    onCreateRecords(event): void {
        this.service.createRecords(event.newData, this.sn).then(
            res => {
                if (res.sn !== undefined) {
                    this.service.getXR(this.sn).then(
                        data => {
                            if (res.length > 0) {
                                this.XPartnerVisitRecords = data;
                            }
                        }).catch(this.handleError);
                    event.confirm.resolve(event.newData);
                }
            }
        ).catch(this.handleError);
    }
    onDeleteRecords(event): void {
        if (window.confirm('确定要删除吗？')) {
            this.service.deleteRecords(event.data);
            event.confirm.resolve();
        } else {
            event.confirm.reject();
        }
    }
    onEditRecords(event): void {
        this.service.editRecords(event.newData);
        event.confirm.resolve();
    }
    ngOnInit() {
        this.getIndustry();
        this.getProduct();
        if (this.sn !== undefined) {
            this.service.getD(this.sn).then(
                res => {
                    if (res.length > 0) {
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
                    }

                }).catch(this.handleError);

            this.service.getXC(this.sn).then(
                res => {
                    if (res.length > 0) {
                        this.XPartnerContracts = res;
                    }
                }).catch(this.handleError);

            this.service.getXS(this.sn).then(
                res => {
                    if (res.length > 0) {
                        this.XPartnerScores = res;
                        this.currentXPartnerScore = this.XPartnerScores[0];
                    }
                }).catch(this.handleError);
            this.service.getXD(this.sn).then(
                res => {
                    if (res.length > 0) {
                        this.XPartnerDeveloperEvaluations = res;
                    }
                }).catch(this.handleError);
            this.service.getXR(this.sn).then(
                res => {
                    if (res.length > 0) {
                        this.XPartnerVisitRecords = res;
                    }
                }).catch(this.handleError);
        }
    }
}
