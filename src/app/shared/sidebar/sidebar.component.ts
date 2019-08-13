import { Component, OnInit } from '@angular/core';

import { SidebarService, UsuarioService } from '../../services/service.index';
import { Usuario } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit {

  correo = '';
  nombre = '';
  usuario:Usuario;
  constructor( public _sidebar: SidebarService, public usuarioService:UsuarioService ) { }

  ngOnInit() {
    this.usuario = this.usuarioService.usuario;
    this.correo = this.usuario.email;
    this.nombre = this.usuario.nombre;
  }

  obtenerDatos(){


  }

}
