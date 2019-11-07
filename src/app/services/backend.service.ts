import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import {ProyectModel} from '../models/proyect.model';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
//private url = 'http://ec2-54-158-130-38.compute-1.amazonaws.com:8080/';
  private url = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }

  public login(email, password) {
    const uri = this.url + 'login';
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })};
    return this.http.post(uri, { email, password }, httpOptions ).pipe(
      map(res => {
        if ( res['token'] != null ) {
          localStorage.setItem('USER_TOKEN', res['token']);
          localStorage.setItem('NOMBRE',res['nombre'] );
          localStorage.setItem('EMAIL',res['email'] );
          console.log(localStorage.getItem('NOMBRE'));
        }
      }));
  }

  public logout() {
    localStorage.clear();
  }

  public getProyectos(id: string) {
    const uri = this.url + 'get/proyectos';
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })};
    return this.http.post(uri, { id }, httpOptions ).pipe(
      map(res => {
        console.log(res);
        return res;
      }));
  }

  public saveProyect(proyect: ProyectModel) {
    const uri = this.url + 'save/proyecto';
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })};
    console.log(proyect);
    return this.http.post(uri, {
      propietario: { nombre: localStorage.getItem('NOMBRE'), id: localStorage.getItem('USER_TOKEN') },
      nombre: proyect.nombre,
      descripcion: proyect.descripcion,
      categoria: proyect.categoria,
      valorProyecto: proyect.valorProyecto,
      startDate: proyect.startDate,
      finishDate: proyect.finishDate,
      pais: proyect.pais
    }, httpOptions ).pipe(
      map(res => {
        console.log(res);
      }));
  }
}
