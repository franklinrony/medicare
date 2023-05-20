import { Component } from '@angular/core';
import { Medico } from '../../interfaces/interfaces';
import { MedicareService } from '../../services/medicare.service';

@Component({
  selector: 'app-medi-care',
  templateUrl: './medi-care.component.html',
  styleUrls: ['./medi-care.component.css']
})
export class MediCareComponent {
  constructor(private mediCareService: MedicareService) { }
  medicos: Medico[]=[];
  filtro: string="";
  buscar( filtro: string ): Medico[]{
    this.filtro=filtro;
    this.mediCareService.buscarMedico(this.filtro.trim().toLowerCase())
    .subscribe(
    (medicos)=>{
    this.medicos=medicos;
    }
    );
    console.log(this.medicos);
    return this.medicos;
    }
    sugerencias( filtro: string ){
    }
    ngOnInit(): void {
    this.mediCareService.buscarMedico("").subscribe(
    (med)=>{
    this.medicos=med;
    }
    );
  }
}
