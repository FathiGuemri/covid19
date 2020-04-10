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
  constructor(
    private coronaSrervis: CoronaService,
    private flagS: CountryFlagService,
    private http: HttpClient,
  ) {}
load = true
  ngOnInit(): void {
    this.http.get('https://ipinfo.io?token=0ac350cebb7af1').subscribe((res: any) => {
     
      this.coronaSrervis.getAllIOS(res.country).pipe(map((coun: any) => {
        let arC = country.find(e => e.code == coun.countrydata[0]?.info.code)
        
        
        this.dataMyCountry = arC
      })).subscribe(null, null, () => {
        this.load = false
      });
      
    })
    this.coronaSrervis.getArab().subscribe(data => {
 
      
      
      this.slide = data});
    
  }
}
