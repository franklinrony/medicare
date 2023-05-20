import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuscarComponent } from './components/buscar/buscar.component';
import { ResultadosComponent } from './components/resultados/resultados.component';
import { MediCareComponent } from './pages/medi-care/medi-care.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    BuscarComponent,
    ResultadosComponent,
    MediCareComponent,
  ],
  exports:[
    BuscarComponent,
    ResultadosComponent,
    MediCareComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
  ]
})
export class MediCareModule { }
