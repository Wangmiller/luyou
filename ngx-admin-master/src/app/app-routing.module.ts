import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: 'pages', loadChildren: 'app/pages/pages.module#PagesModule' },
  { path: 'auth_a', loadChildren: 'app/pages/_auth_a.module#AuthAModule' },
  { path: 'auth_u', loadChildren: 'app/pages/_auth_u.module#AuthUModule' },
  { path: 'pages_u', loadChildren: 'app/pages/pages_u.module#PagesUModule' },
  { path: 'pages_a', loadChildren: 'app/pages/pages_a.module#PagesAModule' },
  { path: '', redirectTo: 'auth_u', pathMatch: 'full' },
  { path: '**', redirectTo: 'auth_u' },
];

const config: ExtraOptions = {
  useHash: true,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
