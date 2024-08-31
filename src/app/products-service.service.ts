import { Inject, Injectable, InjectionToken, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, timer } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { Product } from './core/models/product.model';

export const API_URL = new InjectionToken<string>('API_URL');

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  readonly productSignal = signal<Product[]>([]);
  readonly recommendationsSignal = signal<Product[]>([]);
  private mockData = {
    data: [
      {
        id: 3,
        name: 'Google Pixel 5',
        year: 2020,
        color: 'Black',
      },
      {
        id: 4,
        name: 'OnePlus 9',
        year: 2021,
        color: 'Blue',
      },
    ],
  };

  constructor(
    private http: HttpClient,
    @Inject(API_URL) private apiUrl: string
  ) {
    // Start the process of emitting data
    this.initializeDataStream();
    //console.log('API URL is: ', this.apiUrl);
  }

  private initializeDataStream() {
    // Emit real data first
    this.http
      .get<{
        data: Product[];
      }>(this.apiUrl)
      .pipe(
        tap((data) => {
          this.productSignal.set(data.data);
          this.recommendationsSignal.set(data.data);
        }),
        switchMap(() => {
          // After emitting real data, wait 5 seconds and then emit mocked data
          return timer(5000).pipe(switchMap(() => of(this.mockData)));
        })
      )
      .subscribe((data) => this.recommendationsSignal.set(data.data));
  }
}
