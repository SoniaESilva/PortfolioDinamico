import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Edu } from 'src/app/entidad/edu';
import { EduService } from 'src/app/servicios/edu.service';

@Component({
  selector: 'app-educacion-dashboard',
  templateUrl: './educacion-dashboard.component.html',
  styleUrls: ['./educacion-dashboard.component.css']
})
export class EducacionDashboardComponent implements OnInit {
  educacionList: Edu [] = [];
  form : FormGroup;
  

  constructor(private formBuilder : FormBuilder, private sEducacion : EduService) { 
 //creamos el grupo de controles para el formulario
 this.form = this.formBuilder.group({
  establecimiento :['',[Validators.required]],
  titulo :['',[Validators.required]],
  fechaInicio :[''],
  fechaFin :[''],
  logo :[''],
  esEstudioActual :[''],
  
  
})
  }

  ngOnInit(): void { }
  
  get Establecimiento(){
    return this.form.get("establecimiento");
    }
  get Titulo(){
    return this.form.get("titulo");
    }

    onCreate(): void {
      this.sEducacion.create(this.form.value).subscribe(data => {
        alert("Educacion añadida");
        window.location.reload();
      })
    }
   
    onEnviar(event: Event){
      event.preventDefault();
      if(this.form.valid){
        this.onCreate();
      }else{
        alert("falló en la carga, intente nuevamente");
        this.form.markAllAsTouched();
      }    
    }
    limpiar() : void{
      this.form.reset();
      alert("se limpio correctamente");
    }

}
