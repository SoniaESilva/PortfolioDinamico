import { Component, OnInit } from '@angular/core';
import { EduService } from 'src/app/servicios/edu.service';
import { Edu } from 'src/app/entidad/edu';


@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  title:string="Educación";
  educacionList: Edu [] = [];
  

  // Inyectar el servicio para tener acceso en la clase a los métodos
  constructor(private sEducacion : EduService) {}

  ngOnInit(): void {
   this.traerEducacion();//usando eduService 
  }
  //para traer la lista de educacion desde eduService 
  traerEducacion(): void {
    this.sEducacion.lista().subscribe(data =>{this.educacionList=data});
   }
  
}
