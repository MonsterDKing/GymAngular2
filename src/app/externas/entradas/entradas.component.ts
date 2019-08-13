import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { EntradasService } from '../../services/service.index';
import { Router } from '@angular/router';
declare function init_plugins();

@Component({
  selector: 'app-entradas',
  templateUrl: './entradas.component.html',
  styleUrls: ['./entradas.component.css']
})
export class EntradasComponent implements OnInit {

  termino: number;

  constructor(public entradaService: EntradasService, private router: Router) { }

  ngOnInit() {
    init_plugins();
  }

  ingresar(termino: string) {
    if (termino.length === 4) {
      this.entradaService.insertarCodigo(Number(termino)).subscribe((resp: any) => {
        if (!resp.ok) {
          return Swal.fire({
            title: 'Error',
            text: 'El codigo ingresado no existe',
            type: 'error',
            confirmButtonText: 'Ok'
          })
        }
        Swal.fire({
          title: 'Correcto',
          text: 'Registrado Correctamente',
          type: 'success',
          confirmButtonText: 'Ok'
        });
        this.router.navigate(['/cliente',termino])

      });
    } else {
      Swal.fire({
        title: 'Error',
        text: 'El codigo debe tener 4 digitos',
        type: 'error',
        confirmButtonText: 'Ok'
      })
    }
  }

}
