import { Component, DoCheck, OnInit } from '@angular/core';
import { ProductRecommendationsComponent } from '../product-recommendations/product-recommendations.component';
import { ProductComponent } from '../products/products.component';

@Component({
  selector: 'app-store-front',
  standalone: true,
  imports: [ProductRecommendationsComponent, ProductComponent],
  templateUrl: './store-front.component.html',
  styleUrl: './store-front.component.scss',
})
export class StoreFrontComponent implements DoCheck {
  constructor() {}

  ngDoCheck(): void {
    console.log('Change detection triggered in StoreFrontComponent!');
  }
}
