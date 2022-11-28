import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../../servicios/portfolio.service';//Importamos el servicio

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  //Inicializar variables de instancia para almacenar los datos
  title:string = 'Hard Skills & Soft Skills';
  skills:any;

  // Inyectar el servicio para tener acceso en la clase a los métodos
  constructor(private portfolioservice: PortfolioService) { }

  ngOnInit(): void {
    //Esto es almacenar enla variable de instancia los datos recuperado por el servicio
    this.portfolioservice.getDatos().subscribe(portfolio=>{
      //definir informacion a mostrar
        this.skills=portfolio.skills;
      });
 }
}
