import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Figurine } from '../models/figurine.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private url = 'products.json';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Figurine[]> {
    return this.http.get<Figurine[]>(this.url);
  }

  getProductById(id: number): Observable<Figurine | undefined> {
    return this.http.get<Figurine[]>(this.url).pipe(
      map(products => products.find(p => p.id === id))
    );
  }
}
