import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { AuthUComponent } from './_auth_u.component';
import { LoginUComponent } from './_login_u/login_u.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';

const routes: Routes = [{
  path: '',
  component: AuthUComponent,
  children: [{
    path: 'login_u',
    component: LoginUComponent,
  }, {
    path: '_auth_login',
    loadChildren: './_auth_login/auth_login.module#AuthLoginModule',
  }, {
    path: '',
    redirectTo: 'login_u',
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
export class AuthURoutingModule {
}
