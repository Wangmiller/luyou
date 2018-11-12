import {NgModule, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThemeModule } from '../../@theme/theme.module';
import { LoginUComponent } from './login_u.component';

@NgModule({
  imports: [
    CommonModule,
    ThemeModule,
  ],
  declarations: [
    LoginUComponent,
  ],
  providers: [
  ],
})
export class LoginUModule {
}
