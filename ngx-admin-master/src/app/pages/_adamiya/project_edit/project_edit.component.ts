import {Component, OnInit} from '@angular/core';
import {ProjectEditService} from './project_edit.service';
import {ActivatedRoute} from '@angular/router';
import { XProject } from '../../@xmodel/XProject';
import { XKV } from '../../@xmodel/XKV';
import {XFile} from '../../@xmodel/XFile';

@Component({
  selector: 'ngx-adamiya-project-edit',
  styleUrls: ['project_edit.scss'],
  templateUrl: 'project_edit.html',
  providers: [ProjectEditService],

})
export class ProjectEditComponent implements OnInit {
  private sn: string;
  public lastYear: number;
  public thisYear: number;
  public CurrentX: XProject;
  closesign: number;

  xsProject: XProject[];
  xsELevel: XKV[];
  xsEType: XKV[];
  xsEStatus: XKV[];
  xsEClass: XKV[];

  constructor(private service: ProjectEditService, public route: ActivatedRoute) {
    const dateObj = new Date();
    this.thisYear = dateObj.getFullYear();
    this.lastYear = dateObj.getFullYear() - 1;
    this.sn = this.route.snapshot.params['sn'];
    this.closesign = 0;
  }

  private handleError(error: any) {
    window.alert('对不起，' + error);
  }

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
      id: {
        editable: false,
        title: 'ID',
        type: 'number',
        filter: false,
      },
      custom_code: {
        title: '文件编号',
        type: 'string',
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
        this.xsProject = res;
        this.CurrentX = this.xsProject[0];
      }).catch(this.handleError);
    this.service.getDFile(this.sn).then(
      res => {
        this.xsFile = res;
      }).catch(this.handleError);
  }

  backD() {
    window.location.href = '#/pages_a/_adamiya/all_project_list';
  }

  updateD() {
    // window.alert('edddit');
    this.service.editD(this.CurrentX);
  }
}
