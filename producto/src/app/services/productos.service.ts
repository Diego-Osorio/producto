import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Producto {
  nombre: string;
  precio: string;
  link: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private baseUrl = 'http://127.0.0.1:5000'; // URL de tu backend Flask

  constructor(private http: HttpClient) { }

  buscarProductos(query: string): Observable<Producto[]> {
    return this.http.get<Producto[]>(`${this.baseUrl}/buscar?q=${encodeURIComponent(query)}`);
  }
}
