import { Component, OnInit } from '@angular/core';
import { Perso } from 'src/app/entidad/perso';
import { PersoService } from 'src/app/servicios/perso.service';


@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {
  info:any;


  // Inyectar el servicio para tener acceso en la clase a los métodos
  constructor(private sPersona : PersoService) { }

  ngOnInit(): void {
    this.traerPersona()//usando expeService
  }
  traerPersona(): void {
    this.sPersona.getById(1).subscribe(data => {
     this.info=data;
    });
    }
}
