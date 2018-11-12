import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Http} from '@angular/http';
import 'rxjs/Rx';
import {SetPasswordService} from './set_password.service'

@Component({
  selector: 'ngx-share-set-password',
  styleUrls: ['set_password.scss'],
  templateUrl: 'set_password.html',
  providers: [SetPasswordService],

})
export class SetPasswordComponent implements OnInit {
  public ln: string;
  public oldP: string;
  public newP: string;
  public newPC: string;
  constructor(private service: SetPasswordService) {
    this.ln = localStorage.getItem('cu_ln');
  }

  ngOnInit() {
  }

  setPWD() {
    const cuid = localStorage.getItem('cu_id');
    if (cuid !== '' && this.oldP !== '' && this.newP !== '' && this.newPC !== '' && this.newP === this.newPC) {
      this.service.setP(cuid, this.oldP, this.newP);
      window.alert('已修改成功，重新登录将使用新密码！')
    }else {
      window.alert('对不起，请输入正确的密码！')
    }
  }
}
