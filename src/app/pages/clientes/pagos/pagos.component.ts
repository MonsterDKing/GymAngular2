import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../../services/service.index';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagos',
  templateUrl: './pagos.component.html',
  styleUrls: ['./pagos.component.css']
})
export class PagosComponent implements OnInit {

  pagos:any[] = [];
  busqueda:string;
  clientes:any[] = []
  constructor(private clienteService:ClienteService, private router:Router) {
    this.obtenerClientes();
  }

  ngOnInit() {
  }

  obtenerClientes(){
    this.clienteService.obtenerTodolosclientes().subscribe( (resp:any)=>{
      console.log(resp);
      this.clientes = resp.clientes
    })
  }

  informacion(usuario:any){
    console.log(usuario);
    this.router.navigate(['/pagos-informacion',usuario.Id])
  }



}
