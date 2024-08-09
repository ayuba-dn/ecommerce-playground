import { HttpClient } from '@angular/common/http';
import { Component, DoCheck, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  Product,
  ProductDetailsComponent,
} from '../product-detials/product-details.component';
import { ProductRecommendationsComponent } from '../product-recommendations/product-recommendations.component';
import { set } from 'lodash';

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
export class ProductComponent implements OnInit, DoCheck {
  products: Product[] = [];
  showComments = false;

  constructor(private httpService: HttpClient) {}

  ngOnInit(): void {
    this.httpService
      .get('https://reqres.in/api/products')
      .subscribe((response: any) => {
        this.products = [...response.data, ...response.data];
      });

    setTimeout(() => {
      this.products = [{ id: 1, name: 'Product 1', year: 2021, color: 'red' }];
    }, 5000);
  }

  ngDoCheck(): void {
    console.log('Change detection triggered in ProductComponent!');
  }
}
