import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'ngx-auth-a',
  template: `
    <ngx-psp-auth-layout>
      <router-outlet></router-outlet>
    </ngx-psp-auth-layout>
  `,
})
export class AuthAComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
    localStorage.setItem('cu_type', 'adamiya');
  }
}
