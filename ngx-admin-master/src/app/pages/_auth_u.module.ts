import {NgModule, OnInit} from '@angular/core';

import { AuthUComponent } from './_auth_u.component';
import { AuthURoutingModule } from './_auth_u-routing.module';
import { LoginUModule } from './_login_u/login_u.module';
import { ThemeModule } from '../@theme/theme.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';

const AUTHU_COMPONENTS = [
  AuthUComponent,
];

@NgModule({
  imports: [
    AuthURoutingModule,
    ThemeModule,
    LoginUModule,
    MiscellaneousModule,
  ],
  declarations: [
    ...AUTHU_COMPONENTS,
  ],
})
export class AuthUModule {}
