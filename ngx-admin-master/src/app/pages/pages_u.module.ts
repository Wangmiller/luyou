import {NgModule, OnInit} from '@angular/core';

import { PagesUComponent } from './pages_u.component';
import { UserModule } from './_user/user.module';
import { PagesURoutingModule } from './pages_u-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';

const PAGESU_COMPONENTS = [
  PagesUComponent,
];

@NgModule({
  imports: [
    PagesURoutingModule,
    ThemeModule,
    UserModule,
    MiscellaneousModule,
  ],
  declarations: [
    ...PAGESU_COMPONENTS,
  ],
})
export class PagesUModule {}
