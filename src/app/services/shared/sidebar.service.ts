import { Injectable } from '@angular/core';

@Injectable()
export class SidebarService {

  menu: any = [
    {
      titulo: 'Administracion',
      icono: 'mdi mdi-gauge',
      submenu: [
        { titulo: 'Inicio', url: '/dashboard' },
        { titulo: 'Estadistica', url: '/estadistica' },
        { titulo: 'Clientes', url: '/lista-cliente' },
        { titulo : 'Registrar Cliente', url: '/registrar-clientes' },
        { titulo : 'Clientes Vencidos', url: '/vencido-cliente' },
        { titulo : 'Registro de Pagos', url: '/pagos-cliente' },
        // { titulo: 'Promesas', url: '/promesas' },

      ]
    },
    {
      titulo: 'Inventario',
      icono: 'mdi mdi-account',
      submenu: [
        { titulo: 'Crear Producto', url: '#' },
        { titulo: 'Lista de productos', url: '#' },
        { titulo: 'Caja', url: '#' },
        //   { titulo : 'ProgressBar', url: '/progress' },
        //   { titulo: 'Gráficas', url: '/graficas1' },
      //   { titulo: 'Promesas', url: '/promesas' },
      //   { titulo: 'RXJS', url: '/rxjs' }
       ]
    }
  ];

  constructor() { }

}
