import { Component, OnInit } from '@angular/core';
import { Proye } from 'src/app/entidad/proye';
import { ProyeService } from 'src/app/servicios/proye.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  title:string='Proyectos';
  proyectosList: Proye [] = [];


  // Inyectar el servicio para tener acceso en la clase a los métodos
  constructor(private sProyecto : ProyeService) { }
  
  ngOnInit(): void {
    this.traerProyecto();//usando proyeService

  }
 //para traer la lista de educacion desde proyeService 
 traerProyecto(): void {
  this.sProyecto.lista().subscribe(data =>{this.proyectosList=data});
 }
}
