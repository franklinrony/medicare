import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { BuscarComponent } from './medi-care/components/buscar/buscar.component';
import { ResultadosComponent } from './medi-care/components/resultados/resultados.component';
import { SharedModule } from './shared/shared.module';
import { FormsModule } from '@angular/forms';
import { MediCareComponent } from './medi-care/pages/medi-care/medi-care.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    BuscarComponent,
    ResultadosComponent,
    MediCareComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
