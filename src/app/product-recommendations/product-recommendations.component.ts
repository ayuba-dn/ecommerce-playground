import { HttpClient } from '@angular/common/http';
import { Component, DoCheck, OnInit } from '@angular/core';
import {
  Product,
  ProductDetailsComponent,
} from '../product-detials/product-details.component';
import { CommonModule } from '@angular/common';
import { ProductService } from '../products-service.service';

@Component({
  selector: 'product-recommendations',
  standalone: true,
  imports: [ProductDetailsComponent, CommonModule],
  templateUrl: './product-recommendations.component.html',
  styleUrl: './product-recommendations.component.scss',
})
export class ProductRecommendationsComponent implements OnInit, DoCheck {
  products = this.productService.recommendationsSignal;
  showComments = false;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {}

  ngDoCheck(): void {
    console.log('Change detection triggered in RecommendationComponent!');
  }
}
