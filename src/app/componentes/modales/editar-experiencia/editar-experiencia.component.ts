import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Expe } from 'src/app/entidad/expe';
import { ExpService } from 'src/app/servicios/exp.service';

@Component({
  selector: 'app-editar-experiencia',
  templateUrl: './editar-experiencia.component.html',
  styleUrls: ['./editar-experiencia.component.css']
})
export class EditarExperienciaComponent implements OnInit {
  experienciaList : Expe[]=[];
  form : FormGroup;
   
 
  constructor(private formBuilder : FormBuilder, private sExperiencia : ExpService) { 
     //creamos el grupo de controles para el formulario
     this.form = this.formBuilder.group({
      id:[''],
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
  
    //limpiar
    limpiar() : void{
      this.form.reset();
      alert("se limpio correctamente");
    }

    //lista de experiencia
    traerExperiencia(): void {
      this.sExperiencia.lista().subscribe(data =>{this.experienciaList=data});
     }
     //traer por id
     cargarDetalle(id: number) {
      this.sExperiencia.getById(id).subscribe(
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
     // editar la experiencia 
    onUpdate(): void {
      this.sExperiencia.edit(this.form.value).subscribe(data => {
     alert("Experiencia modificada");
     this.traerExperiencia();
     this.form.reset();
      })
     }
    //el evento para modificar
    onEnviar(event: Event){
      event.preventDefault();
      if(this.form.valid){
        this.onUpdate();
        alert("se modifico correctamente");
      }else{
        alert("falló en la carga, intente nuevamente");
        this.form.markAllAsTouched();
        window.location.reload();
      }    
    }
   
    //borrar la experiencia
    borrar(id: number) {
      this.sExperiencia.delete(id).subscribe(
        db => {
            alert("se pudo eliminar satisfactoriamente")
            this.traerExperiencia();
            },
          err => {
          alert("No se pudo eliminar")
          })
        }

}

