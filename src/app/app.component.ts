import { Component } from '@angular/core';
import { environment } from '../environments/environment';

declare var OAuth: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {
    OAuth.initialize(environment.oAuthKey);
  }
}
