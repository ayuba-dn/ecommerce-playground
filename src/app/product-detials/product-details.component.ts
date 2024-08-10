import { HttpClient } from '@angular/common/http';
import {
  Component,
  DoCheck,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ProductQuantityComponent } from '../product-quantity/product-quantity.component';

export interface Product {
  id: number;
  name: string;
  year: number;
  color: string;
}

@Component({
  selector: 'app-product',
  standalone: true,
  providers: [DialogService],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss',
})
export class ProductDetailsComponent implements DoCheck {
  @Output() addToCart = new EventEmitter<Product>();
  @Input() product!: Product;

  ref!: DynamicDialogRef;

  constructor(private dialogService: DialogService) {}

  ngDoCheck(): void {
    console.log('Change detection triggered in DetailsComponent!');
  }

  // addToCart(): void {
  //   console.log('Product added to cart!');
  //   this.showQuantityDialog();
  // }
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
