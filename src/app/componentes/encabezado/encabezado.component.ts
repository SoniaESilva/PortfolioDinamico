import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';//Importamos el servicio


@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {
  datos:any;


  // Inyectar el servicio para tener acceso en la clase a los métodos
  constructor(private portfolioservicio: PortfolioService) { }

  ngOnInit(): void {
   //Esto es almacenar enla variable de instancia los datos recuperado por el servicio
   this.portfolioservicio.getDatos().subscribe(portfolio=>{
   //definir informacion a mostrar
      this.datos=portfolio;
    });
  }
}
