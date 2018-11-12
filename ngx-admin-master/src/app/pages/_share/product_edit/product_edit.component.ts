import {Component, OnInit, ElementRef} from '@angular/core';
import {ProductEditService} from './product_edit.service';
import {ActivatedRoute} from '@angular/router';
import { XProduct } from '../../@xmodel/XProduct';
import { XKV } from '../../@xmodel/XKV';
import { XIndustry } from '../../@xmodel/XIndustry';
import { XScene } from '../../@xmodel/XScene';
import {XFile} from '../../@xmodel/XFile';

@Component({
  selector: 'ngx-share-product-edit',
  styleUrls: ['product_edit.scss'],
  templateUrl: 'product_edit.html',
  providers: [ProductEditService],

})
export class ProductEditComponent implements OnInit {
  private sn: string;
  public lastYear: number;
  public thisYear: number;
  public CurrentX = new XProduct();
  closesign: number;

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
            'href="javascript:window.open(\'http://localhost:3000/download\')">-' +
            '<i class="nb-arrow-thin-down"></i><i class="nb-arrow-thin-down"></i>-</a>'
        },
        editable: false,
        filter: false,
      },
    },
  };

  xsFile: XFile[];

  xsProduct: XProduct[];
  xsELevel: XKV[];
  xsEType: XKV[];
  xsEStatus: XKV[];
  xsEClass: XKV[];
  xsEnter: XKV[];

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

  temp_file;
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

  constructor(private service: ProductEditService, public route: ActivatedRoute, private el: ElementRef) {
    const dateObj = new Date();
    this.thisYear = dateObj.getFullYear();
    this.lastYear = dateObj.getFullYear() - 1;
    this.sn = this.route.snapshot.params['sn'];
    this.closesign = 0;
    this.temp_file = '';
  }

  private handleError(error: any) {
    window.alert('对不起，' + error);
  }

  ngOnInit() {
    this.service.getDEnter().then(
      res => {
        this.xsEnter = res;
      }).catch(this.handleError);
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
        this.xsProduct = res;
        this.CurrentX = this.xsProduct[0];
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
  }

  onSUserRowSelect(event): void {
    const r = event.selected.pop();
    this.xsScene = this.xsScene.filter(x => x.sn !== r.sn);
    this.service.deleteScene(this.sn, r.sn).then(
      res => {
        this.xsSceneNA = res;
      }).catch(this.handleError);
    this.getProductScenes();
  }

  onSNAUserRowSelect(event): void {
    const r = event.selected.pop();
    this.xsSceneNA = this.xsSceneNA.filter(x => x.sn !== r.sn);
    this.service.addScene(this.sn, r.sn).then(
      res => {
        this.xsScene = res;
      }).catch(this.handleError);
    this.getProductScenes();
  }

  getProductScenes() {
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
    this.getProductIndustries();
  }

  onINAUserRowSelect(event): void {
    const r = event.selected.pop();
    this.xsIndustryNA = this.xsIndustryNA.filter(x => x.sn !== r.sn);
    this.service.addIndustry(this.sn, r.sn).then(
      res => {
        this.xsIndustry = res;
      }).catch(this.handleError);
    this.getProductIndustries();
  }

  getProductIndustries() {
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
    window.location.href = '#/pages_u/_share/user_product_list';
  }

  updateD() {
    this.service.editD(this.CurrentX);
  }

  getFiles() {
    this.service.getDFile(this.sn).then(
      res => {
        this.xsFile = res;
      }).catch(this.handleError);
  }

  selectFile() {
    const inputEl: HTMLInputElement = this.el.nativeElement.querySelector('#myfiles');
    inputEl.click();
  }

  onFileRowSelect(event) {
    this.service.download(event.data['sn'], event.data['label'] + event.data['file_postfix']);
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

  onEditFileConfirm(event): void {
    this.service.editDFile(event.newData);
    event.confirm.resolve();
  }

  onDeleteFileConfirm(event): void {
    if (window.confirm('确定要删除产品与文件关联吗？这不会删除文件本身。')) {
      this.service.deleteDFile(event.data, this.sn);
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
