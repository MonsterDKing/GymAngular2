import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Cliente } from 'src/app/models/cliente.models';
import { ClienteService, UsuarioService } from '../../../services/service.index';
import Swal from 'sweetalert2';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent implements OnInit {

  cliente:Cliente = new Cliente(null,null,null);
  estado:boolean;
  idCliente;
  imagenSubir: File;

  constructor(public clienteService:ClienteService, public route:ActivatedRoute, public router:Router) {
    this.idCliente = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.obtenerDatos();
  }

  enviar(formulario: NgForm) {
    if(!this.estado){
      Swal.fire({
        title:'Error',
        text:'Es necesario ingresar un estado',
        type:'error'
      })
      return;
    }
    this.cliente.estatus = this.estado;
    this.clienteService.actualizarCliente(this.cliente).subscribe( (resp:any)=>{
     if(resp.ok){
       Swal.fire({
         title:'Exito',
         text:'Se ha modificado correctamente el usuario',
         type:'success'
       }).then( resp =>{
        this.cambiarImagen();
        this.router.navigate(['/lista-cliente'])
      } )
     }
    })
  }

  obtenerDatos(){
    this.clienteService.obtenerClientePorid(this.idCliente).subscribe( (resp:any)=>{
      this.cliente = resp;
    });
  }


  //carga de iamgen
  seleccionImagen(archivo: File) {
    if (!archivo) {
      this.imagenSubir = null;
      return;
    }

    if (archivo.type.indexOf('image') < 0) {
      Swal.fire({
        title: 'Solo imagenes',
        text: 'El archivo seleccionado no es una imagen',
        type: 'error'
      })
      this.imagenSubir = null;
      return;
    }
    //cargar imagen al formulari
    this.imagenSubir = archivo;
    // let reader = new FileReader();
    // let urlImagenTemp = reader.readAsDataURL(archivo);
    // reader.onloadend = () => this.imagenTemp = reader.result;
  }

  cambiarImagen() {
    console.log(this.idCliente);
    this.clienteService.cambiarImagen(this.imagenSubir, String(this.idCliente));
  }


}
