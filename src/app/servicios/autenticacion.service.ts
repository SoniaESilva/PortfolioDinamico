import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
 
  url='https://argprog-backend-6m1c.onrender.com/persona/login';
  currentUserSubject: BehaviorSubject<any>;
  
  constructor(private http:HttpClient) {
   this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser') || '{}'));
  }

  IniciarSesion(credenciales: any):Observable<any> {
    var httpOptions ={headers:new HttpHeaders({
        'Content-Type': 'application/json'
      })} 
  return this.http.post(this.url, credenciales, httpOptions).pipe(map(data=>{
    sessionStorage.setItem('currentUser', JSON.stringify(data));
    this.currentUserSubject.next(data);
   return data;
    }))
  }
  get UsuarioAutenticado (){
    return this.currentUserSubject.value;
  }
  
 cerrarSesion(): void {
  window.sessionStorage.clear();
  //sessionStorage.removeItem('currentUser');
 }
}
