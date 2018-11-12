import {Component, OnInit} from '@angular/core';
import 'rxjs/Rx';
import {AuthLoginAService} from './auth_login_a.service'
import { XUser } from '../../@xmodel/XUser';
import { XSTAMaster } from '../../@xmodel/XSTAMaster';

@Component({
  selector: 'ngx-auth-login-auth-login-a',
  styleUrls: ['auth_login_a.scss'],
  templateUrl: 'auth_login_a.html',
  providers: [AuthLoginAService],

})

export class AuthLoginAComponent implements OnInit {
  private xs: XUser[];
  private xssta: XSTAMaster[];
  public CurrentX: XUser;
  public ln: string;
  public pd: string;
  constructor(private service: AuthLoginAService) {
    localStorage.setItem('ca_id', '');
    localStorage.setItem('ca_sn', '');
    localStorage.setItem('ca_ln', '');
    localStorage.setItem('ca_tsn', '');
    this.ln = localStorage.getItem('cu_ln');
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
          this.CurrentX = this.xs[0];
          if (this.CurrentX && this.CurrentX.sn !== '') {
            this.service.getDSTA(this.CurrentX.sn).then(
              ressta => {
                this.xssta = ressta;
                localStorage.setItem(this.CurrentX.sn + '_sta_master', JSON.stringify(this.xssta));
                // window.alert(this.xssta);
                //
                localStorage.setItem('ca_id', this.CurrentX.id.toString());
                localStorage.setItem('ca_sn', this.CurrentX.sn);
                localStorage.setItem('ca_ln', this.CurrentX.login_name);
                localStorage.setItem('ca_tsn', this.CurrentX.type_sn);
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
                window.location.href = '#/pages_a/master';
              }).catch(this.handleError);
          } else {
            window.alert('对不起，您输入的登录信息不正确！');
          }
        }).catch(this.handleError);
    }
  }

  private handleError(error: any) {
    console.error('对不起' + error);
  }
}
