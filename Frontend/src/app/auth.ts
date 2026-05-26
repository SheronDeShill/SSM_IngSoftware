import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../Enviroments/env';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private API_URL = `${environment.apiUrl}/auth`;

  constructor(private http: HttpClient) { }

  registrar(usuario: any): Observable<any> {
    return this.http.post(`${this.API_URL}/register`, usuario);
  }

  login(credenciales: any): Observable<any> {
    return this.http.post(`${this.API_URL}/login`, credenciales);
  }
}