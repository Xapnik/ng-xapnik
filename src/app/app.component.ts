import { Component } from '@angular/core';
declare var OAuth: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {
    OAuth.initialize('X2__GNhzcc6fng7PNt9t7euQwpQ');
  }
}
