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
    this.addToMobile()
  }
  
  addToMobile() {
    let deferredPrompt;
      const addBtn: any = document.querySelector('.add-button');
      addBtn.style.display = 'none';
      window.addEventListener('beforeinstallprompt', (e) => {
        // Prevent Chrome 67 and earlier from automatically showing the prompt
        e.preventDefault();
        // Stash the event so it can be triggered later.
        deferredPrompt = e;
        // Update UI to notify the user they can add to home screen
        addBtn.style.display = 'block';
      
        addBtn.addEventListener('click', (e) => {
          // hide our user interface that shows our A2HS button
          addBtn.style.display = 'none';
          // Show the prompt
          deferredPrompt.prompt();
          // Wait for the user to respond to the prompt
          deferredPrompt.userChoice.then((choiceResult) => {
              if (choiceResult.outcome === 'accepted') {
                console.log('User accepted the A2HS prompt');
              } else {
                console.log('User dismissed the A2HS prompt');
              }
              deferredPrompt = null;
            });
        });
      });
  }
  
}
