import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'ngx-user',
  styleUrls: ['./user.scss'],
  templateUrl: './user.html',
})
export class UserComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
    const cuid = localStorage.getItem('cu_id');
    const culabel = localStorage.getItem('cu_label');
    const cutype = localStorage.getItem('cu_type');
    const cusn = localStorage.getItem('cu_sn');
    const cupic = localStorage.getItem('cu_pic');
    const culn = localStorage.getItem('cu_ln');
    const cutsn = localStorage.getItem('cu_tsn');
    if (cuid && cuid.trim() !== '') {
      // window.alert(cuid);
    } else {
      window.location.href = '#/auth_u/_auth_login/auth_login_u';
    }
  }
}
