import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, Subject, timer } from 'rxjs';
import { switchMap, tap, shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = 'https://reqres.in/api/products';
  private mockData = {
    data: [
      { id: 1, name: 'Mock Product 1' },
      { id: 2, name: 'Mock Product 2' },
    ],
  };

  private productSubject = new Subject<any>();
  private productRecommendationSubject = new Subject<any>();

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
          this.productSubject.next(data);
          this.productRecommendationSubject.next(data);
        }),
        switchMap(() => {
          // After emitting real data, wait 5 seconds and then emit mocked data
          return timer(5000).pipe(switchMap(() => of(this.mockData)));
        })
      )
      .subscribe((data) => this.productRecommendationSubject.next(data));
  }

  getProducts(): Observable<any> {
    return this.productSubject.asObservable().pipe(
      shareReplay(1) // Ensure the observable is shared and replayed to new subscribers
    );
  }

  getProductsRecommendations(): Observable<any> {
    return this.productRecommendationSubject.asObservable().pipe(
      shareReplay(1) // Ensure the observable is shared and replayed to new subscribers
    );
  }
}
