import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { AccoutSettingsComponent } from './accout-settings/accout-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { LoginGuardGuard } from '../services/service.index';
import { FacturaClienteComponent } from './factura-cliente/factura-cliente.component';
import { EstadisticasComponent } from './estadisticas/estadisticas.component';
import { RegistraClientesComponent } from './clientes/registra-clientes/registra-clientes.component';
import { ModificarComponent } from './clientes/modificar/modificar.component';
import { ProfileComponent } from './profile/profile.component';
import { ListaComponent } from './clientes/lista/lista.component';
import { VencidosComponent } from '../pages/clientes/vencidos/vencidos.component';
import { PagosComponent } from './clientes/pagos/pagos.component';
import { PagosInformacionComponent } from './clientes/pagos-informacion/pagos-informacion.component';



const pagesRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        canActivate: [LoginGuardGuard],
        children: [
            { path: 'dashboard', component: DashboardComponent, data: { titulo: 'Dashboard' } },
            { path: 'account-settings', component: AccoutSettingsComponent, data: { titulo: 'Ajustes del Tema' } },
            { path: 'registrar-clientes', component: RegistraClientesComponent, data: { titulo: 'Registrar Clientes' } },
            { path: 'ticket', component: FacturaClienteComponent, data: { titulo: 'Factura o Ticket' } },
            { path: 'estadistica', component: EstadisticasComponent, data: { titulo: 'Estadisticas' } },
            //cliente
            { path: 'modificar-cliente/:id', component: ModificarComponent, data: { titulo: 'Modificar Cliente' } },
            { path: 'lista-cliente', component: ListaComponent, data: { titulo: 'Lista de clientes' } },
            { path: 'vencido-cliente', component: VencidosComponent, data: { titulo: 'Lista de clientes vencidos' } },
            { path: 'pagos-cliente', component: PagosComponent, data: { titulo: 'Lista de pagos' } },
            { path: 'pagos-informacion/:id', component: PagosInformacionComponent, data: { titulo: 'Informacion de pagos' } },
            //configruacion de usuario
            { path: 'perfil', component: ProfileComponent, data: { titulo: 'Perfil de usuario' } },


            //apartir de aqui
            { path: 'progress', component: ProgressComponent, data: { titulo: 'Progress' } },
            { path: 'graficas1', component: Graficas1Component, data: { titulo: 'Gráficas' } },
            { path: 'promesas', component: PromesasComponent, data: { titulo: 'Promesas' } },
            { path: 'rxjs', component: RxjsComponent, data: { titulo: 'RxJs' } },
            { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
        ]
    }
];


export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );
