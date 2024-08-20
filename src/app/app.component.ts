import { Component, DoCheck, inject, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { LoggingService } from './core/services/logging.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  providers: [LoggingService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements DoCheck, OnInit {
  title = 'ecommerce-playground';
  loggingService = inject(LoggingService);

  ngOnInit(): void {
    this.loggingService.logSuccess('AppComponent initialized!');
  }

  ngDoCheck(): void {
    this.loggingService.logWarning(
      'Change detection triggered in AppComponent!'
    );
  }
}
