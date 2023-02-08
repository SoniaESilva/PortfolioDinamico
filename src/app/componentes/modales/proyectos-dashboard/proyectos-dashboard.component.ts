import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Proye } from 'src/app/entidad/proye';
import { ProyeService } from 'src/app/servicios/proye.service';
@Component({
  selector: 'app-proyectos-dashboard',
  templateUrl: './proyectos-dashboard.component.html',
  styleUrls: ['./proyectos-dashboard.component.css']
})
export class ProyectosDashboardComponent implements OnInit {
  form : FormGroup;
  proyectosList : Proye [] =[];

  constructor(private formBuilder : FormBuilder, private sProyecto : ProyeService) {
     //creamos el grupo de controles para el formulario
     this.form = this.formBuilder.group({
      nombre :['',[Validators.required]],
      fecha :['',[Validators.required]],
      foto :['',[Validators.required]],
      descripcion :['',[Validators.required]],
      url :['',[Validators.required]],
      personaId :[1],
    })
   }

  ngOnInit(): void {
    this.traerProyecto();//usando proyeService
  }
  get Nombre(){
    return this.form.get("nombre");
    }
  get Fecha(){
    return this.form.get("fecha");
    }
  get Foto(){
    return this.form.get("foto");
    }
  get Descripcion(){
    return this.form.get("descripcion");
    }
  get Url(){
    return this.form.get("url");
    }   
    
    //lista de experiencia
    traerProyecto(): void {
      this.sProyecto.lista().subscribe(data =>{this.proyectosList=data});
     }
    //crear un nuevo proyecto
    onCreate(): void {
      this.sProyecto.create(this.form.value).subscribe(data => {
        alert("Proyecto añadido");
        window.location.reload();
      })
    }
  //limpiar 
  limpiar() : void{
    this.form.reset();
    alert("se limpio correctamente");
  }
  //evento para crear
  onEnviar(event: Event){
    event.preventDefault();
    if(this.form.valid){
      this.onCreate();
      alert("se creo correctamente");
    }else{
      alert("falló en la carga, intente nuevamente");
      this.form.markAllAsTouched();
    }    
  }

}
