import { Injectable } from '@angular/core';
import { Medico } from '../interfaces/interfaces';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MedicareService {
private apiUrl='http://localhost:8080/medico';

buscarMedico(filtro: string): Observable<Medico[]>{
  return  this.http.get<Medico[]>(`${this.apiUrl}/${filtro}`);
}
constructor(private http:HttpClient){}
}
