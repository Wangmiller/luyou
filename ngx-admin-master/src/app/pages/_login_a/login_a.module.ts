import {NgModule, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThemeModule } from '../../@theme/theme.module';
import { LoginAComponent } from './login_a.component';

@NgModule({
  imports: [
    CommonModule,
    ThemeModule,
  ],
  declarations: [
    LoginAComponent,
  ],
  providers: [
  ],
})
export class LoginAModule {
}
