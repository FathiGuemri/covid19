import { Injectable, ɵConsole } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { of } from "rxjs";

import { CountryFlagService } from "./country-flag.service";

import {country} from './ar.country'
import { filter, map } from 'rxjs/operators';


@Injectable({
  providedIn: "root"
})
export class CoronaService {
  constructor(private http: HttpClient, private cF: CountryFlagService) {}

  getSummary() {
    return this.http.get("https://covid19.mathdro.id/api");
  }

  getAll() {
   

    country.forEach( (ele, index, object) => {
     this.getAllIOS(ele.code).subscribe((data: any) => {
        if (!data.hasOwnProperty("results")) {
			ele.total_cases = data.countrydata[0].total_cases
			ele.total_recovered = data.countrydata[0].total_recovered
			ele.total_unresolved = data.countrydata[0].total_unresolved
			ele.total_deaths = data.countrydata[0].total_deaths
			ele.total_new_cases_today = data.countrydata[0].total_new_cases_today
			ele.total_new_deaths_today = data.countrydata[0].total_new_deaths_today
			ele.total_active_cases = data.countrydata[0].total_active_cases
			ele.total_serious_cases = data.countrydata[0].total_serious_cases
			ele.total_danger_rank = data.countrydata[0].total_danger_rank
			ele.title = data.countrydata[0].info["title"]
		}  
        
      });
    });

   
  
	return of(country)
  }

  getAllIOS(iso) {
    let coronaAllCounry: any[] = [];
    return this.http.get(
      `https://api.thevirustracker.com/free-api?countryTotal=${iso}/`
    );
  }
  getByCountry(coun) {
    return this.http.get(
      `https://covid19.mathdro.id/api/countries/${coun}/confirmed`
    );
  }

  getArab() {
    let arabicCountry = [
     
		{ en: "Algeria", ar: "الجزائر", data: {}, flag: "" },
		{ en: "Morocco", ar: "المغرب", data: {}, flag: "" },
		{ en: "Libya", ar: "ليبيا", data: {}, flag: "" },
		{ en: "Egypt", ar: "مصر", data: {}, flag: "" },
		{ en: "Qatar", ar: "قطر", data: {}, flag: "" },
		{ en: "Kuwait", ar: "الكويت", data: {}, flag: "" },
      { en: "Saudi Arabia", ar: "السعودية", data: {}, flag: ''},
      { en: "Iraq", ar: "العراق", data: {}, flag: "" },
    ];

    arabicCountry.forEach(ele => {
      arabicCountry.forEach(ele => {
        this.cF.gelFlag(ele.en).subscribe(data => {
          ele.flag = data.file_url;
        });
        this.getByCountry(ele.en).subscribe(data => {
          ele.data = data[0];
        });
      });
      this.getByCountry(ele.en).subscribe(data => {
        ele.data = data[0];
      });
    });

    return of(arabicCountry);
  }
}



  

  