import {Component, OnInit} from '@angular/core';
import 'rxjs/Rx';
import { XUser } from '../../@xmodel/XUser';
import {URegService} from './u_reg.service'

@Component({
  selector: 'ngx-authes-u-reg',
  styleUrls: ['u_reg.scss'],
  templateUrl: 'u_reg.html',
  providers: [URegService],

})
export class URegComponent implements OnInit {
  private xs: XUser[];
  public CurrentX: XUser;
  public ln: string;
  public pd: string;
  public pd2: string;

  constructor(private service: URegService) {
  }

  ngOnInit() {
  }

  back() {
    window.location.href = '#/pages_u/_auth_login/auth_login_u';
  }

  reg() {
    if (!this.ln || !this.pd) {
      window.alert('对不起，请不要留空！');
    } else if (this.ln.trim() === '' || this.pd.trim() === '') {
      window.alert('对不起，请不要留空！');
    } else if (this.pd !== this.pd2) {
      window.alert('对不起，两次密码不一致！');
    } else {
      this.service.getReg(this.ln, this.pd).then(
        res => {
          this.xs = res;
          if (this.xs.length === 1) {
            this.CurrentX = this.xs[0];
            // window.alert(this.CurrentX.login_name);
            if (this.CurrentX && this.CurrentX.sn !== '') {
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
            } else {
              window.alert('对不起，注册失败！');
            }
          } else {
            window.alert('对不起，账号已存在！');
          }
        }).catch(this.handleError);
    }
  }

  private handleError(error: any) {
    console.error('对不起' + error);
  }
}
