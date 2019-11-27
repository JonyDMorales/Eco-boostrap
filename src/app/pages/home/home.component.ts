import { Component, OnInit } from '@angular/core';
import {BackendService} from '../../services/backend.service';
import {ProyectModel} from '../../models/proyect.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  proyects: ProyectModel[];

  constructor(private router: Router, private consultasService: BackendService) {
    this.proyects = new Array();
  }

  ngOnInit() {
    this.consultasService.getAllProyectos().subscribe(
      (res) =>  {
        if ( res.length > 6) {
          for ( let i = 0; i <  6 ; i++ ) {
          this.proyects[i] = res[i];
        }
        } else {
          this.proyects = res;
        }
      },
      (error) =>  { }
    );
  }

  details(index) {
    localStorage.removeItem('ID_PROYECT');
    localStorage.setItem('ID_PROYECT', index);
    this.router.navigate(['/proyect-details']);
  }

}
