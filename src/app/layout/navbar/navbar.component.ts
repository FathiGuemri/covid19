import { Component, OnInit, ViewChild } from '@angular/core';
import { CoronaService } from 'src/app/srevises/corona.service';


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

 
  constructor(private coronaSrervis : CoronaService, ) { }
  ngOnInit(): void {
 
  }
  
  
}
