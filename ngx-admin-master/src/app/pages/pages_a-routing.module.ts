import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesAComponent } from './pages_a.component';
import { MasterComponent } from './_master/master.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';

const routes: Routes = [{
  path: '',
  component: PagesAComponent,
  children: [{
    path: 'master',
    component: MasterComponent,
  }, {
    path: '_adamiya',
    loadChildren: './_adamiya/adamiya.module#AdamiyaModule',
  }, {
    path: '_share',
    loadChildren: './_share/share.module#ShareModule',
  }, {
    path: '_user',
    loadChildren: './_user/user.module#UserModule',
  }, {
    path: '',
    redirectTo: 'master',
    pathMatch: 'full',
  }, {
    path: '**',
    component: NotFoundComponent,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesARoutingModule {
}
