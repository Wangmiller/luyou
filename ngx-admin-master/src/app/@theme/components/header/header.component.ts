import { Component, Input, OnInit } from '@angular/core';

import { NbMenuService, NbSidebarService } from '@nebular/theme';
import { AnalyticsService } from '../../../@core/utils/analytics.service';

@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  label: string;
  pic: string;
  userMenu: any;
  @Input() position = 'normal';

  constructor(private sidebarService: NbSidebarService,
              private menuService: NbMenuService,
              private analyticsService: AnalyticsService) {
  }

  ngOnInit() {
    this.getUser();
  }

  getUser() {
    const cuid = localStorage.getItem('cu_id');
    const cutype = localStorage.getItem('cu_type');
    // window.alert(cutype);
    if (cuid && cuid !== '') {
      this.pic = localStorage.getItem('cu_sn');
      if (cutype === 'adamiya') {
        this.label = '管理员：' + localStorage.getItem('cu_label');
        this.userMenu = [{ title: '注销', link: '/auth_a/_auth_login/a_logout' }];
      } else {
        this.label = '欢迎您：' + localStorage.getItem('cu_label');
        this.userMenu = [{ title: '注销', link: '/auth_u/_auth_login/u_logout' }];
      }
    } else {
      if (cutype === 'adamiya') {
        this.userMenu = [{ title: '请登录', link: '/auth_a/_auth_login/_auth_login_a' }];
      } else {
        this.userMenu = [{ title: '请登录', link: '/auth_u/_auth_login/_auth_login_u' }];
      }
    }
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    return false;
  }

  toggleSettings(): boolean {
    this.sidebarService.toggle(false, 'settings-sidebar');
    return false;
  }

  goToHome() {
    this.menuService.navigateHome();
  }

  startSearch() {
    this.analyticsService.trackEvent('startSearch');
  }
}
