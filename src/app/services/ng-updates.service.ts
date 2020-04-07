import { Injectable, ApplicationRef } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { first } from 'rxjs/operators';
import { interval, concat } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NgUpdatesService {

  constructor(
    private swUpdate: SwUpdate,
  ) {
   
     }
   


  checkUpdate(): void {
    
    if (this.swUpdate.isEnabled) {

      this.swUpdate.available.subscribe(() => {

          if(confirm("يتوفر إصدار جديد. تحميل نسخة جديدة")) {

              window.location.reload();
          }
      });
  }    
  }
}
