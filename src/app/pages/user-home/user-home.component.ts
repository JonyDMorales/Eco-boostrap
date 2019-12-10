import { Component, OnInit } from '@angular/core';
import {ProyectModel} from '../../models/proyect.model';
import {Router} from '@angular/router';
import {BackendService} from '../../services/backend.service';
import {UserModel} from '../../models/user.model';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.scss']
})
export class UserHomeComponent implements OnInit {

  proyects: ProyectModel[];
  user: UserModel;

  constructor(private router: Router, private consultasService: BackendService) {
    this.proyects = new Array();
    this.user = new UserModel();
  }

  ngOnInit() {
    this.consultasService.getProyectos(localStorage.getItem('TOKEN_ID')).subscribe(res => {
      this.proyects = res;
    });
  }

  details(index) {
    localStorage.removeItem('ID_PROYECT');
    localStorage.setItem('ID_PROYECT', index);
    this.router.navigate(['/proyect-details']);
  }

}
