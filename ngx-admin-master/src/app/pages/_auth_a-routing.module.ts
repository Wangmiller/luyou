import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { AuthAComponent } from './_auth_a.component';
import { LoginAComponent } from './_login_a/login_a.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';

const routes: Routes = [{
  path: '',
  component: AuthAComponent,
  children: [{
    path: 'login_a',
    component: LoginAComponent,
  }, {
    path: '_auth_login',
    loadChildren: './_auth_login/auth_login.module#AuthLoginModule',
  }, {
    path: '',
    redirectTo: 'login_a',
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
export class AuthARoutingModule {
}
