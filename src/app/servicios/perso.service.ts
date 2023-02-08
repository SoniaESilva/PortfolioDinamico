import { HttpClient } from '@angular/common/http';
import { identifierName } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Perso } from '../entidad/perso';

@Injectable({
  providedIn: 'root'
})
export class PersoService {
  url = 'http://localhost:8080/persona/';
  constructor(private httpClient:HttpClient) { }

   // trae la lista de Persona del backend
   public lista(): Observable<Perso[]>{
    return this.httpClient.get<Perso[]>(this.url + 'lista');
  }
  //ver persona por id 
  public getById(id:number): Observable<Perso>{
    return this.httpClient.get<Perso>(this.url + `ver/${id}`);
  }
   //crear una persona 
  public create (persona : Perso): Observable<any>{
    return this.httpClient.post<any>(this.url + 'crear', persona);
  }
  //borrar una persona
  public delete(id : number): Observable<any>{
    return this.httpClient.delete<any>(this.url + `borrar/${id}`);
  }
  //modificar una persona
  public edit(persona: Perso) : Observable<any>{
    return this.httpClient.put<any>(this.url + 'editar', persona);
  }
}
