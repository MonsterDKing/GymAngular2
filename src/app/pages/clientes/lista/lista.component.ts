import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../../services/service.index';
import { Cliente } from '../../../models/cliente.models';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  busqueda: string;
  clientes: any[] = []

  constructor(public clienteService: ClienteService, public router: Router) { }

  ngOnInit() {
    this.cargar();
  }

  cargar() {
    this.clienteService.obtenerTodolosclienteslista().subscribe((resp: any) => {
      this.clientes = resp.clientes;
    });
  }


  modificar(c: any) {
    this.router.navigate(['/modificar-cliente', c.id]);
  }

  pagar(c: any) {
    Swal.fire({
      title: 'Estas Seguro',
      text: `Estas seguro de realizar el pago a el usuario ${c.nombre}`,
      cancelButtonText: 'No',
      confirmButtonText: 'Si',
      type:'question',
      showCancelButton:true
    }).then(resp => {
      if (resp.value) {
        this.clienteService.realizarPago(c.id).subscribe((resp: any) => {
          this.cargar();
          if (resp.ok) {
            Swal.fire({
              title: 'Exito',
              text: 'El pago se ha realizado correctamente',
              type: 'success'
            });
          }
        })
      }
    }).catch(err => {
      console.log(err);
    });
  }

  eliminar(cliente: Cliente) {
    Swal.fire({
      title: 'Peligro',
      text: 'Seguro deseas eliminar este elemeto ?',
      showConfirmButton: true,
      showCancelButton: true,
      type: 'warning'
    }).then((resp) => {
      if (resp) {
        this.clienteService.eliminarCliente(cliente.Id).subscribe((resp) => {
          console.log(resp);
          this.cargar();
        });
      }
    }).catch((resp) => {
      console.log(resp);
    })
  }
}
