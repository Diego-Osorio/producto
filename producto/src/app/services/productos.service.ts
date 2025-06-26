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

  // ✅ Usamos variable de entorno con fallback local
  private baseUrl = (import.meta as any).env?.VITE_API_URL || 'http://127.0.0.1:5000';

  constructor(private http: HttpClient) { }

  buscarProductos(query: string): Observable<Producto[]> {
    return this.http.get<Producto[]>(`/api/buscar?q=${encodeURIComponent(query)}`);
  }
  
}
