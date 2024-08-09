import { HttpClient } from '@angular/common/http';
import { Component, DoCheck, Input, OnInit } from '@angular/core';

export interface Product {
  id: number;
  name: string;
  year: number;
  color: string;
}

@Component({
  selector: 'app-product',
  standalone: true,
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss',
})
export class ProductDetailsComponent implements DoCheck {
  @Input() product!: Product;

  ngDoCheck(): void {
    console.log('Change detection triggered in DetailsComponent!');
  }

  addToCart(): void {
    console.log('Product added to cart!');
  }
}
