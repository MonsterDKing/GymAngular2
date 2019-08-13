import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(items: any[], busqueda: string): any {

    if (!items) return [];

    if (!busqueda) return items;

    busqueda = busqueda.toLowerCase();
    return items.filter(it => {
      return it.nombre.toLowerCase().includes(busqueda);
    });
  }

}
