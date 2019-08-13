import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ClienteService } from '../../services/service.index';
declare function init_plugins();

@Component({
  selector: 'app-cliente-info',
  templateUrl: './cliente-info.component.html',
  styleUrls: ['./cliente-info.component.css']
})
export class ClienteInfoComponent implements OnInit {
  codigo:string;
  datosBasicos:any;
  informacion:any[] = [];

  constructor(public route:ActivatedRoute, public clienteService:ClienteService) {
    this.codigo = this.route.snapshot.paramMap.get('codigo');
   }

  ngOnInit() {
   init_plugins();
   this.obtenerDatos();
  }

  obtenerDatos(){
    this.clienteService.obtenerDatosDelClientePorCodigo(this.codigo).subscribe( (resp:any)=>{
      console.log(resp);
      this.informacion = resp.cliente;
      this.datosBasicos = this.informacion[0];
      console.log(this.informacion);
    })
  }

}
