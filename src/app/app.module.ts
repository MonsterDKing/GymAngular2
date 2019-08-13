import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

// Rutas
import { APP_ROUTES } from './app.routes';

// Modulos
import { PagesModule } from './pages/pages.module';

// temporal
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Servicios
import { ServiceModule } from './services/service.module';


//locale...
import localeEsMx from '@angular/common/locales/es-MX';

// Componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
import { EntradasComponent } from './externas/entradas/entradas.component';
import { ClienteInfoComponent } from './externas/cliente-info/cliente-info.component';
import { registerLocaleData } from '@angular/common';
import { PipesModule } from './pipes/pipes.module';



registerLocaleData(localeEsMx, 'es-Mx');


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    EntradasComponent,
    ClienteInfoComponent,
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    PagesModule,
    FormsModule,
    ReactiveFormsModule,
    ServiceModule,
    PipesModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'es-Mx' } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
