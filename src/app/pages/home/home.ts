import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { ProductsService } from '../../services/products';
import { Figurine } from '../../models/figurine.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  imports: [RouterLink, AsyncPipe],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  products$: Observable<Figurine[]>;

  constructor(private productsService: ProductsService) {
    this.products$ = this.productsService.getProducts();
  }
}
