import { Component, OnInit } from '@angular/core';
import {ProyectModel} from '../../models/proyect.model';
import {Router} from '@angular/router';
import {BackendService} from '../../services/backend.service';
import {NgForm} from '@angular/forms';
import Swal from "sweetalert2";

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
    this.proyecto.categoria = '';
    this.proyecto.pais = '';
  }

  ngOnInit() {
  }

  onSubmit(formProyect: NgForm) {
    if (formProyect.controls.nombre.invalid) {
      Swal.fire({
        icon: 'error',
        title: 'Nombre',
        text: 'El proyecto debe tener nombre'
      });
    }
    if (formProyect.controls.categoria.invalid) {
      Swal.fire({
        icon: 'error',
        title: 'Categoría',
        text: 'Selecciona una categoría'
      });
    }
    if (formProyect.controls.descripcion.invalid) {
      Swal.fire({
        icon: 'error',
        title: 'Descripción',
        text: 'La descripción no puede estar vacía'
      });
    }
    if (formProyect.controls.valorProyecto.invalid) {
      Swal.fire({
        icon: 'error',
        title: 'Valor Estimado',
        text: 'El valor estimado no puede estar vacio o ser negativo.'
      });
    }
    if (formProyect.controls.pais.invalid) {
      Swal.fire({
        icon: 'error',
        title: 'País',
        text: 'por favor selecciona un país.'
      });
    }
    if (formProyect.controls.pais.invalid) {
      Swal.fire({
        icon: 'error',
        title: 'Fecha de inicio',
        text: 'Debes seleccionar una fecha de inicio.'
      });
    }
    if (formProyect.controls.finishDate.invalid) {
      Swal.fire({
        icon: 'error',
        title: 'Fecha de término',
        text: 'Debes seleccionar una fecha de término valida.'
      });
    }
    if ( formProyect.valid ) {
      this.backendService.saveProyect(this.proyecto).subscribe(res => {
        if ( res ) {
          this.router.navigate(['/home-user']);
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Por favor intentalo nuevamente más tarde.'
          });
        }
      }, error => {
        localStorage.clear();
        Swal.fire({
          icon: 'info',
          title: 'Sesión expirada',
          text: 'Por favor inicia sesión nuevamente.'
        });
        this.router.navigate(['/login']);
      });
    }
  }

}
