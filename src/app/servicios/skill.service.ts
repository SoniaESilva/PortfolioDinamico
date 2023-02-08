import { HttpClient } from '@angular/common/http';
import { identifierName } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from '../entidad/skill';


@Injectable({
  providedIn: 'root'
})
export class SkillService {
  url = 'http://localhost:8080/skill/';


  constructor(private httpClient:HttpClient) { }

   // trae la lista de skills del backend
   public lista(): Observable<Skill[]>{
    return this.httpClient.get<Skill[]>(this.url + 'lista');
  }
   //ver skill por id 
   public getById(id:number): Observable<Skill>{
    return this.httpClient.get<Skill>(this.url + `ver/${id}`);
  }
   //crear un skill 
  public create (skill : Skill): Observable<any>{
    return this.httpClient.post<any>(this.url + 'crear', skill);
  }
  //borrar un skill
  public delete(id : number): Observable<any>{
    return this.httpClient.delete<any>(this.url + `borrar/${id}`);
  }
  //modificar un skill
  public edit(skill : Skill) : Observable<any>{
    return this.httpClient.put<any>(this.url + 'editar', skill);
  }
}
