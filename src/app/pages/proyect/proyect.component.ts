import { Component, OnInit } from '@angular/core';
import {ProyectModel} from '../../models/proyect.model';
import {BackendService} from '../../services/backend.service';

@Component({
  selector: 'app-proyect',
  templateUrl: './proyect.component.html',
  styleUrls: ['./proyect.component.scss']
})
export class ProyectComponent implements OnInit {

  proyect: ProyectModel;
  bandera: boolean;

  constructor(private consultasService: BackendService) {
    this.bandera = false;
    const id = localStorage.getItem('ID_PROYECT');
    if ( id != null ) {
      this.consultasService.getProyect(id).subscribe(proyect => {
        this.proyect = proyect;
        this.bandera = true;
      });
    } else {

    }
  }

  ngOnInit() { }

}
