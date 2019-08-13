import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages/pages.component';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { EntradasComponent } from './externas/entradas/entradas.component';
import { ClienteInfoComponent } from './externas/cliente-info/cliente-info.component';


const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'entrada', component: EntradasComponent },
    { path: 'cliente/:codigo', component: ClienteInfoComponent },
    { path: '**', component: NopagefoundComponent }
];


export const APP_ROUTES = RouterModule.forRoot( appRoutes, { useHash: true } );
