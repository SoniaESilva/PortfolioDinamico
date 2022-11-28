import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../../servicios/portfolio.service';//Importamos el servicio

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
title:string="Experiencia Laboral";
experiencias:any;


   // Inyectar el servicio para tener acceso en la clase a los métodos
  constructor(private portfolioservice: PortfolioService) { }

  ngOnInit(): void {
    //Esto es almacenar enla variable de instancia los datos recuperado por el servicio
    this.portfolioservice.getDatos().subscribe(portfolio=>{
      //definir informacion a mostrar
      this.experiencias=portfolio.experiencia;
      });
  }

}
