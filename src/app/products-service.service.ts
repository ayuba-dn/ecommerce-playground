import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Product } from './product-detials/product-details.component';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  readonly productSignal = signal<Product[]>([]);
  readonly recommendationsSignal = signal<Product[]>([]);
  constructor(private httpService: HttpClient) {
    this.getProducts();
  }

  getProducts() {
    this.httpService
      .get('https://reqres.in/api/products')
      .subscribe((response: any) => {
        this.productSignal.set([...response.data, ...response.data]);
        this.recommendationsSignal.set(response.data);
      });
  }
}
