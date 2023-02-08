import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, } from '@angular/forms';
import { Perso } from 'src/app/entidad/perso';
import { PersoService } from 'src/app/servicios/perso.service';
@Component({
  selector: 'app-datos-personales',
  templateUrl: './datos-personales.component.html',
  styleUrls: ['./datos-personales.component.css']
})
export class DatosPersonalesComponent implements OnInit {
  info:any;
  form: FormGroup;

  
  

  constructor(private formBuilder: FormBuilder, private sPersona : PersoService) { 
    this.form=this.formBuilder.group({
      id : [1],
      nombre:['',[Validators.required]],
      apellido:['',[Validators.required]],
      titulo:['',[Validators.required]],
      foto_perfil:['',[Validators.required]],
      banner:['',[Validators.required]],
      acerca_de:['',[Validators.required]],
      correo:['', [Validators.required, Validators.email] ],
      contrasenia:['',[Validators.required, Validators.minLength(8)]],
    })
  }

  ngOnInit(): void {
   this.traerPersona()//usando persoService
  }
  traerPersona(): void {
   this.sPersona.getById(1).subscribe(data => {
    this.info=data;
   });
   }
    get Nombre(){
       return this.form.get("nombre");
       }

    get Apellido(){
       return this.form.get("apellido");
       }

    get Titulo(){
       return this.form.get("titulo");
       }   
    get Foto_perfil(){
       return this.form.get("foto_perfil");
        } 
    get Banner(){
       return this.form.get("banner");
       }
    get Acerca_de(){
       return this.form.get("acerca_de");
    }  
    get Correo() {
      return this.form.get('correo')
    }
    
    get Contrasenia(){
      return this.form.get('contrasenia');
      }
    
    //traer datos de la persona por id
    cargarDetalle(id: number) {
      this.sPersona.getById(id).subscribe(
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
    //editar la persona 
  onUpdate(): void {
      this.sPersona.edit(this.form.value).subscribe(data => {
     alert("Datos personales modificado");
     this.traerPersona();
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
    //limpiar
    limpiar() : void{
       this.form.reset();
       alert("se limpio correctamente");
     }
 
  
}        


