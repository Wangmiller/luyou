import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';

import { AuthLoginComponent } from './auth_login.component'; // 导入刚才新建的模块


import { AuthLoginUService } from './auth_login_u/auth_login_u.service';
import { AuthLoginAService } from './auth_login_a/auth_login_a.service';

import { AuthLoginUComponent } from './auth_login_u';
import { AuthLoginAComponent } from './auth_login_a';

import { URegService } from '../_auth_login/u_reg/u_reg.service';
import { ULogoutComponent } from '../_auth_login/u_logout';
import { URegComponent } from '../_auth_login/u_reg';
import { ALogoutComponent } from '../_auth_login/a_logout';

import { RoutingAuthLogin } from './auth_login.routing';

@NgModule({
    imports: [
      CommonModule,
      RoutingAuthLogin,
      ThemeModule,
    ],
    declarations: [
      AuthLoginComponent,
      AuthLoginAComponent,
      AuthLoginUComponent,
      ULogoutComponent,
      URegComponent,
      ALogoutComponent,
    ],
    providers: [
      URegService,
      AuthLoginAService,
      AuthLoginUService,
    ],
})

export class AuthLoginModule {}
