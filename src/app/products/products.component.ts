import { Component, DoCheck, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  Product,
  ProductDetailsComponent,
} from '../product-detials/product-details.component';
import { ProductRecommendationsComponent } from '../product-recommendations/product-recommendations.component';
import { API_URL, ProductService } from '../products-service.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    ProductDetailsComponent,
    ProductRecommendationsComponent,
    CommonModule,
  ],
  providers: [
    {
      provide: API_URL,
      useValue: 'https://reqres.in/api2/productsddd',
    },
    ProductService,
  ],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductComponent implements OnInit, DoCheck {
  products = this.productService.productSignal;
  cartItems: Product[] = [];
  constructor(private productService: ProductService) {}

  helloWorld() {
    console.log('Hello World!');
  }

  ngOnInit(): void {
    // this.products.set([
    //   {
    //     id: 1,
    //     name: 'iPhone 12',
    //     year: 2020,
    //     color: 'Blue',
    //   },
    //   {
    //     id: 2,
    //     name: 'Samsung Galaxy S21',
    //     year: 2021,
    //     color: 'Black',
    //   },
    // ]);
  }

  ngDoCheck(): void {
    console.log('Change detection triggered in ProductComponent!');
  }

  addProductToCart(product: Product): void {
    this.cartItems.push(product);
    console.log('Product added to cart!', product);
  }
}
