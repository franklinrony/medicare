import { Component, Input, OnInit } from '@angular/core';
import { Medico } from '../../interfaces/interfaces';
import { MedicareService } from '../../services/medicare.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnInit {
 @Input() medicos: Medico[]=[];
  
  constructor(private medicareService:MedicareService){}

  ngOnInit(): void {
    this.medicareService.buscarMedico("").subscribe(
      (med)=>{
      this.medicos=med;
      }
      );
      }

}
