import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private apiURL = environment.apiUrl + '/producto'
  constructor(private http: HttpClient) { }
  getProductos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiURL);

  }
  crearProducto(producto: any): Observable<any> {
    producto.id = 0;
    console.log(producto);
    return this.http.post<any>(this.apiURL, producto, {
      headers: {
        'Content-Type': 'application/json' }
    });
  }
}
