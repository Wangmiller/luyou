import {Component, OnInit, ElementRef} from '@angular/core';
import {EnterpriseEditService} from './enterprise_edit.service';
import {ActivatedRoute} from '@angular/router';
import { XEnterprise } from '../../@xmodel/XEnterprise';
import { XKV } from '../../@xmodel/XKV';
import { XIndustry } from '../../@xmodel/XIndustry';
import { XScene } from '../../@xmodel/XScene';
import { XProduct } from '../../@xmodel/XProduct';
import { XProject } from '../../@xmodel/XProject';
import { XUser } from '../../@xmodel/XUser';
import { XFile } from '../../@xmodel/XFile';

@Component({
  selector: 'ngx-share-enterprise-edit',
  styleUrls: ['enterprise_edit.scss'],
  templateUrl: 'enterprise_edit.html',
  providers: [EnterpriseEditService],

})
export class EnterpriseEditComponent implements OnInit {
  private sn: string;
  public lastYear: number;
  public thisYear: number;
  public CurrentX = new XEnterprise();
  settingsProject = {
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
      custom_code: {
        title: '项目编号',
        type: 'string',
      },
      label: {
        title: '项目名称',
        type: 'string',
      },
      contact_dt: {
        title: '对接日期',
        type: 'string',
      },
      total_budget: {
        title: '总预算',
        type: 'number',
      },
      type_label: {
        editable: false,
        title: '类型',
        type: 'string',
      },
      status_label: {
        editable: false,
        title: '状态',
        type: 'string',
      },
      Actions: {
        title: '详细',
        type: 'html',
        valuePrepareFunction: (cell, row) => {
          return '<a class="text-white" title="编辑" href="#/pages_u/_share/project_edit/' +
            row.sn +
            '">-<i class="nb-edit"></i>-</a>'
        },
        filter: false,
      },
    },
  };

  settingsProduct = {
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
      },
      sku: {
        title: 'SKU',
        type: 'string',
      },
      moq: {
        title: 'MOQ',
        type: 'number',
      },
      moq_unit: {
        title: '单位',
        type: 'string',
      },
      price_sale: {
        title: '零售价（元）',
        type: 'number',
      },
      price_out: {
        title: '出货价（元）',
        type: 'number',
      },
      Actions: {
        title: '详细编辑',
        type: 'html',
        valuePrepareFunction: (cell, row) => {
          return '<a class="text-white" title="编辑" href="#/pages_u/_share/product_edit/' +
            row.sn +
            '">-<i class="nb-edit"></i>-</a>'
        },
        filter: false,
      },
    },
  };

  settingsUserContact = {
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
        title: '姓名',
        type: 'string',
      },
      position: {
        title: '职位',
        type: 'string',
      },
      mobile: {
        title: '手机',
        type: 'string',
      },
      email: {
        title: '邮箱',
        type: 'string',
      },
      tel: {
        title: '办公电话',
        type: 'string',
      },
      Actions: {
        title: '编辑',
        type: 'html',
        valuePrepareFunction: (cell, row) => {
          return '<a class="text-white" title="编辑" href="#/pages_u/_share/user_edit/' +
            row.sn +
            '">-<i class="nb-edit"></i>-</a>'
        },
        editable: false,
        filter: false,
      },
    },
  };

  settingsUserLenovo = {
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
        title: '姓名',
        type: 'string',
      },
      position: {
        title: '职位',
        type: 'string',
      },
      mobile: {
        title: '手机',
        type: 'string',
      },
      email: {
        title: '邮箱',
        type: 'string',
      },
      tel: {
        title: '办公电话',
        type: 'string',
      },
      Actions: {
        title: '编辑',
        type: 'html',
        valuePrepareFunction: (cell, row) => {
          return '<a class="text-white" title="编辑" href="#/pages_u/_share/user_edit/' +
            row.sn +
            '">-<i class="nb-edit"></i>-</a>'
        },
        editable: false,
        filter: false,
      },
    },
  };

  settingsFile = {
    actions: {
      add: false,
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
        title: '附件名称',
        type: 'string',
      },
      file_bytes: {
        title: '大小(KB)',
        type: 'number',
        editable: false,
      },
      file_postfix: {
        title: '文件类型',
        type: 'string',
        editable: false,
      },
      create_dt: {
        title: '上传时间',
        type: 'string',
        editable: false,
      },
      Actions: {
        title: '下载',
        type: 'html',
        valuePrepareFunction: (cell, row) => {
          return '<a class="text-white" title="下载" ' +
            'href="javascript:window.open(\'download\')">-' +
            '<i class="nb-arrow-thin-down"></i><i class="nb-arrow-thin-down"></i>-</a>'
        },
        editable: false,
        filter: false,
      },
    },
  };
  temp_file;
  xsFile: XFile[];
  xsProject: XProject[];
  xsProduct: XProduct[];
  xsUserLenovo: XUser[];
  xsUserContact: XUser[];
  xsEnterprise: XEnterprise[];
  xsELevel: XKV[];
  xsEType: XKV[];
  xsEStatus: XKV[];
  xsEClass: XKV[];

  xsScene: XScene[];
  xsSceneNA: XScene[];
  settingsScene = {
    selectMode: 'multi',
    actions: {
      add: false,
      edit: false,
      delete: false,
    },
    columns: {
      label: {
        editable: false,
        title: '已选场景',
        type: 'string',
        filter: false,
      },
    },
  };
  settingsSceneNA = {
    selectMode: 'multi',
    actions: {
      add: false,
      edit: false,
      delete: false,
    },
    columns: {
      label: {
        editable: false,
        title: '待选场景',
        type: 'string',
        filter: false,
      },
    },
  };

  xsIndustry: XIndustry[];
  xsIndustryNA: XIndustry[];
  settingsIndustry = {
    selectMode: 'multi',
    actions: {
      add: false,
      edit: false,
      delete: false,
    },
    columns: {
      label: {
        editable: false,
        title: '已选行业',
        type: 'string',
        filter: false,
      },
    },
  };
  settingsIndustryNA = {
    selectMode: 'multi',
    actions: {
      add: false,
      edit: false,
      delete: false,
    },
    columns: {
      label: {
        editable: false,
        title: '待选行业',
        type: 'string',
        filter: false,
      },
    },
  };

  constructor(private service: EnterpriseEditService, public route: ActivatedRoute, private el: ElementRef) {
    const dateObj = new Date();
    this.thisYear = dateObj.getFullYear();
    this.lastYear = dateObj.getFullYear() - 1;
    this.sn = this.route.snapshot.params['sn'];
  }

  private handleError(error: any) {
    window.alert('对不起，' + error);
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

    this.service.getD(this.sn).then(
      res => {
        this.xsEnterprise = res;
        this.CurrentX = this.xsEnterprise[0];
      }).catch(this.handleError);

    this.service.getDIndustry(this.sn).then(
      res => {
        this.xsIndustry = res;
      }).catch(this.handleError);
    this.service.getDScene(this.sn).then(
      res => {
        this.xsScene = res;
      }).catch(this.handleError);
    this.service.getDIndustryNA(this.sn).then(
      res => {
        this.xsIndustryNA = res;
      }).catch(this.handleError);
    this.service.getDSceneNA(this.sn).then(
      res => {
        this.xsSceneNA = res;
      }).catch(this.handleError);

    this.service.getDUser(this.sn).then(
      res => {
        const listuserlenovo = [];
        const listusercontact = [];
        res.forEach((val, idx, array) => {
          if (val['type_sn'] === 'lenovo')
            listuserlenovo.push(val);
          else
            listusercontact.push(val);
        });
        this.xsUserLenovo = listuserlenovo;
        this.xsUserContact = listusercontact;
      }).catch(this.handleError);
    this.service.getDProduct(this.sn).then(
      res => {
        this.xsProduct = res;
      }).catch(this.handleError);
    this.service.getDProject(this.sn).then(
      res => {
        this.xsProject = res;
      }).catch(this.handleError);
    this.getFiles();
  }

  getFiles() {
    this.service.getDFile(this.sn).then(
      res => {
        this.xsFile = res;
      }).catch(this.handleError);
  }

  onFileRowSelect(event) {
    this.service.download(event.data['sn'], event.data['label']);
  }

  selectFile() {
    const inputEl: HTMLInputElement = this.el.nativeElement.querySelector('#myfiles');
    inputEl.click();
  }

  showFile() {
    const inputEl: HTMLInputElement = this.el.nativeElement.querySelector('#myfiles');
    this.temp_file = inputEl.files.item(0).name;
  }

  attachFile() {
    const inputEl: HTMLInputElement = this.el.nativeElement.querySelector('#myfiles');
    this.service.attachDFile(inputEl, this.sn, this.CurrentX.label).then(
      res => {
        this.xsFile = res;
        this.temp_file = '';
      }).catch(this.handleError);
  }

  onSUserRowSelect(event): void {
    const r = event.selected.pop();
    this.xsScene = this.xsScene.filter(x => x.sn !== r.sn);
    this.service.deleteScene(this.sn, r.sn).then(
      res => {
        this.xsSceneNA = res;
      }).catch(this.handleError);
    this.getEnterpriseScenes();
  }

  onSNAUserRowSelect(event): void {
    const r = event.selected.pop();
    this.xsSceneNA = this.xsSceneNA.filter(x => x.sn !== r.sn);
    this.service.addScene(this.sn, r.sn).then(
      res => {
        this.xsScene = res;
      }).catch(this.handleError);
    this.getEnterpriseScenes();
  }

  getEnterpriseScenes() {
    this.CurrentX.scenes = '';
    this.xsScene.forEach((val, idx, array) => {
      this.CurrentX.scenes += val.label + ';';
    });
  }

  onIUserRowSelect(event): void {
    const r = event.selected.pop();
    this.xsIndustry = this.xsIndustry.filter(x => x.sn !== r.sn);
    this.service.deleteIndustry(this.sn, r.sn).then(
      res => {
        this.xsIndustryNA = res;
      }).catch(this.handleError);
    this.getEnterpriseIndustries();
  }

  onINAUserRowSelect(event): void {
    const r = event.selected.pop();
    this.xsIndustryNA = this.xsIndustryNA.filter(x => x.sn !== r.sn);
    this.service.addIndustry(this.sn, r.sn).then(
      res => {
        this.xsIndustry = res;
      }).catch(this.handleError);
    this.getEnterpriseIndustries();
  }

  getEnterpriseIndustries() {
    this.CurrentX.industries = '';
    this.xsIndustry.forEach((val, idx, array) => {
      this.CurrentX.industries += val.label + ';';
    });
  }
// this.xsIndustryNA.forEach((val, idx, array) => {
// val: 当前值
// idx：当前index
// array: Array


  backD() {
    window.location.href = '#/pages_u/_share/user_enterprise_list';
  }

  updateD() {
    // window.alert('edddit');
    this.service.editD(this.CurrentX);
  }

  onCreateProjectConfirm(event): void {
    this.service.createDProject(this.sn, event.newData);
    this.service.getDProject(this.sn).then(
      res => {
        this.xsProject = res;
        event.confirm.resolve(event.newData);
      }).catch(this.handleError);
  }

  onEditProjectConfirm(event): void {
    this.service.editDProject(event.newData);
    event.confirm.resolve();
  }

  onDeleteProjectConfirm(event): void {
    if (window.confirm('确定要删除企业与项目关联吗？这不会删除项目本身。')) {
      this.service.deleteDProject(event.data);
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  onCreateUserLenovoConfirm(event): void {
    this.service.createDUser(this.sn, event.newData, 'lenovo').then(
      res => {
        const listuserlenovo = [];
        const listusercontact = [];
        res.forEach((val, idx, array) => {
          if (val['type_sn'] === 'lenovo')
            listuserlenovo.push(val);
          else
            listusercontact.push(val);
        });
        this.xsUserLenovo = listuserlenovo;
        this.xsUserContact = listusercontact;
        event.confirm.resolve(event.newData);
      }).catch(this.handleError);
  }

  onEditUserLenovoConfirm(event): void {
    this.service.editDUser(event.newData);
    event.confirm.resolve();
  }

  onDeleteUserLenovoConfirm(event): void {
    if (window.confirm('确定要删除企业与负责人关联吗？这不会删除负责人本身。')) {
      this.service.deleteDUser(event.data);
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  onCreateUserContactConfirm(event): void {
    this.service.createDUser(this.sn, event.newData, 'contact').then(
      res => {
        const listuserlenovo = [];
        const listusercontact = [];
        res.forEach((val, idx, array) => {
          if (val['type_sn'] === 'lenovo')
            listuserlenovo.push(val);
          else
            listusercontact.push(val);
        });
        this.xsUserLenovo = listuserlenovo;
        this.xsUserContact = listusercontact;
        event.confirm.resolve(event.newData);
      }).catch(this.handleError);
  }

  onEditUserContactConfirm(event): void {
    this.service.editDUser(event.newData);
    event.confirm.resolve();
  }

  onDeleteUserContactConfirm(event): void {
    if (window.confirm('确定要删除企业与联系人关联吗？这不会删除联系人本身。')) {
      this.service.deleteDUser(event.data);
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  onCreateProductConfirm(event): void {
    this.service.createDProduct(event.newData, this.sn);
    this.service.getDProduct(this.sn).then(
      res => {
        this.xsProduct = res;
        event.confirm.resolve(event.newData);
      }).catch(this.handleError);
    event.confirm.resolve(event.newData);
  }

  onEditProductConfirm(event): void {
    // window.alert('12211');
    this.service.editDProduct(event.newData, this.sn);
    event.confirm.resolve();
  }

  onDeleteProductConfirm(event): void {
    if (window.confirm('确定要删除企业与产品关联吗？这不会删除产品本身。')) {
      this.service.deleteDProduct(event.data);
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  onEditFileConfirm(event): void {
    this.service.editDFile(event.newData);
    event.confirm.resolve();
  }

  onDeleteFileConfirm(event): void {
    if (window.confirm('确定要删除企业与文件关联吗？这不会删除文件本身。')) {
      this.service.deleteDFile(event.data, this.sn);
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
