import { Component, OnInit } from '@angular/core';
import { SkillService } from 'src/app/servicios/skill.service';
import { Skill } from 'src/app/entidad/skill';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  //Inicializar variables de instancia para almacenar los datos
  title:string = 'Hard Skills & Soft Skills';
 
  skillList: Skill[] =[];

  // Inyectar el servicio para tener acceso en la clase a los métodos
  constructor( private sKill : SkillService) { }

  ngOnInit(): void {
    this.traerSkill();//usando eduService
 }
 //para traer la lista de educacion desde eduService 
 traerSkill(): void {
  this.sKill.lista().subscribe(data =>{this.skillList=data});
 }
}
