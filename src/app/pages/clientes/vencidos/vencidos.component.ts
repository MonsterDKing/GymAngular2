import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../../services/service.index';

@Component({
  selector: 'app-vencidos',
  templateUrl: './vencidos.component.html',
  styleUrls: ['./vencidos.component.css']
})
export class VencidosComponent implements OnInit {

  vencidos:any[] = [];

  constructor(private clienteService:ClienteService) {
    this.obtenerDatos();
   }

  ngOnInit() {
  }

  obtenerDatos(){
    this.clienteService.obtenerDatosDelClienteVencidos().subscribe( (resp:any)=>{
      this.vencidos = resp.clientes;
    })
  }

}
