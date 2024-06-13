// @ts-ignore
import { Routes } from '@angular/router';

export const routes: Routes = [
  {path:'',redirectTo:'/login',pathMatch:'full'},
  {path: 'login', loadComponent: () => import('./components/login/login.component').then(c => c.LoginComponent),pathMatch:'full'},
  {path: 'signup', loadComponent: () => import('./components/signup/signup.component').then(c => c.SignupComponent),pathMatch:'full'},
  {path: 'user', loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule),pathMatch:'full'},
  {path: 'admin', loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule),pathMatch:'full'},
  {path: '**', loadComponent: () => import('./components/notfound/notfound.component').then(c => c.NotfoundComponent),pathMatch:'full'},

  ]

;
