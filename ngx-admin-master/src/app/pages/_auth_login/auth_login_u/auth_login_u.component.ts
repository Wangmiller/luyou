import {Component, OnInit} from '@angular/core';
import 'rxjs/Rx';
import {AuthLoginUService} from './auth_login_u.service'
import { XUser } from '../../@xmodel/XUser';
import {XSTAUser} from '../../@xmodel/XSTAUser';

@Component({
  selector: 'ngx-auth-login-auth-login-u',
  styleUrls: ['auth_login_u.scss'],
  templateUrl: 'auth_login_u.html',
  providers: [AuthLoginUService],

})

export class AuthLoginUComponent implements OnInit {
  private xs: XUser[];
  public CurrentX: XUser;
  private xssta: XSTAUser[];
  public ln: string;
  public pd: string;
  constructor(private service: AuthLoginUService) {
  }
  ngOnInit() {  }

  getLogin() {
    if (!this.ln || !this.pd) {
      window.alert('对不起，请不要留空！');
    } else if (this.ln.trim() === '' || this.pd.trim() === '') {
      window.alert('对不起，请不要留空！');
    } else {
      this.service.getLogin(this.ln, this.pd).then(
        res => {
          this.xs = res;
          if (this.xs.length === 1) {
            this.CurrentX = this.xs[0];
            // window.alert(this.CurrentX.login_name);
            if (this.CurrentX && this.CurrentX.sn !== '' && this.CurrentX.is_na === 0) {
              this.service.getDSTA(this.CurrentX.sn).then(
                ressta => {
                  this.xssta = ressta;
                  localStorage.setItem(this.CurrentX.sn + '_sta_user', JSON.stringify(this.xssta));
                  // window.alert(this.xssta);
                  //
                  localStorage.setItem('cu_id', this.CurrentX.id.toString());
                  localStorage.setItem('cu_label', this.CurrentX.label);
                  localStorage.setItem('cu_sn', this.CurrentX.sn);
                  localStorage.setItem('cu_pic', this.CurrentX.id.toString());
                  localStorage.setItem('cu_ln', this.CurrentX.login_name);
                  localStorage.setItem('cu_tsn', this.CurrentX.type_sn);
                  localStorage.setItem('cu_is_notice_project', this.CurrentX.is_notice_project.toString());
                  localStorage.setItem('cu_is_notice_user', this.CurrentX.is_notice_user.toString());
                  localStorage.setItem('cu_is_notice_product', this.CurrentX.is_notice_product.toString());
                  localStorage.setItem('cu_is_notice_enterprise', this.CurrentX.is_notice_enterprise.toString());
                  localStorage.setItem('cu_is_notice_sys', this.CurrentX.is_notice_sys.toString());
                  window.location.href = '#/pages_u/user';
                }).catch(this.handleError);
            } else {
              window.alert('对不起，您输入的登录信息不正确！');
            }
          } else {
            window.alert('对不起，您输入的登录信息不正确！');
          }
        }).catch(this.handleError);
    }
  }

  reg() {
    window.location.href = '#/pages_u/_auth_login/u_reg';
  }

  adamiya() {
    window.location.href = '#/auth_a/_auth_login/auth_login_a';
  }

  private handleError(error: any) {
    console.error('对不起' + error);
  }
}
