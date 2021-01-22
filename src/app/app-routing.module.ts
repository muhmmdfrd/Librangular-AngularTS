import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutModule } from './layout/layout.module';

import { LayoutComponent } from './layout/layout.component'
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: 'home',
    component: LayoutComponent,
    loadChildren: () =>
      import('./layout/layout.module').then((m) => m.LayoutModule)
  },
  {
    path: '',
    redirectTo: 'home/book',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true }),
    LayoutModule
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }