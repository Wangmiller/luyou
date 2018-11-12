import {Component, OnInit} from '@angular/core';
import {UserDetailService} from './user_detail.service';
import {ActivatedRoute} from '@angular/router';
import { XUser } from '../../@xmodel/XUser';
import { XKV } from '../../@xmodel/XKV';

@Component({
  selector: 'ngx-share-user-detail',
  styleUrls: ['user_detail.scss'],
  templateUrl: 'user_detail.html',
  providers: [UserDetailService],

})
export class UserDetailComponent implements OnInit {
  private sn: string;
  public CurrentX = new XUser();
  xsUser: XUser[];
  xsELevel: XKV[];
  xsEType: XKV[];
  xsEStatus: XKV[];
  xsEClass: XKV[];

  constructor(private service: UserDetailService, public route: ActivatedRoute) {
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

  updateD() {
    this.service.editD(this.CurrentX);
  }

}
