import { HttpClient } from '@angular/common/http';
import { identifierName } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Expe } from '../entidad/expe';

@Injectable({
  providedIn: 'root'
})
export class ExpService {
 url = 'https://argprog-backend-6m1c.onrender.com/experiencia/';
  constructor(private httpClient:HttpClient) { }
    // trae la lista de experiencia del backend
    public lista(): Observable<Expe[]>{
      return this.httpClient.get<Expe[]>(this.url + 'lista');
    }
     //ver experiencia por id 
  public getById(id:number): Observable<Expe>{
    return this.httpClient.get<Expe>(this.url + `ver/${id}`);
  }
     //crear una experiencia 
    public create (experiencia : Expe): Observable<any>{
      return this.httpClient.post<any>(this.url + 'crear', experiencia);
    }
    //borrar una experiencia
    public delete(id : number): Observable<any>{
      return this.httpClient.delete<any>(this.url + `borrar/${id}`);
    }
    //modificar una experiencia
    public edit(experiencia : Expe) : Observable<any>{
      return this.httpClient.put<any>(this.url + 'editar', experiencia);
    }
  }

  

