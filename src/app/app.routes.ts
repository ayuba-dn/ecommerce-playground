import { Routes } from '@angular/router';
import { ProductComponent } from './products/products.component';
import { StoreFrontComponent } from './store-front/store-front.component';

export const routes: Routes = [
  {
    path: '',
    component: StoreFrontComponent,
  },
];
