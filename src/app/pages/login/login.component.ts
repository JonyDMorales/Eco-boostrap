import { Component, OnInit } from '@angular/core';
import {UserModel} from '../../models/user.model';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

import {BackendService} from '../../services/backend.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: UserModel;

  constructor(private router: Router, private consultasService: BackendService) {
    this.user = new UserModel();
  }

  ngOnInit() {
  }

  onSubmit(formLogin: NgForm) {
    if (formLogin.controls.email.invalid) {
      Swal.fire({
        icon: 'error',
        title: 'Email',
        text: 'Formato de email incorrecto'
      });
    }
    if (formLogin.controls.password.invalid) {
      Swal.fire({
        icon: 'error',
        title: 'Contraseña',
        text: 'la contraseña debe contener por lo menos 8 caracteres'
      });
    }
    if (formLogin.valid) {
      this.consultasService.login(this.user.email, this.user.password).subscribe(
        (res) =>  {

          const admin = localStorage.getItem('ADMIN');
          if (admin === '1') {
            this.router.navigate(['/home-admin']);
          } else {
            this.router.navigate(['/home-user']);
          }

          },
      (error) =>  {}
        );
    }
  }

}
