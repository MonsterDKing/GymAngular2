import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import {
  SettingsService,
  SidebarService,
  SharedService,
  UsuarioService,
  LoginGuardGuard,
  ClienteService,
  EntradasService,
  SubirArchivoService
 } from './service.index';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    SettingsService,
    SidebarService,
    SharedService,
    UsuarioService,
    ClienteService,
    LoginGuardGuard,
    EntradasService,
    SubirArchivoService,
    DatePipe
  ],
  declarations: []
})
export class ServiceModule { }
