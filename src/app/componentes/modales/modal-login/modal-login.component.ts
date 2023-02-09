import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';


@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.css']
})
export class ModalLoginComponent implements OnInit {

  form: FormGroup;
 
  constructor( private formBuilder: FormBuilder,
     private autenticacionService:AutenticacionService, 
     private ruta:Router){ 
    this.form = this.formBuilder.group(
      {
      correo:['', [Validators.required, Validators.email] ],
      contrasenia:['',[Validators.required, Validators.minLength(8)]],
     
   })
}

   ngOnInit(): void {}

get Correo() {
  return this.form.get('correo')
}

get Contrasenia(){
  return this.form.get('contrasenia');
  }

  onEnviar(event: Event)
  {
    event.preventDefault;
      this.autenticacionService.IniciarSesion(this.form.value).subscribe(data=>{
        this.ruta.navigate(['/dashboard']);
       })
  }
}
