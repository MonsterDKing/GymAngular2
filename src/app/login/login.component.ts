import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UsuarioService } from '../services/service.index';
import { Usuario } from '../models/usuario.model';

declare function init_plugins();

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  email: string;
  password: string;
  recuerdame: boolean = false;

  constructor(public router: Router, public usuarioService: UsuarioService) { }

  ngOnInit() {
    init_plugins();
    this.email = localStorage.getItem('email') || '';
    this.verificar();
  }

  ingresar(forma: NgForm) {
    if (forma.invalid) {
      return;
    }
    const usuario = new Usuario(null, forma.value.email, forma.value.password)
    this.usuarioService.loginUsuario(usuario, forma.value.recuerdame).subscribe((resp: any) => {
      this.router.navigate(['/dashboard']);
    });

  }

  verificar(){
    if(this.usuarioService.estaLogueado()){
      this.router.navigate(['/dashboard']);
    }
  }

}
