import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { IndexComponent } from './componentes/index/index.component';
import { GuardGuard } from './servicios/guard.guard';



const rutas: Routes = [
  {path: 'index', component:IndexComponent},
  {path: 'dashboard', component:DashboardComponent, canActivate:[GuardGuard]},
  {path: '', redirectTo : 'index', pathMatch: 'full'},
  
 ];

@NgModule({
  imports: [RouterModule.forRoot(rutas)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
