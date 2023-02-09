import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AutenticacionService } from 'src/app/servicios/autenticacion.service';

@Component({
  selector: 'app-modal-logout',
  templateUrl: './modal-logout.component.html',
  styleUrls: ['./modal-logout.component.css']
})
export class ModalLogoutComponent implements OnInit {

  constructor(private autenticacionService:AutenticacionService, private rutas:Router) { }

  ngOnInit(): void {}
  
   onLogOut(): void{
  this.autenticacionService.cerrarSesion();
    this.rutas.navigate(['/index']);
   }
}
