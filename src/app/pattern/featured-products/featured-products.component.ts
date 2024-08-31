import { Component, DoCheck, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRecommendationsComponent } from '../product-recommendations/product-recommendations.component';
import { API_URL, ProductService } from '../../products-service.service';
import { ProductComponent } from '../../ui/product/product.component';
import { LoggingService } from '../../core/services/logging.service';
import { Product } from '../../core/models/product.model';

@Component({
  selector: 'app-featured-products',
  standalone: true,
  imports: [ProductComponent, ProductRecommendationsComponent, CommonModule],
  providers: [
    {
      provide: API_URL,
      useValue: 'https://reqres.in/api/products',
    },
    ProductService,
  ],
  templateUrl: './featured-products.component.html',
  styleUrls: ['./featured-products.component.scss'],
})
export class FeaturedProductComponent implements DoCheck {
  products = this.productService.productSignal;
  cartItems: Product[] = [];

  loggingService = inject(LoggingService);

  constructor(private productService: ProductService) {}

  ngDoCheck(): void {
    this.loggingService.logWarning(
      'Change detection triggered in FeaturedProductComponent!'
    );
  }

  addProductToCart(product: Product): void {
    this.cartItems.push(product);
    console.log('Product added to cart!', product);
  }
}
