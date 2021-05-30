import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth/auth.guard';

const routes: Routes = [
  {
    path: '', canActivate: [AuthGuard], pathMatch: 'prefix', children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },
      { path: 'admin', loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule) }
    ]
  },
  {
    path: 'home',
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
