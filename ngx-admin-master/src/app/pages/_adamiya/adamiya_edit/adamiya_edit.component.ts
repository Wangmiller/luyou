import {Component, OnInit} from '@angular/core';
import {AdamiyaEditService} from './adamiya_edit.service';
import {ActivatedRoute} from '@angular/router';
import { XUser } from '../../@xmodel/XUser';
import { XKV } from '../../@xmodel/XKV';

@Component({
  selector: 'ngx-adamiya-adamiya-edit',
  styleUrls: ['adamiya_edit.scss'],
  templateUrl: 'adamiya_edit.html',
  providers: [AdamiyaEditService],

})
export class AdamiyaEditComponent implements OnInit {
  private sn: string;
  public CurrentX: XUser;
  xsUser: XUser[];
  xsELevel: XKV[];
  xsEType: XKV[];
  xsEStatus: XKV[];
  xsEClass: XKV[];
  public isshowdel: boolean;

  constructor(private service: AdamiyaEditService, public route: ActivatedRoute) {
    const dateObj = new Date();
    this.sn = this.route.snapshot.params['sn'];
    if (localStorage.getItem('cu_tsn') === 'sa') {
      // 控制删除按钮可见
      this.isshowdel = false;
    } else {
      this.isshowdel = true;
    }
  }

  private handleError(error: any) {
    window.alert('对不起，' + error);
  }

  ngOnInit() {
    this.service.getDULevel().then(
      res => {
        this.xsELevel = res;
      }).catch(this.handleError);
    this.service.getDUType().then(
      res => {
        this.xsEType = res;
      }).catch(this.handleError);
    this.service.getDUStatus().then(
      res => {
        this.xsEStatus = res;
      }).catch(this.handleError);
    this.service.getD(this.sn).then(
      res => {
        this.xsUser = res;
        this.CurrentX = this.xsUser[0];
      }).catch(this.handleError);
  }

  goBack() {
    window.location.href = '#/pages_a/_adamiya/all_adamiya_list';
  }

  updateD() {
    this.service.editD(this.CurrentX);
  }

  updateP() {
    this.service.editP(this.CurrentX);
  }

  deleteD() {
    const cuid = localStorage.getItem('cu_id');
    if (window.confirm('确定要删除吗？')) {
      this.service.deleteD(this.CurrentX.id);
      this.goBack();
    }
  }
}
