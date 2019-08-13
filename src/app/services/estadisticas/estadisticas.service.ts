import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from 'src/app/config/config';

@Injectable({
  providedIn: 'root'
})
export class EstadisticasService {

  constructor(public http: HttpClient) { }

  registradosHoy() {
    const url = URL_SERVICIOS + '/estadisticas/entradasDia';
    return this.http.get(url, {});

  }
  clientesNuevosHoy() {
    const url = URL_SERVICIOS + '/estadisticas/clientesNHoy';
    return this.http.get(url);
  }
  registradosMes() {
    const url = URL_SERVICIOS + '/estadisticas/entradasMes';
    return this.http.get(url);

  }
  clientesNuevosMes() {
    const url = URL_SERVICIOS + '/estadisticas/clientesNMes';
    return this.http.get(url);

  }
}
