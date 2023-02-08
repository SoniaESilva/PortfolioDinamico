import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, } from '@angular/forms';
import { Skill } from 'src/app/entidad/skill';
import { SkillService } from 'src/app/servicios/skill.service';

@Component({
  selector: 'app-editar-skill',
  templateUrl: './editar-skill.component.html',
  styleUrls: ['./editar-skill.component.css']
})
export class EditarSkillComponent implements OnInit {
  skillList: Skill [] = [];
  form : FormGroup;
  
  constructor(private formBuilder : FormBuilder, private sSkill : SkillService) {
 //creamos el grupo de controles para el formulario
 this.form = this.formBuilder.group({
  id : [''],
  nombreHabilidad :['',[Validators.required]],
  porcentaje :['',[Validators.required]],
  personaId :[1],

})
   }

  ngOnInit(): void {
    this.traerSkill();//usando skillService
  }

  get NombreHabilidad(){
    return this.form.get("nombreHabilidad");
    }
  get Porcentaje(){
    return this.form.get("porcentaje");
    }
 //limpiar
 limpiar() : void{
  this.form.reset();
  alert("se limpio correctamente");
}

//lista de skill
traerSkill(): void {
  this.sSkill.lista().subscribe(data =>{this.skillList=data});
 }
 //traer por id
 cargarDetalle(id: number) {
  this.sSkill.getById(id).subscribe(
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
 // editar el skill
onUpdate(): void {
  this.sSkill.edit(this.form.value).subscribe(data => {
 alert("Habilidad modificada");
 this.traerSkill();
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

//borrar el skill
borrar(id: number) {
  this.sSkill.delete(id).subscribe(
    db => {
        alert("se pudo eliminar satisfactoriamente")
        this.traerSkill();
        },
      err => {
      alert("No se pudo eliminar")
      })
    }

}
