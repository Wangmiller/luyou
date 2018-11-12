import {Component, OnInit} from '@angular/core';
import {EnterpriseDetailService} from './enterprise_detail.service';
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
  selector: 'ngx-share-enterprise-detail',
  styleUrls: ['enterprise_detail.scss'],
  templateUrl: 'enterprise_detail.html',
  providers: [EnterpriseDetailService],

})
export class EnterpriseDetailComponent implements OnInit {
  private sn: string;
  public lastYear: number;
  public thisYear: number;
  public CurrentX = new XEnterprise();
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
      custom_code: {
        title: '项目编号',
        type: 'string',
      },
      label: {
        title: '项目名称',
        type: 'string',
      },
      create_dt: {
        editable: false,
        title: '创建时间',
        type: 'string',
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
      total_budget: {
        title: '总预算',
        type: 'number',
      },
    },
  };

  settingsProduct = {
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
    },
  };

  settingsUserContact = {
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
    },
  };

  settingsUserLenovo = {
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
    },
  };

  settingsFile = {
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
        title: '文件名称',
        type: 'string',
      },
      file_postfix: {
        title: '后缀类型',
        type: 'string',
        editable: false,
      },
      file_bytes: {
        title: '大小',
        type: 'number',
        editable: false,
      },
      create_dt: {
        title: '上传时间',
        type: 'string',
        editable: false,
      },
    },
  };

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
  xsIndustry: XIndustry[];
  xsIndustryNA: XIndustry[];

  constructor(private service: EnterpriseDetailService, public route: ActivatedRoute) {
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
        this.getEnterpriseIndustries();
      }).catch(this.handleError);
    this.service.getDScene(this.sn).then(
      res => {
        this.xsScene = res;
        this.getEnterpriseScenes();
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
    this.service.getDFile(this.sn).then(
      res => {
        this.xsFile = res;
      }).catch(this.handleError);
  }

  getEnterpriseScenes() {
    this.CurrentX.scenes = '';
    this.xsScene.forEach((val, idx, array) => {
      this.CurrentX.scenes += val.label + ';';
    });
  }

  getEnterpriseIndustries() {
    this.CurrentX.industries = '';
    this.xsIndustry.forEach((val, idx, array) => {
      this.CurrentX.industries += val.label + ';';
    });
  }
//  this.xsIndustryNA.forEach((val, idx, array) => {
// val: 当前值
// idx：当前index
// array: Array

  backD() {
    window.location.href = '#/pages_u/_share/enterprise_list';
  }

  updateD() {
    this.service.editD(this.CurrentX);
  }

  onFileRowSelect(event) {
    this.service.download(event.data['sn'], event.data['label'] + event.data['file_postfix']);
  }
}
