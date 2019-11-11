import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import {ProyectModel} from '../models/proyect.model';
import Swal from 'sweetalert2';
import cifrar from 'jsrsasign';
import {UserModel} from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
//private url = 'http://ec2-54-158-130-38.compute-1.amazonaws.com:8080/';
  private url = 'http://localhost:8080/';
  private passwordKey = 'EcoPassword00000000000000000000000000000000000000000000000000000';

  constructor(private http: HttpClient) { }

  private encrypt(password) {
    return cifrar.jws.JWS.sign('HS256',  JSON.stringify({alg: 'HS256', typ: 'JWT'}), { password }, this.passwordKey);
  }

  public login(email, password) {
    const uri = this.url + 'login';
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })};

    password = this.encrypt(password);

    return this.http.post(uri, { email, password }, httpOptions ).pipe(
      map(res => {

        if (res != null) {
          if ( res['TOKEN'] != null ) {
            localStorage.setItem('TOKEN', res['TOKEN']);
            localStorage.setItem('TOKEN_ID', res['TOKEN_ID']);
            localStorage.setItem('NOMBRE',res['NOMBRE'] );
            localStorage.setItem('EMAIL',res['EMAIL'] );
            console.log(localStorage.getItem('NOMBRE'));
          } else {
            localStorage.clear();
            Swal.fire({
              icon: 'error',
              title: 'Datos incorrectos',
              text: 'Por favor verifica los datos e intenta nuevamente.'
            });
          }
        } else {
          localStorage.clear();
          Swal.fire({
            icon: 'error',
            title: 'Datos incorrectos',
            text: 'Por favor verifica los datos e intenta nuevamente.'
          });
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

  public saveUser(user: UserModel) {
    const uri = this.url + 'save/persona';
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })};
    user.password = this.encrypt(user.password);
    return this.http.post(uri, {
      nombre: user.nombre,
      email: user.email,
      foto: user.foto,
      perfil: user.perfil,
      password: user.password,
      direccion: user.direccion,
      profesion: user.prefesion,
      fechaNacimiento: user.fechaNacimiento,
      sexo: user.sexo,
      pais: user.pais,
      activo: user.activo
    }, httpOptions ).pipe(
      map(res => {
        if ( res['id'] != null ) {
          Swal.fire({
            icon: 'success',
            title: 'Exito',
            text: 'Ya puedes iniciar sesión.'
          });
          return true;
        }
        return false;
      }));
  }
}
