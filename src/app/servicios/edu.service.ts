import { HttpClient } from '@angular/common/http';
import { identifierName } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Edu } from '../entidad/edu';

@Injectable({
  providedIn: 'root'
})
export class EduService {
  url = 'https://argprog-backend-6m1c.onrender.com/educacion/';

  constructor(private httpClient:HttpClient) { }
   // trae la lista de educación del backend
   public lista(): Observable<Edu[]>{
    return this.httpClient.get<Edu[]>(this.url + 'lista');
  }
   //ver educación por id 
   public getById(id:number): Observable<Edu>{
    return this.httpClient.get<Edu>(this.url + `ver/${id}`);
  }
   //crear una educación 
  public create (educacion : Edu): Observable<any>{
    return this.httpClient.post<any>(this.url + 'crear', educacion);
  }
  //borrar una educación
  public delete(id : number): Observable<any>{
    return this.httpClient.delete<any>(this.url + `borrar/${id}`);
  }
  //modificar una educación
  public edit(educacion : Edu) : Observable<any>{
    return this.httpClient.put<any>(this.url + 'editar', educacion);
  }
}
