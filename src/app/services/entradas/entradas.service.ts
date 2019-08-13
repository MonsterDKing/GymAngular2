import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from 'src/app/config/config';

@Injectable({
  providedIn: 'root'
})
export class EntradasService {

  constructor(private http: HttpClient) { }

  insertarCodigo(codigo: number) {
    const url = URL_SERVICIOS + '/entradas/';
    return this.http.post(url, {codigo});
  }
}
