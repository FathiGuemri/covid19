import { Component, OnInit, ViewChild } from '@angular/core';
import { CoronaService } from 'src/app/srevises/corona.service';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { PLATFORM_ID, Inject } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  Summary
  images = [
    'تجنب السفر',
    ' تجنب الأماكن المزدحمة',
'نظافة اليدين',
    'الحفاظ على مسافات مناسبة بين الناس',
    'عدم لمس العينين باليدين',
    'رعاية خاصة للمسنين',
    ' تغطية الفم والأنف',
    ' تجنب المصافحة والقبلات والأحضان',
    ]

 
  constructor(private coronaSrervis : CoronaService, @Inject(PLATFORM_ID) private platformId: Object ) { }
 
  // get id() {
  //     if (isPlatformBrowser(this.platformId)) {

  //         return window.localStorage.getItem('id');
  //     }

  //     else {
  //         return true
  //     }
  // }
  ngOnInit(): void {
    
  }
  
 
  reload() {
    if (isPlatformBrowser(this.platformId)) {

      location.reload()
    }
  }
}

