import { Component, OnInit } from '@angular/core';
import {BackendService} from '../../services/backend.service';
import {ProyectModel} from '../../models/proyect.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  proyects: ProyectModel[];

  constructor(private consultasService: BackendService) {
    this.proyects = new Array();
  }

  ngOnInit() {
    this.consultasService.getAllProyectos().subscribe(
      (res) =>  {
        this.proyects = res;
        console.log(this.proyects);
      },
      (error) =>  { }
    );
  }

}
