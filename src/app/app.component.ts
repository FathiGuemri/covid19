import { Component } from '@angular/core';
import { PwaService } from './sevises/pwa.service';
import { NgUpdatesService } from './services/ng-updates.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'covid';
  constructor (private pwa: NgUpdatesService) {
  }
}
