import { Component, DoCheck, inject } from '@angular/core';
import { ProductRecommendationsComponent } from '../../pattern/product-recommendations/product-recommendations.component';
import { FeaturedProductComponent } from '../../pattern/featured-products/featured-products.component';
import { LoggingService } from '../../core/services/logging.service';

@Component({
  selector: 'app-store-front',
  standalone: true,
  imports: [ProductRecommendationsComponent, FeaturedProductComponent],
  templateUrl: './store-front.component.html',
  styleUrl: './store-front.component.scss',
})
export class StoreFrontComponent implements DoCheck {
  loggingService = inject(LoggingService);

  ngDoCheck(): void {
    this.loggingService.logWarning(
      'Change detection triggered in StoreFrontComponent!'
    );
  }
}
