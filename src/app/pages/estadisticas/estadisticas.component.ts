import { Component, OnInit } from '@angular/core';
import { EstadisticasService } from 'src/app/services/service.index';

@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.css']
})
export class EstadisticasComponent implements OnInit {

  ingresadoshoy = 0;
  ingresadosmes = 0;
  nuevoshoy = 0;
  nuevosmes = 0;


  graficos: any = {
    'grafico1': {
    'labels': ['Total de ingresados hoy'],
    'data': [this.ingresadoshoy],
    'type': 'doughnut',
    'leyenda': 'Clientes ingresados Hoy'
  },
  'grafico2': {
    'labels': ['Clientes Nuevos'],
    'data': [this.nuevoshoy],
    'type': 'doughnut',
    'leyenda': 'Clientes'
  },
  'grafico3': {
    'labels': ['Clientes ingresados este mes'],
    'data': [this.ingresadosmes],
    'type': 'doughnut',
    'leyenda': 'Clientes'
  },
  'grafico4': {
    'labels': ['Clientes Nuevos este mes'],
    'data': [this.nuevosmes],
    'type': 'doughnut',
    'leyenda': 'Clientes'
  },}

  constructor(private estadisticasService: EstadisticasService) { }



  ngOnInit() {
    this.estadisticasService.registradosHoy().subscribe((resp: any) => {
      this.ingresadoshoy = Number(resp.clientes.length);
      console.log(resp);
    });
    this.estadisticasService.clientesNuevosMes().subscribe((resp: any) => {
      this.ingresadosmes = Number(resp.clientes.length);

    });
    this.estadisticasService.clientesNuevosHoy().subscribe((resp: any) => {
      this.nuevoshoy = Number(resp.clientes.length);

    });
    this.estadisticasService.registradosMes().subscribe((resp: any) => {
      this.nuevosmes = Number(resp.clientes.length);
      this.graficos = {
        'grafico1': {
          'labels': ['Total de ingresados hoy '],
          'data': [this.ingresadoshoy],
          'type': 'doughnut',
          'leyenda': 'Registrador Hoy'
        },
        'grafico2': {
          'labels': ['Clientes Nuevos Hoy'],
          'data': [this.nuevoshoy],
          'type': 'doughnut',
          'leyenda': 'Clientes'
        },
        'grafico3': {
          'labels': ['Clientes ingresados este mes'],
          'data': [this.ingresadosmes],
          'type': 'doughnut',
          'leyenda': 'Clientes'
        },
        'grafico4': {
          'labels': ['Clientes Nuevos este mes'],
          'data': [this.nuevosmes],
          'type': 'doughnut',
          'leyenda': 'Clientes'
        },
      }
    });

  }




}
