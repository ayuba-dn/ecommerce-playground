import { HttpClient } from '@angular/common/http';
import { Component, DoCheck, OnInit } from '@angular/core';
import {
  Product,
  ProductDetailsComponent,
} from '../product-detials/product-details.component';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { ProductService } from '../product.service';

@Component({
  selector: 'product-recommendations',
  standalone: true,
  imports: [ProductDetailsComponent, CommonModule],
  templateUrl: './product-recommendations.component.html',
  styleUrl: './product-recommendations.component.scss',
})
export class ProductRecommendationsComponent implements OnInit, DoCheck {
  products$: Observable<any> = new Observable();
  products: Product[] = [];
  showComments = false;

  constructor(
    private httpService: HttpClient,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    // this.httpService
    //   .get('https://reqres.in/api/products')
    //   .subscribe((response: any) => {
    //     this.products = response.data;
    //   });
    this.products$ = this.productService.getProducts();
  }

  ngDoCheck(): void {
    console.log('Change detection triggered in RecommendationComponent!');
  }
}
