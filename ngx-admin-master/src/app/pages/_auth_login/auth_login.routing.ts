import { Routes, RouterModule } from '@angular/router';

import { AuthLoginComponent } from './auth_login.component'; // 导入刚才新建的模块

import { AuthLoginAComponent } from './auth_login_a'
import { AuthLoginUComponent } from './auth_login_u'
import { ULogoutComponent } from './u_logout'
import { ALogoutComponent } from './a_logout'
import { URegComponent } from './u_reg';

const routes: Routes = [
  {
    path: '',
    component: AuthLoginComponent,
    children: [
      {
        path: 'auth_login_a',
        component: AuthLoginAComponent,
      },
      {
        path: 'auth_login_u',
        component: AuthLoginUComponent,
      },
      {
        path: 'u_logout',
        component: ULogoutComponent,
      },
      {
        path: 'a_logout',
        component: ALogoutComponent,
      },
      {
        path: 'u_reg',
        component: URegComponent,
      },
    ],
  },
];
export const RoutingAuthLogin = RouterModule.forChild(routes);
