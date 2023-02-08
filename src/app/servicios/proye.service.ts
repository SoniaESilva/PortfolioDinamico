import { HttpClient } from '@angular/common/http';
import { identifierName } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proye } from '../entidad/proye';

@Injectable({
  providedIn: 'root'
})
export class ProyeService {
  url = 'http://localhost:8080/proyecto/';
  constructor(private httpClient:HttpClient) { }
  // trae la lista de proyectos del backend
  public lista(): Observable<Proye[]>{
    return this.httpClient.get<Proye[]>(this.url + 'lista');
  }
   //ver proyecto por id 
   public getById(id:number): Observable<Proye>{
    return this.httpClient.get<Proye>(this.url + `ver/${id}`);
  }
   //crear un proyecto
  public create (proyecto : Proye): Observable<any>{
    return this.httpClient.post<any>(this.url + 'crear', proyecto);
  }
  //borrar un proyecto
  public delete(id : number): Observable<any>{
    return this.httpClient.delete<any>(this.url + `borrar/${id}`);
  }
  //modificar un proyecto
  public edit( proyecto : Proye) : Observable<any>{
    return this.httpClient.put<any>(this.url + 'editar', proyecto);
  }
}
