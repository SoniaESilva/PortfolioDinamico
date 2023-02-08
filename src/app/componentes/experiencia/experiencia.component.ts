import { Component, OnInit } from '@angular/core';

import { ExpService } from 'src/app/servicios/exp.service';
import { Expe } from 'src/app/entidad/expe';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
title:string="Experiencia Laboral";
experienciaList : Expe [] =[];
// Inyectar el servicio para tener acceso en la clase a los métodos
  constructor(private sExperiencia : ExpService) { }

  ngOnInit(): void {
    
      this.traerExperiencia();//usando expeService
      
  }
//para traer la lista de experiencia desde expeService 
   traerExperiencia(): void {
    this.sExperiencia.lista().subscribe(data =>{this.experienciaList=data});
   }
   
}
