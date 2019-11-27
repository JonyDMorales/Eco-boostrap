import { Component, OnInit } from '@angular/core';
import {UserModel} from '../../models/user.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  user: UserModel;
  bandera = false;

  constructor() {
    this.user = new UserModel();
  }

  ngOnInit() {
    this.user.nombre = localStorage.getItem('NOMBRE');
    this.user.email = localStorage.getItem('EMAIL');
    this.bandera = false;
    if (this.user.nombre != null) {
      this.bandera = true;
    }
  }

  logout() {
    localStorage.clear();
    window.location.reload();
  }

}
