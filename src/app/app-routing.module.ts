import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { IndexComponent } from './componentes/index/index.component';


const routes: Routes = [
  {path: 'index', component:IndexComponent},
  {path: 'dashboard', component:DashboardComponent},
  {path:'', redirectTo:'/', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
