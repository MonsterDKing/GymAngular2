import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/service.index';
import { Usuario } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {

  correo:string;
  nombre:string;
  usuario:Usuario;

  constructor(public usuarioService: UsuarioService) {
  }

  ngOnInit() {
    this.usuario = this.usuarioService.usuario;
    this.correo = this.usuario.email;
    this.nombre = this.usuario.nombre;
  }


}
