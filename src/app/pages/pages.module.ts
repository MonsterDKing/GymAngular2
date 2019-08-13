
import { NgModule } from '@angular/core';
import { PAGES_ROUTES } from './pages.routes';

import { SharedModule } from '../shared/shared.module';

import { FormsModule } from '@angular/forms';


// ng2-charts
import { ChartsModule } from 'ng2-charts';

import { PagesComponent } from './pages.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';

import {NgxPrintModule} from 'ngx-print';
//pipes
import { PipesModule } from '../pipes/pipes.module';
// temporal
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';
import { AccoutSettingsComponent } from './accout-settings/accout-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { CommonModule } from '@angular/common';
import { RegistraClientesComponent } from './clientes/registra-clientes/registra-clientes.component';
import { FacturaClienteComponent } from './factura-cliente/factura-cliente.component';
import { EstadisticasComponent } from './estadisticas/estadisticas.component';
import { ModificarComponent } from './clientes/modificar/modificar.component';
import { ActualizarComponent } from './clientes/actualizar/actualizar.component';
import { EliminarComponent } from './clientes/eliminar/eliminar.component';
import { ListaComponent } from './clientes/lista/lista.component';
import { ProfileComponent } from './profile/profile.component';
import { VencidosComponent } from './clientes/vencidos/vencidos.component';
import { PagosComponent } from './clientes/pagos/pagos.component';
import { PagosInformacionComponent } from './clientes/pagos-informacion/pagos-informacion.component';

@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        IncrementadorComponent,
        GraficoDonaComponent,
        AccoutSettingsComponent,
        PromesasComponent,
        RxjsComponent,
        RegistraClientesComponent,
        FacturaClienteComponent,
        EstadisticasComponent,
        ModificarComponent,
        ActualizarComponent,
        EliminarComponent,
        ListaComponent,
        ProfileComponent,
        VencidosComponent,
        PagosComponent,
        PagosInformacionComponent
    ],
    exports: [
        DashboardComponent,
        ProgressComponent,
        Graficas1Component
    ],
    imports: [
        CommonModule,
        NgxPrintModule,
        SharedModule,
        PAGES_ROUTES,
        FormsModule,
        ChartsModule,
        PipesModule
    ]
})
export class PagesModule { }
