

import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { ShortsComponent } from './shorts/shorts.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title = 'MyAngular';

  constructor(
    
    ) { }

  openShort() {

  }
}