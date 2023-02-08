import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Expe } from 'src/app/entidad/expe';
import { ExpService } from 'src/app/servicios/exp.service';

@Component({
  selector: 'app-experiencia-dashboard',
  templateUrl: './experiencia-dashboard.component.html',
  styleUrls: ['./experiencia-dashboard.component.css']
})
export class ExperienciaDashboardComponent implements OnInit {
 experienciaList : Expe [] =[];
 form : FormGroup;
  
  constructor(private formBuilder : FormBuilder, private sExperiencia : ExpService) {
    //creamos el grupo de controles para el formulario
    this.form = this.formBuilder.group({
      puesto :['',[Validators.required]],
      fechaInicio :[''],
      fechaFin :[''],
      descripcion :['',[Validators.required]],
      logo :[''],
      empresa :['',[Validators.required]],
      esTrabajoActual :[''],
      personaId :[1],
      })
    }

  ngOnInit(): void {
    this.traerExperiencia();//usando expeService
  }
    
     get Puesto(){
      return this.form.get("puesto");
      }
      get Descripcion(){
        return this.form.get("descripcion");
      }
      get Empresa(){
        return this.form.get("empresa");
      }


   //lista de experiencia
    traerExperiencia(): void {
     this.sExperiencia.lista().subscribe(data =>{this.experienciaList=data});
       }
  //crear una nueva experiencia
    onCreate(): void {
      this.sExperiencia.create(this.form.value).subscribe(data => {
        alert("Experiencia añadida");
        window.location.reload();
      })
    }
  
    //limpiar
    limpiar() : void{
      this.form.reset();
      alert("se limpio correctamente");
    }
 //el evento para crear
    onEnviar(event: Event){
      event.preventDefault();
      if(this.form.valid){
        this.onCreate();
        alert("se creo correctamente");
      }else{
        alert("falló en la carga, intente nuevamente");
        this.form.markAllAsTouched();
        window.location.reload();
      }    
    }
}
  

