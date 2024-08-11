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
  showComments = false;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.products$ = this.productService.getProducts();
  }

  ngDoCheck(): void {
    console.log('Change detection triggered in ProductComponent!');
  }
}
