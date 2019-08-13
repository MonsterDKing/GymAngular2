import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/config';
import { Cliente } from '../../models/cliente.models';
import { DatePipe } from '@angular/common';
import { map } from 'rxjs/operators';
import { SubirArchivoService } from '../subirArchivo/subir-archivo.service';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(public http: HttpClient, private datepipe: DatePipe,public subirArchivo: SubirArchivoService) { }

  cargarEntradasHoy() {
    const url = URL_SERVICIOS + '/entradas/dia';
    return this.http.get(url);
  }

  busquedaClientePorNombre(nombre: string) {
    const url = URL_SERVICIOS + `/busquedas/?nombre=${nombre}`;
    return this.http.get(url);
  }

  insertarCliente(cliente: Cliente) {
    const url = URL_SERVICIOS + '/clientes';
    return this.http.post(url, cliente);
  }

  obtenerClientePorid(id: number) {
    const url = URL_SERVICIOS + '/clientes/unico/' + id;
    return this.http.get(url).pipe(
      map((resp: any) => {
        resp.cliente.fechaIngreso = this.datepipe.transform(resp.cliente.fechaIngreso, 'yyy-MM-dd');
        return resp.cliente;
      })
    )
  }

  actualizarCliente(cliente:Cliente){
    const url = URL_SERVICIOS + '/clientes';
    return this.http.put(url,cliente);
  }

  obtenerTodolosclientes(){
    const url = URL_SERVICIOS + '/clientes';
    return this.http.get(url);
  }

  obtenerTodolosclienteslista(){
    const url = URL_SERVICIOS + '/clientes/lista';
    return this.http.get(url);
  }

  eliminarCliente(id:number){
    const url = URL_SERVICIOS + '/clientes/?id=' + id;
    return this.http.delete(url);
  }

  realizarPago(id:number){
    const url = URL_SERVICIOS + '/pagos/pago/'+id;
    return this.http.get(url);
  }

  obtenerDatosDelClientePorCodigo(codigo:string){
    const url = URL_SERVICIOS + '/clientes/codigo/'+codigo;
    console.log(url);
    return this.http.get(url);
  }

  cambiarImagen(archivo: File, id: string) {
    this.subirArchivo.subirArchivo(archivo, 'cliente', id).then((resp: any) => {
      console.log(resp);
    }).catch(resp => {
      console.log(resp);
    });
  }

  //obtener todo los clientes vencidos
   obtenerDatosDelClienteVencidos(){
    const url = URL_SERVICIOS + '/clientes/vencidos'
    return this.http.get(url);
   }
}
