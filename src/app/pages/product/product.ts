import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductsService } from '../../services/products';
import { Figurine } from '../../models/figurine.model';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product',
  imports: [RouterLink, AsyncPipe],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class ProductDetail {

  product$: Observable<Figurine | undefined>;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.product$ = this.productsService.getProductById(id);
  }
}
