import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminHomeComponent} from "./components/admin-home/admin-home.component";
import {AdminSubjectComponent} from "./components/admin-subject/admin-subject.component";
import {AdminPaymentComponent} from "./components/admin-payment/admin-payment.component";
import {AdminAllProgramComponent} from "./components/admin-all-program/admin-all-program.component";

const routes: Routes = [
  {path:'',redirectTo:'/admin/process/home',pathMatch:'full'},
  {path:'process',loadComponent:()=>import('./components/admin-contex/admin-contex.component').then(c=>c.AdminContexComponent),children:[
      {path:'home',component:AdminHomeComponent},
      {path:'all-programs',component:AdminAllProgramComponent},
      {path:'payment',component:AdminPaymentComponent},
      {path:'subject',component:AdminSubjectComponent},
    ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
