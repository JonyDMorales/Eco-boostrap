import { Component, OnInit } from '@angular/core';
import {BackendService} from '../../services/backend.service';
import {ProyectModel} from '../../models/proyect.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.scss']
})
export class ProyectsComponent implements OnInit {

  proyects: ProyectModel[];

  constructor(private router: Router, private consultasService: BackendService) {
    this.consultasService.getAllProyectos().subscribe(
      (res) =>  {
          this.proyects = res;
      },
      (error) =>  { }
    );
  }

  ngOnInit() {
  }

  details(index) {
    localStorage.removeItem('ID_PROYECT');
    localStorage.setItem('ID_PROYECT', index);
    this.router.navigate(['/proyect-details']);
  }

}
