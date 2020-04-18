import { Component, OnInit } from "@angular/core";
import { CoronaService } from "../srevises/corona.service";
import { CountryFlagService } from "../srevises/country-flag.service";
import { Observable, pipe } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { country } from "../srevises/ar.country";
import { map } from 'rxjs/operators';

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  dataMyCountry;
  slide;
  Summary;
  countryAllData;
  date = new Date()
  load
  constructor(
    private coronaSrervis: CoronaService,
    private flagS: CountryFlagService,
    private http: HttpClient,
  ) {
    
    this.load = true
    }

  ngOnInit(): void {
    
    
     new  Promise((rslv, rjct) => {

      this.http.get('https://ipinfo.io?token=0ac350cebb7af1').subscribe((res: any) => {
      
        
      let arC = country.find(e => e.code === res.country)
       rslv(arC)
       
        
    }, err => {
      rjct(err)
      this.load = true
    })
    }).then(data => {
      this.load = false
      this.dataMyCountry = data}).catch(null).finally(() => {
        this.load = false
      })

  
  
    this.coronaSrervis.getArab().subscribe(data => {
 
      
      
      this.slide = data});
    
  }
}
