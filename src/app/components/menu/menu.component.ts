import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  mensaje="Bienvenido a Angular !!!";
  constructor(){ 
  }
  ngOnInit(): void{}
}
