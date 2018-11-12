import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'ngx-login-u',
  styleUrls: ['./login_u.scss'],
  templateUrl: './login_u.html',
})
export class LoginUComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
    this.go();
    // window.setTimeout('go()', 2000);
  }

  go() {
    const cuid = localStorage.getItem('cu_id');
    const culabel = localStorage.getItem('cu_label');
    const cutype = localStorage.getItem('cu_type');
    const cusn = localStorage.getItem('cu_sn');
    const cupic = localStorage.getItem('cu_pic');
    const culn = localStorage.getItem('cu_ln');
    const cutsn = localStorage.getItem('cu_tsn');
    // window.alert(cutype);
    if (cutype && cutype !== '') {
      if (cuid && cuid !== '') {
        window.location.href = '#/pages_u/user';
      }else {
        window.location.href = '#/auth_u/_auth_login/auth_login_u';
      }
    }else {
      window.location.href = '#/auth_u/_auth_login/auth_login_u';
    }
  }
}
