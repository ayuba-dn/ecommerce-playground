import { Component, DoCheck, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from '../product/product.component';
import { API_URL, ProductService } from '../products-service.service';
import { LoggingService } from '../core/services/logging.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'product-recommendations',
  standalone: true,
  imports: [ProductComponent, CommonModule],
  providers: [
    {
      provide: API_URL,
      useValue: 'https://reqres.in/api/products',
    },
    ProductService,
  ],
  templateUrl: './product-recommendations.component.html',
  styleUrl: './product-recommendations.component.scss',
})
export class ProductRecommendationsComponent implements DoCheck, OnInit {
  products$: Observable<any> = new Observable();
  loggingService = inject(LoggingService);

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.products$ = this.productService.getProductsRecommendations();
  }

  ngDoCheck(): void {
    this.loggingService.logWarning(
      'Change detection triggered in RecommendationComponent!'
    );
  }
}
