import { Component, DoCheck, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements DoCheck, OnInit {
  title = 'movies-app';

  ngOnInit(): void {
    console.log('AppComponent initialized!');
  }

  ngDoCheck(): void {
    console.log('Change detection triggered in AppComponent!');
  }
}
