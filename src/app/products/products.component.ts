import { HttpClient } from '@angular/common/http';
import { Component, DoCheck, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  Product,
  ProductDetailsComponent,
} from '../product-detials/product-details.component';
import { ProductRecommendationsComponent } from '../product-recommendations/product-recommendations.component';
import { Observable } from 'rxjs';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductDetailsComponent, CommonModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductComponent implements OnInit, DoCheck {
  products$: Observable<any> = new Observable();
  products: Product[] = [];
  showComments = false;

  constructor(private httpService: HttpClient) {}

  ngOnInit(): void {
    this.httpService
      .get('https://reqres.in/api/products')
      .subscribe((response: any) => {
        this.products = [...response.data, ...response.data];
      });
    // setTimeout(() => {
    //   this.products = [{ id: 1, name: 'Product 1', year: 2021, color: 'red' }];
    // }, 5000);
    // Make the call to get products
    // this.products$ = this.productService.getProducts();
    // this.products$.subscribe((response: any) => {
    //   console.log('Products fetched:', response);
    // });
  }

  ngDoCheck(): void {
    console.log('Change detection triggered in ProductComponent!');
  }
}
