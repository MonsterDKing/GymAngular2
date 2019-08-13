import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { promise } from 'protractor';
import { UsuarioService } from '../usuario/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardGuard implements CanActivate {

  path: ActivatedRouteSnapshot[]; route: ActivatedRouteSnapshot;

  constructor(public usuarioService: UsuarioService, public router:Router) { }

  canActivate() {
    if (this.usuarioService.estaLogueado()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }

}
