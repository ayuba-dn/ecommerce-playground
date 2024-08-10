import { Component, DoCheck, OnInit } from '@angular/core';
import { ProductRecommendationsComponent } from '../product-recommendations/product-recommendations.component';
import { ProductComponent } from '../products/products.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [ProductRecommendationsComponent, ProductComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent implements DoCheck, OnInit {
  constructor() {}

  ngOnInit(): void {
    console.log('LayoutComponent initialized!');
  }

  ngDoCheck(): void {
    console.log('Change detection triggered in LayoutComponent!');
  }
}
