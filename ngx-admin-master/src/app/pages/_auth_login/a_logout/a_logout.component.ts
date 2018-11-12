import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'ngx-authes-a-logout',
  styleUrls: ['a_logout.scss'],
  templateUrl: 'a_logout.html',

})
export class ALogoutComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
    const cuid = localStorage.getItem('cu_id');
    // if (uid && uid !== '')
    //   window.location.reload();
    localStorage.setItem('cu_id', '');
    localStorage.setItem('cu_label', '');
    localStorage.setItem('cu_sn', '');
    localStorage.setItem('cu_pic', '');
    localStorage.setItem('cu_ln', '');
    localStorage.setItem('cu_type', 'adamiya');
  }

  reLogin() {
    window.location.href = '#/auth_a/_auth_login/auth_login_a';
  }
}
