import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Edu } from 'src/app/entidad/edu';
import { EduService } from 'src/app/servicios/edu.service';

@Component({
  selector: 'app-educacion-editar',
  templateUrl: './educacion-editar.component.html',
  styleUrls: ['./educacion-editar.component.css']
})
export class EducacionEditarComponent implements OnInit {
  educacionList: Edu [] = [];
  form : FormGroup;
  constructor(private formBuilder : FormBuilder, private sEducacion : EduService) { 
   //creamos el grupo de controles para el formulario
 this.form = this.formBuilder.group({
  id : [''],
  establecimiento :['',[Validators.required]],
  titulo :['',[Validators.required]],
  fechaInicio :[''],
  fechaFin :[''],
  logo :[''],
  esEstudioActual :[''],
  personaId :[1],
  
})
  }

  ngOnInit(): void {
    this.traerEducacion();//usando eduService
  }
  get Establecimiento(){
    return this.form.get("establecimiento");
    }
  get Titulo(){
    return this.form.get("titulo");
    }
     //lista de educación
     traerEducacion(): void {
      this.sEducacion.lista().subscribe(data =>{this.educacionList=data});
     }

     //traer por id
     cargarDetalle(id: number) {
      this.sEducacion.getById(id).subscribe(
        {
          next: (data) => {
            this.form.patchValue(data);
          },
          error: (e) => {
            console.error(e)
            alert("error al modificar")
          }
        }
      )
    }
    //modificar educación
    onUpdate(): void {
      this.sEducacion.edit(this.form.value).subscribe(data => {
     alert("Educación modificada");
     this.traerEducacion();
     this.form.reset();
      })
     }
    //el evento para modificar
    onEnviar(event: Event){
      event.preventDefault();
      if(this.form.valid){
        this.onUpdate();
        }else{
        alert("falló en la carga, intente nuevamente");
        this.form.markAllAsTouched();
        window.location.reload();
      }    
    }
   
    //borrar la educación
    borrar(id: number) {
      this.sEducacion.delete(id).subscribe(
        db => {
            alert("se pudo eliminar satisfactoriamente")
            this.traerEducacion();
            },
          err => {
          alert("No se pudo eliminar")
          })
        }
        //limpiar
    limpiar() : void{
      this.form.reset();
      alert("se limpio correctamente");
    }

}
