import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario.model';
import { UsuarioService } from '../../services/service.index';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styles: []
})
export class ProfileComponent implements OnInit {

  usuario: Usuario;
  imagenSubir: File;
  imagenTemp;

  constructor(public usuarioService: UsuarioService) {
    this.usuario = this.usuarioService.usuario;
  }

  ngOnInit() {
  }

  actualizar(formulario: NgForm) {
    if (formulario.invalid) {
      return;
    }
    this.usuario.nombre = formulario.value.nombre;
    this.usuario.email = formulario.value.email;
    console.log(this.usuario);
    this.usuarioService.actualizarUsuario(this.usuario).subscribe((resp: any) => {
      if (resp.ok) {
        Swal.fire({
          title: 'Actualizado',
          text: 'Se a actualizado correctmanete el usuario',
          type: 'success'
        })
      }
    })
  }

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

    this.imagenSubir = archivo;
    let reader = new FileReader();
    let urlImagenTemp = reader.readAsDataURL(archivo);
    reader.onloadend = () => this.imagenTemp = reader.result;
  }

  cambiarImagen() {
    this.usuarioService.cambiarImagen(this.imagenSubir, String(this.usuario.id))
  }
}
