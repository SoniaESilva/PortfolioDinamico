import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';



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
import { DatosPersonalesComponent } from './componentes/modales/datos-personales/datos-personales.component';
import { AcercaDashboardComponent } from './componentes/modales/acerca-dashboard/acerca-dashboard.component';
import { ExperienciaDashboardComponent } from './componentes/modales/experiencia-dashboard/experiencia-dashboard.component';
import { EducacionDashboardComponent } from './componentes/modales/educacion-dashboard/educacion-dashboard.component';
import { SkillsDashboardComponent } from './componentes/modales/skills-dashboard/skills-dashboard.component';
import { ProyectosDashboardComponent } from './componentes/modales/proyectos-dashboard/proyectos-dashboard.component';
import { PortfolioService } from './servicios/portfolio.service';







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
    DatosPersonalesComponent,
    AcercaDashboardComponent,
    ExperienciaDashboardComponent,
    EducacionDashboardComponent,
    SkillsDashboardComponent,
    ProyectosDashboardComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    
  ],
  providers: [PortfolioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
