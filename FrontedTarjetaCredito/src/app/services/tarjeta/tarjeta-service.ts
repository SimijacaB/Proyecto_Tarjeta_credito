import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TarjetaService {
  private url: string;

  //Uso de los services: Llamados a la API atraves de los endpoints, comuniicación entre componentes y reutilizacion de codigo entre componentes
  constructor(private http: HttpClient) {
    this.url = `${environment.apiUrl}tarjeta`;
  }

  getListTarjeta(): Observable<any> {
    return this.http.get(this.url);
  }

  deleteTarjeta(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`);
  }

  saveTarjeta(tarjeta: any): Observable<any> {
    return this.http.post(this.url, tarjeta);
  }

  updateTarjeta(id: number, tarjeta: any): Observable<any> {
    return this.http.put(`${this.url}/${id}`, tarjeta);
  }


}


