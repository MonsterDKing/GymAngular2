import { Pipe, PipeTransform } from '@angular/core';
import { URL_SERVICIOS } from '../config/config';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(img: string, tipo: string = 'usuario'): any {
    let url = URL_SERVICIOS + '/img/';
    if (!img) {
      return url + '/usuarios/xxxx';
    }
    switch (tipo) {
      case 'usuario':
        url = url + 'usuario/' + img;
        break;
      case 'cliente':
          url =  url + 'cliente/' + img;
        break;
      case 'producto':
          url =  url + 'producto/' + img;
        break;
    }
    return url;
  }

}
