import {Component, OnInit} from '@angular/core';
import {AllIndustryListService} from './all_industry_list.service';
import {XIndustry} from '../../@xmodel/XIndustry';

@Component({
  selector: 'ngx-adamiya-all-industry-list',
  templateUrl: './all_industry_list.html',
  styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
})

export class AllIndustryListComponent implements OnInit {

  settings = {
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
        editable: false,
        title: 'ID',
        type: 'number',
        filter: false,
      },
      label: {
        title: '名称',
        type: 'string',
      },
      custom_code: {
        title: '自定义编码',
        type: 'string',
      },
      display_code: {
        title: '排序号',
        type: 'number',
      },
      seo_tag: {
        title: '检索标签',
        type: 'string',
      },
    },
  };

  xs: XIndustry[];

  constructor(private service: AllIndustryListService) {
  }

  ngOnInit() {
    this.service.getD().then(
    res => {
    this.xs = res;
    }).catch(this.handleError);
  }

  private handleError(error: any) {
    console.error('对不起' + error);
  }

  onCreateConfirm(event): void {
    this.service.createD(event.newData);
    event.confirm.resolve(event.newData);
    this.service.getD().then(
      res => {
        this.xs = res;
      }).catch(this.handleError);
  }

  onEditConfirm(event): void {
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
