import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'ngx-master',
  styleUrls: ['./master.scss'],
  templateUrl: './master.html',
})
export class MasterComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
    const caid = localStorage.getItem('ca_id');
    const caln = localStorage.getItem('ca_ln');
    const casn = localStorage.getItem('ca_sn');
    const catsn = localStorage.getItem('ca_tsn');

    const cuid = localStorage.getItem('cu_id');
    const culabel = localStorage.getItem('cu_label');
    const cutype = localStorage.getItem('cu_type');
    const cusn = localStorage.getItem('cu_sn');
    const cupic = localStorage.getItem('cu_pic');
    const culn = localStorage.getItem('cu_ln');
    const cutsn = localStorage.getItem('cu_tsn');
    // window.alert(cutype);
    if (catsn && catsn !== '' && catsn !== 'master' && catsn !== 'sa') {
      window.alert('对不起，您的角色不正确！请重新登录！');
      window.location.href = '#/auth_a/_auth_login/auth_login_a';
    } else {
      if (cutype && cutype.trim() !== '') {
        if (caid && caid.trim() !== '') {
          // window.alert(caid);
        } else {
          if (cutype === 'adamiya') {
            window.location.href = '#/auth_a/_auth_login/auth_login_a';
          } else {
            window.location.href = '#/auth_u/_auth_login/auth_login_u';
          }
        }
      } else {
        window.location.href = '#/auth_a/_auth_login/auth_login_a';
      }
    }
    // window.alert(cul);
  }
}
