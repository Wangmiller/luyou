import {Component, DoCheck} from '@angular/core';
import {RecycleListService} from './recycle_list.service';
import {XKV} from '../../@xmodel/XKV';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'ngx-share-recycle-list',
  templateUrl: './recycle_list.html',
  styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
})

export class RecycleListComponent implements DoCheck {

  settings = {
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
    actions: {
      add: false,
    },
    columns: {
      sn: {
        editable: false,
        title: '系统编号',
        type: 'string',
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
        title: '排序码',
        type: 'number',
      },
      last_update_dt: {
        editable: false,
        title: '最后更新时间',
        type: 'string',
      },
    },
  };

  xs: XKV[];
  en;
  ennew;

  constructor(private service: RecycleListService, public route: ActivatedRoute) {
    this.ennew = '0';
    this.en = '0';
  }

  private handleError(error: any): Promise<any> {
    window.alert('An error occurred' + error);
    return Promise.reject(error.message || error);
  }

  ngDoCheck() {
    this.ennew = this.route.snapshot.params['en'];
    if (this.ennew !== this.en) {
      this.en = this.ennew;
      this.service.getD(this.en).then(
        res => {
          this.xs = res;
        }).catch(this.handleError);
    }
  }

  onDeleteConfirm(event): void {
    // window.alert(this.en);
    if (window.confirm('确定要永久删除吗？永久删除不能恢复数据！')) {
      this.service.deleteD(event.data, this.en);
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  onEditConfirm(event): void {
    if (window.confirm('确定要恢复该数据吗？')) {
      this.service.editD(event.newData, this.en);
      event.confirm.resolve();
      this.en = '0'; // 引发表格更新
    } else {
      event.confirm.reject();
    }
  }
}
