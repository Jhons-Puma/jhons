import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { ListarClientesComponent } from './listar-clientes/listar-clientes.component';
import { RegistrarClientesComponent } from './registrar-clientes/registrar-clientes.component';
import { ActualizarClientesComponent } from './actualizar-clientes/actualizar-clientes.component';

@NgModule({
  declarations: [
    AppComponent,
    PaginaPrincipalComponent,
    ListarClientesComponent,
    RegistrarClientesComponent,
    ActualizarClientesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
