import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserHomeComponent} from "./components/user-home/user-home.component";
import {UserContextComponent} from "./components/user-context/user-context.component";
import {UserMyProgrameComponent} from "./components/user-my-programe/user-my-programe.component";
import {UserAllProgrameComponent} from "./components/user-all-programe/user-all-programe.component";
import {UserPaymentComponent} from "./components/user-payment/user-payment.component";
import {UserSubjectComponent} from "./components/user-subject/user-subject.component";

const routes: Routes = [
  {path:'',redirectTo:'/user/process/home',pathMatch:'full'},
   {path: 'process', loadComponent: () => import('./components/user-context/user-context.component')
       .then(c => c.UserContextComponent),children:[
       {path:'home',component:UserHomeComponent},
       {path:'my-programs',component:UserMyProgrameComponent},
       {path:'all-programs',component:UserAllProgrameComponent},
       {path:'payment',component:UserPaymentComponent},
       {path:'subject',component:UserSubjectComponent},
     ]},





];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
