import {Component, OnInit} from '@angular/core';
import 'rxjs/Rx';

@Component({
  selector: 'ngx-authes-u-logout',
  styleUrls: ['u_logout.scss'],
  templateUrl: 'u_logout.html',

})
export class ULogoutComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    const uid = localStorage.getItem('cu_id');
    // if (uid && uid !== '')
    //   window.location.reload();
    localStorage.setItem('cu_id', '');
    localStorage.setItem('cu_label', '');
    localStorage.setItem('cu_sn', '');
    localStorage.setItem('cu_pic', '');
    localStorage.setItem('cu_ln', '');
    localStorage.setItem('cu_type', 'user');
  }

  reLogin() {
    window.location.href = '#/auth_u/_auth_login/auth_login_u';
  }
}
