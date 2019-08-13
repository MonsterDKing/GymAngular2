import { Injectable } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from 'src/app/config/config';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { SubirArchivoService } from '../subirArchivo/subir-archivo.service';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  usuario: Usuario;
  token: string;

  constructor(public http: HttpClient, public router: Router, public subirArchivo: SubirArchivoService) {
    this.cargarStorage();
  }

  estaLogueado() {
    return (this.token.length > 5) ? true : false;
  }

  logout() {
    this.usuario = null;
    this.token = '';
    localStorage.removeItem('usuario');
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  cargarStorage() {
    if (localStorage.getItem('token')) {
      this.token = localStorage.getItem('token');
      this.usuario = JSON.parse(localStorage.getItem('usuario'));
    } else {
      this.token = '';
      this.usuario = null;
    }
  }

  crearUsuario(usuario: Usuario) {
    const url = URL_SERVICIOS + '/usuario/registro';
    return this.http.post(url, usuario);
  }


  guardarStorage(id: string, token: string, usuario: Usuario) {
    localStorage.setItem('id', id),
    localStorage.setItem('token', token),
    localStorage.setItem('usuario', JSON.stringify(usuario))
    this.usuario = usuario;
    this.token = token;
  }

  loginUsuario(usuario: Usuario, recordar: boolean = false) {

    if (recordar) {
      localStorage.setItem('email', usuario.email);
    } else {
      localStorage.removeItem('email');
    }

    const url = URL_SERVICIOS + '/usuario/login';
    return this.http.post(url, usuario).pipe(
      map((resp: any) => {
        this.guardarStorage(resp.id, resp.token, resp.usuario);
        return true;
      })
    );
  }


  actualizarUsuario(usuario: Usuario) {
    const url = URL_SERVICIOS + '/usuario/actualizar';
    return this.http.put(url, usuario).pipe(
      map((resp: any) => {
        this.guardarStorage(resp.usuario.id, resp.token, resp.usuario)
        return { ok: true }
      })
    )
  }

  cambiarImagen(archivo: File, id: string) {
    this.subirArchivo.subirArchivo(archivo, 'usuario', id).then((resp: any) => {
      this.usuario.img = resp.usuario.img;
      Swal.fire({
        title: 'Actualizado',
        text: 'Se a actualizado la imagen correctmanete el usuario',
        type: 'success'
      })
      this.guardarStorage(resp.usuario.id, this.token, resp.usuario);
    }).catch(resp => {
      console.log(resp);
    });
  }
}
