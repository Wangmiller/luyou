import {NgModule, OnInit} from '@angular/core';

import { PagesAComponent } from './pages_a.component';
import { MasterModule } from './_master/master.module';
import { PagesARoutingModule } from './pages_a-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';

const PAGESA_COMPONENTS = [
  PagesAComponent,
];

@NgModule({
  imports: [
    PagesARoutingModule,
    ThemeModule,
    MasterModule,
    MiscellaneousModule,
  ],
  declarations: [
    ...PAGESA_COMPONENTS,
  ],
})
export class PagesAModule {}
