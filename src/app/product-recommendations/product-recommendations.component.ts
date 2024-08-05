import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  Product,
  ProductDetailsComponent,
} from '../product-detials/product-details.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'product-recommendations',
  standalone: true,
  imports: [ProductDetailsComponent, CommonModule],
  templateUrl: './product-recommendations.component.html',
  styleUrl: './product-recommendations.component.scss',
})
export class ProductRecommendationsComponent implements OnInit {
  products: Product[] = [];
  showComments = false;

  constructor(private httpService: HttpClient) {}

  ngOnInit(): void {
    this.httpService
      .get('https://reqres.in/api/products')
      .subscribe((response: any) => {
        this.products = response.data;
      });
  }
}
