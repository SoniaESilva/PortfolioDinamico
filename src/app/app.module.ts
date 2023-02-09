import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './componentes/index/index.component';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { RedesComponent } from './componentes/redes/redes.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { EncabezadodashboardComponent } from './componentes/encabezado/dashboar/encabezadodashboard/encabezadodashboard.component';
import { RedesdashboardComponent } from './componentes/redesdashboard/redesdashboard.component';
import { SidebarComponent } from './componentes/sidebar/sidebar.component';
import { DatosPersonalesComponent } from './componentes/modales/datos-personales/datos-personales.component';
import { ExperienciaDashboardComponent } from './componentes/modales/experiencia-dashboard/experiencia-dashboard.component';
import { EducacionDashboardComponent } from './componentes/modales/educacion-dashboard/educacion-dashboard.component';
import { SkillsDashboardComponent } from './componentes/modales/skills-dashboard/skills-dashboard.component';
import { ProyectosDashboardComponent } from './componentes/modales/proyectos-dashboard/proyectos-dashboard.component';
import { PortfolioService } from './servicios/portfolio.service';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalLoginComponent } from './componentes/modales/modal-login/modal-login.component';
import { ModalLogoutComponent } from './componentes/modales/modal-logout/modal-logout.component';
import { EditarExperienciaComponent } from './componentes/modales/editar-experiencia/editar-experiencia.component';
import { EducacionEditarComponent } from './componentes/modales/educacion-editar/educacion-editar.component';
import { EditarSkillComponent } from './componentes/modales/editar-skill/editar-skill.component';
import { EditarProyectosComponent } from './componentes/modales/editar-proyectos/editar-proyectos.component';



@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    DashboardComponent,
    EncabezadoComponent,
    RedesComponent,
    AcercaDeComponent,
    ExperienciaComponent,
    EducacionComponent,
    SkillsComponent,
    ProyectosComponent,
    FooterComponent,
    EncabezadodashboardComponent,
    RedesdashboardComponent,
    SidebarComponent,
    DatosPersonalesComponent,
    ExperienciaDashboardComponent,
    EducacionDashboardComponent,
    SkillsDashboardComponent,
    ProyectosDashboardComponent,
    ModalLoginComponent,
    ModalLogoutComponent,
    EditarExperienciaComponent,
    EducacionEditarComponent,
    EditarSkillComponent,
    EditarProyectosComponent,
    
    
   
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
    
  ],
  providers: [PortfolioService],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
