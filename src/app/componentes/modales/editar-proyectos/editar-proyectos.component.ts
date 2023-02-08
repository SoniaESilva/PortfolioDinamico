import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, } from '@angular/forms';
import { Proye } from 'src/app/entidad/proye';
import { ProyeService } from 'src/app/servicios/proye.service';

@Component({
  selector: 'app-editar-proyectos',
  templateUrl: './editar-proyectos.component.html',
  styleUrls: ['./editar-proyectos.component.css']
})
export class EditarProyectosComponent implements OnInit {
  form : FormGroup;
 proyectosList : Proye [] =[];
 

  constructor(private formBuilder : FormBuilder, private sProyecto : ProyeService) { 
      //creamos el grupo de controles para el formulario
      this.form = this.formBuilder.group({
        id:[''],
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

    //limpiar
    limpiar() : void{
      this.form.reset();
      alert("se limpio correctamente");
    }
    //lista de proyecto
    traerProyecto(): void {
      this.sProyecto.lista().subscribe(data =>{this.proyectosList=data});
     }
      //traer por id
      cargarDetalle(id: number) {
        this.sProyecto.getById(id).subscribe(
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
       // editar PROYECTO
    onUpdate(): void {
      this.sProyecto.edit(this.form.value).subscribe(data => {
     alert("Proyecto modificado");
     this.traerProyecto();
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
        this.sProyecto.delete(id).subscribe(
          db => {
              alert("se pudo eliminar satisfactoriamente")
              this.traerProyecto();
              },
            err => {
            alert("No se pudo eliminar")
            })
          }

}
