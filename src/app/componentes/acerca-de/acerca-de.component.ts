import { Component, OnInit } from '@angular/core';
import {PortfolioService } from '../../servicios/portfolio.service';//Importamos el servicio
@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
 //Inicializar variables de instancia para almacenar los datos
   title:string='Acerca de mí';
   data:any;

 // Inyectar el servicio para tener acceso en la clase a los métodos
  constructor(private portfolioService: PortfolioService) { }
      
  ngOnInit(): void {
 //Esto es almacenar enla variable de instancia los datos recuperado por el servicio
    this.portfolioService.getDatos().subscribe(portfolio=>{
  //definir informacion a mostrar
    this.data=portfolio;
  });
  }
}
