import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'ngx-auth-u',
  template: `
    <ngx-psp-auth-layout>
      <router-outlet></router-outlet>
    </ngx-psp-auth-layout>
  `,
})
export class AuthUComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
    localStorage.setItem('cu_type', 'user');
  }
}
