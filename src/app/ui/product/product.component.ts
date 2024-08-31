import {
  Component,
  DoCheck,
  EventEmitter,
  inject,
  Input,
  Output,
} from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ProductQuantityComponent } from '../product-quantity/product-quantity.component';
import { LoggingService } from '../../core/services/logging.service';
import { Product } from '../../core/models/product.model';

@Component({
  selector: 'app-product',
  standalone: true,
  providers: [DialogService],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent implements DoCheck {
  @Output() addToCart = new EventEmitter<Product>();
  @Input() product!: Product;
  loggingService = inject(LoggingService);
  ref!: DynamicDialogRef;

  constructor(private dialogService: DialogService) {}

  ngDoCheck(): void {
    this.loggingService.logWarning(
      'Change detection triggered in ProductComponent!'
    );
  }

  emitAddToCart(): void {
    console.log('event emitted');
    this.addToCart.emit(this.product);
  }

  showQuantityDialog() {
    this.ref = this.dialogService.open(ProductQuantityComponent, {
      header: 'Select a Product',
    });
  }
}
