import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { UsuarioService } from '../services/service.index';
import { Usuario } from '../models/usuario.model';
import { Router } from '@angular/router';
declare function init_plugins();


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./login.component.css']
})
export class RegisterComponent implements OnInit {

  forma: FormGroup;

  constructor(public usuarioService: UsuarioService, public router: Router) { }

  sonIguales(campo1: string, campo2: string) {
    return (group: FormGroup) => {

      let pass1 = group.controls[campo1].value;
      let pass2 = group.controls[campo2].value;

      if (pass1 === pass2) {
        return null;
      }
      return {
        sonIguales: true
      }
    }
  }



  ngOnInit() {
    init_plugins();
    this.forma = new FormGroup({
      nombre: new FormControl(null, [Validators.required]),
      correo: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.min(6)]),
      password2: new FormControl(null, [Validators.required]),
      condiciones: new FormControl(false)
    }, { validators: this.sonIguales('password', 'password2') });

    this.forma.setValue({
      nombre: 'test',
      correo: 'test@test.com',
      password: '123456',
      password2: '123456',
      condiciones: false
    });
    this.verificar();
  }

  verificar() {
    if (this.usuarioService.estaLogueado()) {
      this.router.navigate(['/dashboard']);
    }
  }


  registrar() {
    console.log(this.forma.valid);

    if (this.forma.invalid) {
      return;
    }
    if (!this.forma.value.condiciones) {
      console.log('Debe de aceptar las condiciones');

      Swal.fire({
        title: 'Importante!',
        text: 'Debes aceptar los terminos y condiciones',
        type: 'error',
        confirmButtonText: 'Ok'
      });
      return;
    }
    console.log(this.forma.value.nombre);
    const usuario = new Usuario(this.forma.value.nombre, this.forma.value.correo, this.forma.value.password);
    this.usuarioService.crearUsuario(usuario).subscribe((res: any) => {
      if (res.ok) {
        Swal.fire({
          title: 'Registro',
          text: 'Se ha registrado correctamente',
          type: 'success',
          confirmButtonText: 'Ok',
        });
        this.router.navigate(['/login']);
      } else {
        Swal.fire({
          title: 'Registro',
          text: 'Algo a salido mal',
          type: 'warning',
          confirmButtonText: 'Ok',
        });
      }
    });
  }

}
