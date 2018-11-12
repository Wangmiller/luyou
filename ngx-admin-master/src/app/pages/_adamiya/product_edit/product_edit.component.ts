import {Component, OnInit, ElementRef} from '@angular/core';
import {ProductEditService} from './product_edit.service';
import {ActivatedRoute} from '@angular/router';
import { XProduct } from '../../@xmodel/XProduct';
import { XKV } from '../../@xmodel/XKV';
import { XIndustry } from '../../@xmodel/XIndustry';
import { XScene } from '../../@xmodel/XScene';
import { XProductCompare } from '../../@xmodel/XProductCompare';
import { XCheckExist } from '../../@xmodel/XCheckExist';
import {XFile} from '../../@xmodel/XFile';

@Component({
  selector: 'ngx-adamiya-product-edit',
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

  temp_file;

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

  compare_info: string;
  favor_info: string;

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
        const cusn = localStorage.getItem('cu_sn');
        if (cusn && cusn !== '') {
          const lspsns = localStorage.getItem(cusn + '_product_compare_sns');
          if (lspsns) {
            if (lspsns.indexOf(this.CurrentX.sn) > -1) {
              this.compare_info = '已加入对比';
            } else {
              this.compare_info = '';
            }
          } else {
            localStorage.setItem(cusn + '_product_compare_sns', '');
            this.compare_info = '';
          }
        }
      }).catch(this.handleError);
    this.service.getFavor(this.sn).then(
      res => {
        if (res.length > 0) {
          this.favor_info = '已加入收藏';
        } else {
          this.favor_info = '';
        }
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
    this.getFiles();
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
    window.location.href = '#/pages_a/_adamiya/all_product_list';
  }

  updateD() {
    this.service.editD(this.CurrentX);
  }

  addFavor() {
    this.service.addFavor(this.sn).then(
      res => {
        if (res.length > 0) {
          this.favor_info = '已加入收藏';
        } else {
          this.favor_info = '';
        }
      }).catch(this.handleError);
  }

  addCompare() {
    let xs_pc = [];
    const cusn = localStorage.getItem('cu_sn');
    if (cusn && cusn !== '') {
      const ls = localStorage.getItem(cusn + '_product_compare');
      const lspsns = localStorage.getItem(cusn + '_product_compare_sns');
      if (lspsns.indexOf(this.CurrentX.sn) > 0) {
        return;
      }
      if (ls && ls !== '') {
        xs_pc = JSON.parse(ls);
      } else {
        // window.alert('init start');
        xs_pc = this.initXPC();
        // window.alert('init end');
      }
      // window.alert(JSON.stringify(xs_pc));
      if (xs_pc.length >= 8) {
        // window.alert('11');
        xs_pc.sort(this.sortDisplayCode);
        // window.alert(JSON.stringify(xs_pc));
        const x0 = xs_pc[0];
        const x0_compare_item = parseInt(x0.compare_item, 10) + 1;
        if (x0_compare_item === 10) {
          window.alert('对不起，最多加入9个产品进行对比！');
        } else {
          const columnname = 'p0' + x0_compare_item.toString();
          xs_pc[0][columnname] = this.CurrentX.label;
          xs_pc[1][columnname] = this.CurrentX.scenes;
          xs_pc[2][columnname] = this.CurrentX.industries;
          xs_pc[3][columnname] = this.CurrentX.sku;
          xs_pc[4][columnname] = this.CurrentX.seo_tag;
          xs_pc[5][columnname] = this.CurrentX.enterprise_label;
          xs_pc[6][columnname] = this.CurrentX.level_label;
          xs_pc[7][columnname] = this.CurrentX.status_label;
          // xs_pc[8][columnname] = this.CurrentX.moq;
          // xs_pc[9][columnname] = this.CurrentX.price_out;
          // xs_pc[10][columnname] = this.CurrentX.price_sale;
          xs_pc[0]['compare_item'] = x0_compare_item.toString();
          const lsnew = JSON.stringify(xs_pc);
          // window.alert(lsnew);
          localStorage.setItem(cusn + '_product_compare_sns', lspsns + this.CurrentX.sn + ';');
          localStorage.setItem(cusn + '_product_compare', lsnew);
          localStorage.setItem(cusn + '_product_compare_dt', '1');
          this.compare_info = '已加入对比';
        }
      }
    }
  }

  sortDisplayCode(a, b) {
    return a.display_code - b.display_code;
  }

  initXPC(): any[] {
    const xs_pc = [];
    const x0 = new XProductCompare();
    x0.compare_item = '0';
    x0.display_code = 0;
    xs_pc.push(x0);
    const x1 = new XProductCompare();
    x1.compare_item = '产品出货价';
    x1.display_code = 1;
    xs_pc.push(x1);
    const x2 = new XProductCompare();
    x2.compare_item = '产品零售价';
    x2.display_code = 2;
    xs_pc.push(x2);
    const x3 = new XProductCompare();
    x3.compare_item = '使用场景';
    x3.display_code = 3;
    xs_pc.push(x3);
    const x4 = new XProductCompare();
    x4.compare_item = '行业类别';
    x4.display_code = 4;
    xs_pc.push(x4);
    const x5 = new XProductCompare();
    x5.compare_item = 'SKU';
    x5.display_code = 5;
    xs_pc.push(x5);
    const x6 = new XProductCompare();
    x6.compare_item = '产品特性关键字';
    x6.display_code = 6;
    xs_pc.push(x6);
    const x7 = new XProductCompare();
    x7.compare_item = '公司名称';
    x7.display_code = 7;
    xs_pc.push(x7);
    const x8 = new XProductCompare();
    x8.compare_item = '产品成熟度';
    x8.display_code = 8;
    xs_pc.push(x8);
    const x9 = new XProductCompare();
    x9.compare_item = 'MOQ';
    x9.display_code = 9;
    xs_pc.push(x9);
    const x10 = new XProductCompare();
    x10.compare_item = '对接状态';
    x10.display_code = 10;
    xs_pc.push(x10);
    return xs_pc;
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
