import { Component } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-quantity',
  standalone: true,
  imports: [
    DialogModule,
    ButtonModule,
    InputTextModule,
    CommonModule,
    FormsModule,
  ],
  templateUrl: './product-quantity.component.html',
  styleUrl: './product-quantity.component.scss',
})
export class ProductQuantityComponent {
  visible: boolean = false;
  username: string = '';

  showDialog() {
    this.visible = true;
  }
}
