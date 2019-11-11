import { Component, OnInit } from '@angular/core';
import {UserModel} from '../../models/user.model';
import {NgForm} from '@angular/forms';
import Swal from "sweetalert2";
import {Router} from '@angular/router';
import {BackendService} from '../../services/backend.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {

  user: UserModel;
  constructor(private router: Router, private consultasService: BackendService) {
    this.user = new UserModel();
    this.user.pais = '';
  }

  ngOnInit() {
  }

  onSubmit(formLogin: NgForm) {
    if (formLogin.controls.nombre.invalid) {
      Swal.fire({
        icon: 'error',
        title: 'Nombre',
        text: 'El nombre no puede estar vacio'
      });
    }
    if (formLogin.controls.password.invalid) {
      Swal.fire({
        icon: 'error',
        title: 'Contraseña',
        text: 'la contraseña debe contener por lo menos 8 caracteres'
      });
    }
    if (formLogin.controls.sexo.invalid) {
      Swal.fire({
        icon: 'error',
        title: 'Sexo',
        text: 'Debes escoger un sexo'
      });
    }
    if (formLogin.controls.email.invalid) {
      Swal.fire({
        icon: 'error',
        title: 'Email',
        text: 'El formato de tu email es incorrecto'
      });
    }
    if (formLogin.controls.password.invalid) {
      Swal.fire({
        icon: 'error',
        title: 'Contraseña',
        text: 'La contraseña debe contener al menos ocho caracteres'
      });
    }
    if (formLogin.controls.fechaNacimiento.invalid) {
      Swal.fire({
        icon: 'error',
        title: 'Fecha de nacimiento',
        text: 'Introduce una fecha de nacimiento valida'
      });
    }
    if (formLogin.controls.pais.invalid) {
        Swal.fire({
          icon: 'error',
          title: 'País',
          text: 'Selecciona un país'
        });
    }
    if (formLogin.controls.profesion.invalid) {
      Swal.fire({
        icon: 'error',
        title: 'Profesión',
        text: 'Debes escribir tu profesión'
      });
    }
    if (formLogin.controls.direccion.invalid) {
      Swal.fire({
        icon: 'error',
        title: 'Dirección',
        text: 'Escribe tu dirección'
      });
    }
    if (formLogin.valid) {
      this.user.perfil = ['ROLE_INVERSOR', 'ROLE_USER'];
      this.user.activo = 1;
      this.consultasService.saveUser(this.user).subscribe((res) => {
        console.log(res);
        if (res) {
          this.router.navigate(['/home']);
        } else {
          this.user = new UserModel();
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Por el momento fuera de servicio, intentalo más tarde.'
          });
        }
      }, (error) => {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Por el momento fuera de servicio, intentalo más tarde.'
        });
      });
    }
  }

}
