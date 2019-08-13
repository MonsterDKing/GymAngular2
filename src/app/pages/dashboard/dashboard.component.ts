import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../models/cliente.models';
import { ClienteService } from '../../services/service.index';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: []
})
export class DashboardComponent implements OnInit {

  clientes: Cliente[] = [];
  desde: number = 0;
  totalRegistro: number = 0;
  cargando: boolean = true;

  constructor(public clienteService: ClienteService) { }

  ngOnInit() {
    this.cargarClientes();
  }

  cargarClientes() {
    this.cargando = true;
    this.clienteService.cargarEntradasHoy().subscribe((resp: any) => {
      console.log(resp);
      this.totalRegistro = resp.clientes.length;
      this.clientes = resp.clientes;
      this.cargando = false;
    });
  }

  buscarCliente(termino: string) {
    this.cargando = true;
    this.clienteService.busquedaClientePorNombre(termino).subscribe((resp: any) => {
      this.clientes = resp.cliente;
      this.cargando = false;
    });
    if (termino.length === 0) {
      this.cargarClientes();
    }
  }

}
