import { HttpClient } from '@angular/common/http';
import { Component, OnInit, effect, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  Product,
  ProductDetailsComponent,
} from '../product-detials/product-details.component';
import { ProductRecommendationsComponent } from '../product-recommendations/product-recommendations.component';
import { ProductsService } from '../products-service.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    ProductDetailsComponent,
    ProductRecommendationsComponent,
    CommonModule,
  ],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductComponent implements OnInit {
  products = this.productService.productSignal;
  cartItems: Product[] = [];
  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.products.set([
        {
          id: 1,
          name: 'iPhone 12',
          year: 2020,
          color: 'Blue',
        },
        {
          id: 2,
          name: 'Samsung Galaxy S21',
          year: 2021,
          color: 'Black',
        },
      ]);
    }, 5000);
  }

  addProductToCart(product: Product): void {
    this.cartItems.push(product);
    console.log('Product added to cart!', product);
  }
}
