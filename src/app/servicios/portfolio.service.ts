import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';//Esto es para suscribirse y que reciba respuesta de forma asíncronica
import { HttpClient }from '@angular/common/http';//Esto es para hacer peticiones

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  //traigo los datos de backend
url:string="http://localhost:8080/persona/lista"


  constructor(private http:HttpClient){}
//Método observable que devuelve los datos

  getDatos():Observable<any> {
 //Se llama al JSON con su path -ruta-
    //return this.http.get('../assets/data/data.json');
    return this.http.get<any>(this.url);
  }
      
    
 
}


  

