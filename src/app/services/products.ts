import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private url = 'assets/products.json';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url);
  }

  getProductById(id: number): Observable<Product | undefined> {
    return new Observable(observer => {
      this.http.get<Product[]>(this.url).subscribe(products => {
        const product = products.find(p => p.id === id);
        observer.next(product);
        observer.complete();
      });
    });
  }
}
