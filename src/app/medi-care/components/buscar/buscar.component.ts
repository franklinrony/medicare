import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MedicareService } from '../../services/medicare.service';
import { Medico } from '../../interfaces/interfaces';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
filtro: string="";
buscar(){
this.onEnter.emit( this.filtro );
}
constructor( private mediCareService: MedicareService) { }
ngOnInit(): void {
}

}
