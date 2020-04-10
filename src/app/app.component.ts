import { Component, OnInit } from '@angular/core';
import { PwaService } from './sevises/pwa.service';
import { NgUpdatesService } from './services/ng-updates.service';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'covid';
  constructor (private pwa: NgUpdatesService, private http: HttpClient) {
  }
  
  ngOnInit() {
  
    
  }
 
  
}
