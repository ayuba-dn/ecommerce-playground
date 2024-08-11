import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, Subject, timer } from 'rxjs';
import { switchMap, tap, shareReplay } from 'rxjs/operators';
import { Product } from './product-detials/product-details.component';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  readonly productSignal = signal<any>([]);
  readonly recommendationsSignal = signal<any[]>([]);
  private apiUrl = 'https://reqres.in/api/products';
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

  private productSubject = new Subject<any>();

  constructor(private http: HttpClient) {
    // Start the process of emitting data
    this.initializeDataStream();
  }

  private initializeDataStream() {
    // Emit real data first
    this.http
      .get<any>(this.apiUrl)
      .pipe(
        tap((data) => {
          console.log('Fetched real data:', data);
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

  getProducts(): Observable<any> {
    return this.productSubject.asObservable().pipe(
      shareReplay(1) // Ensure the observable is shared and replayed to new subscribers
    );
  }
}
