import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  Product,
  ProductDetailsComponent,
} from '../product-detials/product-details.component';
import { ProductRecommendationsComponent } from '../product-recommendations/product-recommendations.component';

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
  products: Product[] = [];
  showComments = false;

  constructor(private httpService: HttpClient) {}

  ngOnInit(): void {
    this.httpService
      .get('https://reqres.in/api/products')
      .subscribe((response: any) => {
        this.products = [...response.data, ...response.data];
      });
  }
}
