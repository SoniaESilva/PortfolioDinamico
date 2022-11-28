import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { IndexComponent } from './componentes/index/index.component';


const routes: Routes = [
  {path: '', component:IndexComponent},
  {path: 'dashboard', component:DashboardComponent}
  
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
