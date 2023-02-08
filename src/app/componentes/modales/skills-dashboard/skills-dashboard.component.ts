import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, } from '@angular/forms';
import { Skill } from 'src/app/entidad/skill';
import { SkillService } from 'src/app/servicios/skill.service';

@Component({
  selector: 'app-skills-dashboard',
  templateUrl: './skills-dashboard.component.html',
  styleUrls: ['./skills-dashboard.component.css']
})
export class SkillsDashboardComponent implements OnInit {
  skillList: Skill [] = [];
  form : FormGroup;
  

  constructor(private formBuilder : FormBuilder, private sSkill : SkillService) {
     //creamos el grupo de controles para el formulario
     this.form = this.formBuilder.group({
      nombreHabilidad :['',[Validators.required]],
      porcentaje :['',[Validators.required]],
      personaId :[1],
   
    })
   }

  ngOnInit(): void {}
  get NombreHabilidad(){
    return this.form.get("nombreHabilidad");
    }
  get Porcentaje(){
    return this.form.get("porcentaje");
    }

    onCreate(): void {
      this.sSkill.create(this.form.value).subscribe(data => {
        alert("Habilidad añadida");
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
