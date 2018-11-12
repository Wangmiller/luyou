import {Component, OnInit} from '@angular/core';

import { MENU_ITEMS_U } from './pages_u-menu';

@Component({
  selector: 'ngx-pages-u',
  template: `
    <ngx-sample-layout>
      <nb-menu [items]="menu_u"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-sample-layout>
  `,
})
export class PagesUComponent implements OnInit {
  menu_u = MENU_ITEMS_U;
  constructor() {
  }

  ngOnInit() {
    localStorage.setItem('cu_type', 'user');
  }
}
