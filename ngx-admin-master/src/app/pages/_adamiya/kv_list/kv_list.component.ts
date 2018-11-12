import {Component, OnInit, OnChanges, DoCheck} from '@angular/core';
import {KVListService} from './kv_list.service';
import {XKV} from '../../@xmodel/XKV';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'ngx-adamiya-kv-list',
  templateUrl: './kv_list.html',
  styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
})

export class KVListComponent implements OnInit, DoCheck {

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
      sn: {
        editable: false,
        title: '系统编号',
        type: 'string',
        filter: false,
      },
      label: {
        title: '名称',
        type: 'string',
      },
      display_code: {
        title: '排序号',
        type: 'number',
      },
      create_dt: {
        title: '创建时间',
        type: 'string',
        editable: false,
      },
      last_update_dt: {
        title: '最近更新时间',
        type: 'string',
        editable: false,
      },
    },
  };

  xs: XKV[];
  private en: string;
  private ennew: string;

  constructor(private service: KVListService, private route: ActivatedRoute) {
    this.ennew = '0';
    this.en = '0';
  }

  ngDoCheck() {
    this.route.params.subscribe((params: Params) => this.ennew = params['en']);
    if (this.ennew !== this.en) {
      // window.alert(this.en);
      this.en = this.ennew;
      this.service.getD(this.en).then(
        res => {
          this.xs = res;
        }).catch(this.handleError);
    }
  }

  ngOnInit() {
  }

  private handleError(error: any) {
    console.error('对不起' + error);
  }

  onCreateConfirm(event): void {
    this.service.createD(event.newData, this.en);
    event.confirm.resolve(event.newData);
  }

  onEditConfirm(event): void {
    this.service.editD(event.newData, this.en);
    event.confirm.resolve();
  }

  onDeleteConfirm(event): void {
    if (window.confirm('确定要删除吗？')) {
      this.service.deleteD(event.data, this.en);
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
