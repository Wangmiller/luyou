import {NgModule, OnInit} from '@angular/core';

import { AuthAComponent } from './_auth_a.component';
import { AuthARoutingModule } from './_auth_a-routing.module';
import { LoginAModule } from './_login_a/login_a.module';
import { ThemeModule } from '../@theme/theme.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';

const AUTHA_COMPONENTS = [
  AuthAComponent,
];

@NgModule({
  imports: [
    AuthARoutingModule,
    ThemeModule,
    LoginAModule,
    MiscellaneousModule,
  ],
  declarations: [
    ...AUTHA_COMPONENTS,
  ],
})
export class AuthAModule {}
