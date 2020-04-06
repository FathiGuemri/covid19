import { Component, OnInit } from "@angular/core";
import { CoronaService } from "../srevises/corona.service";
import { CountryFlagService } from "../srevises/country-flag.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  dataTn;
  slide;
  Summary;
  countryAllData;
  constructor(
    private coronaSrervis: CoronaService,
    private flagS: CountryFlagService
  ) {}

  ngOnInit(): void {
  
    this.coronaSrervis.getByCountry("tunisia").subscribe((data: any[]) => {
      this.dataTn = data[0];
    });
    this.coronaSrervis.getArab().subscribe(data => {
 
      
      
      this.slide = data});
    
  }
}
