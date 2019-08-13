import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../../services/service.index';
import { NgForm } from '@angular/forms';
import { Cliente } from 'src/app/models/cliente.models';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registra-clientes',
  templateUrl: './registra-clientes.component.html',
  styleUrls: ['./registra-clientes.component.css']
})
export class RegistraClientesComponent implements OnInit {


  constructor(public clienteService: ClienteService,public router:Router) { }


  ngOnInit() {
  }

  insertarCliente(formulario: NgForm) {
    console.log(formulario);
    const cliente = new Cliente(formulario.value.nombre, formulario.value.genero, formulario.value.fecha)
    this.clienteService.insertarCliente(cliente).subscribe((resp: any) => {
      if (resp.ok) {
        Swal.fire({
          title: 'Registrado',
          text: `El cliente ${cliente.nombre} se a registrado correctamente su codigo es ${resp.cliente.codigo}`,
          confirmButtonText: 'Ok',
          type:'success'
        }).then( (resultado:any)=>{
          this.router.navigate(['/ticket']);
        });
      }
    });
  }


}
