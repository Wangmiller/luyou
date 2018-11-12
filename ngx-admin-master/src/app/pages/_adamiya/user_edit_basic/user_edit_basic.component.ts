import {Component, OnInit} from '@angular/core';
import {UserEditBasicService} from './user_edit_basic.service';
import {ActivatedRoute} from '@angular/router';
import { XUser } from '../../@xmodel/XUser';
import { XKV } from '../../@xmodel/XKV';

@Component({
  selector: 'ngx-adamiya-user-edit-basic',
  styleUrls: ['user_edit_basic.scss'],
  templateUrl: 'user_edit_basic.html',
  providers: [UserEditBasicService],

})
export class UserEditBasicComponent implements OnInit {
  private sn: string;
  public CurrentX: XUser;
  xsUser: XUser[];
  xsELevel: XKV[];
  xsEType: XKV[];
  xsEStatus: XKV[];
  xsEClass: XKV[];

  constructor(private service: UserEditBasicService, public route: ActivatedRoute) {
    const dateObj = new Date();
    this.sn = this.route.snapshot.params['sn'];
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


  backD() {
    window.location.href = '#/pages_a/_adamiya/all_user_list';
  }

  updateD() {
    this.service.editD(this.CurrentX);
  }

  updateP() {
    this.service.editP(this.CurrentX);
  }

}
