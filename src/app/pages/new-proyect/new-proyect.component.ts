import { Component, OnInit } from '@angular/core';
import {ProyectModel} from '../../models/proyect.model';
import {Router} from '@angular/router';
import {BackendService} from '../../services/backend.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-new-proyect',
  templateUrl: './new-proyect.component.html',
  styleUrls: ['./new-proyect.component.scss']
})
export class NewProyectComponent implements OnInit {

  proyecto: ProyectModel;
  archivoSobreDrop = false;

  constructor(private router: Router, private backendService: BackendService) {
    this.proyecto = new ProyectModel();
  }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    if ( form.valid ) {
      this.backendService.saveProyect(this.proyecto).subscribe(res => {
        this.router.navigate(['/user']);
      });
    }
    console.log(this.proyecto);
  }

}
