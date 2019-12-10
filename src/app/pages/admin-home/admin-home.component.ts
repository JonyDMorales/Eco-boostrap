import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {BackendService} from '../../services/backend.service';
import {ProyectModel} from '../../models/proyect.model';
import {UserModel} from '../../models/user.model';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss']
})
export class AdminHomeComponent implements OnInit {

  proyects: ProyectModel[];
  users: UserModel[];

  constructor(private router: Router, private consultasService: BackendService) {
    this.proyects = new Array();
    this.users = new Array();
  }

  ngOnInit() {
    this.consultasService.getAllProyectosAdmin().subscribe((res: Array<ProyectModel>) => {
      console.log(res);
      this.proyects = res;
    });
    this.consultasService.getAllPersonas().subscribe( (res: Array<UserModel>) => {
      console.log(res);
      this.users = res;
    });
  }

}
