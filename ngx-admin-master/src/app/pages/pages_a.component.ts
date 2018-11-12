import {Component, OnInit} from '@angular/core';

import { MENU_ITEMS_A } from './pages_a-menu';

@Component({
  selector: 'ngx-pages-a',
  template: `
    <ngx-sample-layout>
      <nb-menu [items]="menu_a"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-sample-layout>
  `,
})
export class PagesAComponent implements OnInit {
  menu_a = MENU_ITEMS_A;
  constructor() {
  }

  ngOnInit() {
    localStorage.setItem('cu_type', 'adamiya');
  }
}
