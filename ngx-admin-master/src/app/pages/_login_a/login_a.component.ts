import {Component} from '@angular/core';

@Component({
  selector: 'ngx-login-a',
  styleUrls: ['./login_a.scss'],
  templateUrl: './login_a.html',
})
export class LoginAComponent {
  constructor() {
    window.location.href = '#/auth_a/_auth_login/auth_login_a';
  }
}
