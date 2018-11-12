import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesUComponent } from './pages_u.component';
import { UserComponent } from './_user/user.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';

const routes: Routes = [{
  path: '',
  component: PagesUComponent,
  children: [{
    path: 'user',
    component: UserComponent,
  }, {
    path: '_share',
    loadChildren: './_share/share.module#ShareModule',
  }, {
    path: '_user',
    loadChildren: './_user/user.module#UserModule',
  }, {
    path: '',
    redirectTo: 'user',
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
export class PagesURoutingModule {
}
