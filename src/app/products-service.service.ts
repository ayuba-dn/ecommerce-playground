import { Inject, Injectable, InjectionToken, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, Subject, timer } from 'rxjs';
import { shareReplay, switchMap, tap } from 'rxjs/operators';

export const API_URL = new InjectionToken<string>('API_URL');

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private productSubject = new Subject<any>();
  private productRecommendationSubject = new Subject<any>();

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
