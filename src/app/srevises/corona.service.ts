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
        if (!data.hasOwnProperty("message")) {
			ele.total_cases = data.cases
			ele.total_recovered = data.recovered
			ele.total_deaths = data.deaths
			ele.total_new_cases_today = data.todayCases
			ele.total_new_deaths_today = data.todayDeaths
			ele.total_active_cases = data.active
			ele.total_serious_cases = data.critical
			ele.updated = data.updated
			ele.title = data.country
			ele.casesPerOneMillion = data.casesPerOneMillion
			ele.deathsPerOneMillion = data.deathsPerOneMillion
			ele.title = data.country
			ele.tests = data.tests
      ele.testsPerOneMillion = data.testsPerOneMillion
      ele.percentrecovered = (( data.recovered * 100) / data.cases).toFixed(2)
      ele.percentdeaths =(( data.deaths * 100) / data.cases).toFixed(2)
		}  
        
      });
    });

   
  
	return of(country)
  }

  getAllIOS(iso) {
    let coronaAllCounry: any[] = [];
    return this.http.get(
      `https://corona.lmao.ninja/v2/countries/${iso}?yesterday=false`, {header: {"accept: application/json"}}
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
