import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../Enviroments/env';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  // Puerto 3000 (ajustar)
  // private apiUrl = 'http://localhost:3000/api/productos';
  
  private apiUrl = `${environment.apiUrl}/productos`; 

  constructor(private http: HttpClient) { }

  obtenerProductos(): Observable<any> {
    //
    const token = localStorage.getItem('token');

    //
    const headers = new HttpHeaders({
      'x-access-token': token ? token : ''
    });

    //
    return this.http.get<any>(this.apiUrl, { headers });
  }
}