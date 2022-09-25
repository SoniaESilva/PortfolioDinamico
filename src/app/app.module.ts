import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './componentes/index/index.component';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { RedesComponent } from './componentes/redes/redes.component';
import { LoginComponent } from './componentes/login/login.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { EncabezadodashboardComponent } from './componentes/encabezado/dashboar/encabezadodashboard/encabezadodashboard.component';
import { LogoutComponent } from './componentes/logout/logout.component';
import { RedesdashboardComponent } from './componentes/redesdashboard/redesdashboard.component';
import { SidebarComponent } from './componentes/sidebar/sidebar.component';




@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    DashboardComponent,
    EncabezadoComponent,
    RedesComponent,
    LoginComponent,
    AcercaDeComponent,
    ExperienciaComponent,
    EducacionComponent,
    SkillsComponent,
    ProyectosComponent,
    FooterComponent,
    EncabezadodashboardComponent,
    LogoutComponent,
    RedesdashboardComponent,
    SidebarComponent,
   
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
