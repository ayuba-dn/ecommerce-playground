import { Routes } from '@angular/router';
import { ProductComponent } from './products/products.component';
import { LayoutComponent } from './layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
  },
];
