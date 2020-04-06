import { Injectable, ɵConsole } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { of } from "rxjs";

import { CountryFlagService } from "./country-flag.service";

import {country} from './ar.country'


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
        
        ele.lastUpdate = data?.lastUpdate;
        ele.confirmed = data?.confirmed.value;
        ele.recovered = data?.recovered.value;
        ele.deaths = data?.deaths.value;
     
    
        
      });
    });

   
  
    return of(country)
  }

  getAllIOS(iso) {
    let coronaAllCounry: any[] = [];
    return this.http.get(
      `https://covid19.mathdro.id/api/countries/${iso}/`
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


var countryList =[ 
	{"name": "Afghanistan",  "lastUpdate": 0,  "confirmed": 0, "recovered": 0, "deaths": 0, "code": "AF"}, 
	{"name": "Albania",  "lastUpdate": 0,  "confirmed": 0, "recovered": 0, "deaths": 0, "code": "AL"}, 

	{"name": "AndorrA",  "lastUpdate": 0,  "confirmed": 0, "recovered": 0, "deaths": 0, "code": "AD"}, 
	{"name": "Angola",  "lastUpdate": 0,  "confirmed": 0, "recovered": 0, "deaths": 0, "code": "AO"}, 
	
	
	{"name": "Antigua and Barbuda",  "lastUpdate": 0,  "confirmed": 0, "recovered": 0, "deaths": 0, "code": "AG"}, 
	{"name": "Argentina",  "lastUpdate": 0,  "confirmed": 0, "recovered": 0, "deaths": 0, "code": "AR"}, 
	{"name": "Armenia",  "lastUpdate": 0,  "confirmed": 0, "recovered": 0, "deaths": 0, "code": "AM"}, 
	
	{"name": "Australia",  "lastUpdate": 0,  "confirmed": 0, "recovered": 0, "deaths": 0, "code": "AU"}, 
	{"name": "Austria",  "lastUpdate": 0,  "confirmed": 0, "recovered": 0, "deaths": 0, "code": "AT"}, 
	{"name": "Azerbaijan",  "lastUpdate": 0,  "confirmed": 0, "recovered": 0, "deaths": 0, "code": "AZ"}, 
	{"name": "Bahamas",  "lastUpdate": 0,  "confirmed": 0, "recovered": 0, "deaths": 0, "code": "BS"}, 
	{"name": "Bahrain",  "lastUpdate": 0,  "confirmed": 0, "recovered": 0, "deaths": 0, "code": "BH"}, 
	{"name": "Bangladesh",  "lastUpdate": 0,  "confirmed": 0, "recovered": 0, "deaths": 0, "code": "BD"}, 
	{"name": "Barbados",  "lastUpdate": 0,  "confirmed": 0, "recovered": 0, "deaths": 0, "code": "BB"}, 
	{"name": "Belarus",  "lastUpdate": 0,  "confirmed": 0, "recovered": 0, "deaths": 0, "code": "BY"}, 
	{"name": "Belgium",  "lastUpdate": 0,  "confirmed": 0, "recovered": 0, "deaths": 0, "code": "BE"}, 
	{"name": "Belize",  "lastUpdate": 0,  "confirmed": 0, "recovered": 0, "deaths": 0, "code": "BZ"}, 
	{"name": "Benin",  "lastUpdate": 0,  "confirmed": 0, "recovered": 0, "deaths": 0, "code": "BJ"}, 
 
	{"name": "Bhutan",  "lastUpdate": 0,  "confirmed": 0, "recovered": 0, "deaths": 0, "code": "BT"}, 
	{"name": "Bolivia",  "lastUpdate": 0,  "confirmed": 0, "recovered": 0, "deaths": 0, "code": "BO"}, 
	{"name": "Bosnia and Herzegovina",  "lastUpdate": 0,  "confirmed": 0, "recovered": 0, "deaths": 0, "code": "BA"}, 
	{"name": "Botswana",  "lastUpdate": 0,  "confirmed": 0, "recovered": 0, "deaths": 0, "code": "BW"}, 
	
	{"name": "Brazil",  "lastUpdate": 0,  "confirmed": 0, "recovered": 0, "deaths": 0, "code": "BR"}, 
	
	{"name": "Brunei Darussalam",  "lastUpdate": 0,  "confirmed": 0, "recovered": 0, "deaths": 0, "code": "BN"}, 
	{"name": "Bulgaria",  "lastUpdate": 0,  "confirmed": 0, "recovered": 0, "deaths": 0, "code": "BG"}, 
	{"name": "Burkina Faso",  "lastUpdate": 0,  "confirmed": 0, "recovered": 0, "deaths": 0, "code": "BF"}, 
	{"name": "Burundi",  "lastUpdate": 0,  "confirmed": 0, "recovered": 0, "deaths": 0, "code": "BI"}, 
	{"name": "Cambodia",  "lastUpdate": 0,  "confirmed": 0, "recovered": 0, "deaths": 0, "code": "KH"}, 
	{"name": "Cameroon",  "lastUpdate": 0,  "confirmed": 0, "recovered": 0, "deaths": 0, "code": "CM"}, 
	{"name": "Canada",  "lastUpdate": 0,  "confirmed": 0, "recovered": 0, "deaths": 0, "code": "CA"}, 
	
	
	{"name": "Central African Republic",  "lastUpdate": 0,  "confirmed": 0, "recovered": 0, "deaths": 0, "code": "CF"}, 
	{"name": "Chad",  "lastUpdate": 0,  "confirmed": 0, "recovered": 0, "deaths": 0, "code": "TD"}, 
	{"name": "Chile",  "lastUpdate": 0,  "confirmed": 0, "recovered": 0, "deaths": 0, "code": "CL"}, 
	{"name": "China",  "lastUpdate": 0,  "confirmed": 0, "recovered": 0, "deaths": 0, "code": "CN"}, 
 
	
	{"name": "Colombia",  "lastUpdate": 0,  "confirmed": 0, "recovered": 0, "deaths": 0, "code": "CO"}, 
	

	{"name": "Costa Rica",  "lastUpdate": 0,  "confirmed": 0, "recovered": 0, "deaths": 0, "code": "CR"}, 
	
	{"name": "Croatia",  "lastUpdate": 0,  "confirmed": 0, "recovered": 0, "deaths": 0, "code": "HR"}, 
	{"name": "Cuba",  "lastUpdate": 0,  "confirmed": 0, "recovered": 0, "deaths": 0, "code": "CU"}, 
	{"name": "Cyprus",  "lastUpdate": 0,  "confirmed": 0, "recovered": 0, "deaths": 0, "code": "CY"}, 
	 
	{"name": "Denmark",  "lastUpdate": 0,  "confirmed": 0, "recovered": 0, "deaths": 0, "code": "DK"}, 
	{"name": "Djibouti",  "lastUpdate": 0,  "confirmed": 0, "recovered": 0, "deaths": 0, "code": "DJ"}, 
	{"name": "Dominica",  "lastUpdate": 0,  "confirmed": 0, "recovered": 0, "deaths": 0, "code": "DM"}, 
	{"name": "Dominican Republic",  "lastUpdate": 0,  "confirmed": 0, "recovered": 0, "deaths": 0, "code": "DO"}, 
	{"name": "Ecuador",  "lastUpdate": 0,  "confirmed": 0, "recovered": 0, "deaths": 0, "code": "EC"}, 
	{"name": "Egypt",  "lastUpdate": 0,  "confirmed": 0, "recovered": 0, "deaths": 0, "code": "EG"}, 
	{"name": "El Salvador",  "lastUpdate": 0,  "confirmed": 0, "recovered": 0, "deaths": 0, "code": "SV"}, 
	{"name": "Equatorial Guinea",  "lastUpdate": 0,  "confirmed": 0, "recovered": 0, "deaths": 0, "code": "GQ"}, 
	{"name": "Eritrea",  "lastUpdate": 0,  "confirmed": 0, "recovered": 0, "deaths": 0, "code": "ER"}, 
	{"name": "Estonia",  "lastUpdate": 0,  "confirmed": 0, "recovered": 0, "deaths": 0, "code": "EE"}, 
	{"name": "Ethiopia",  "lastUpdate": 0,  "confirmed": 0, "recovered": 0, "deaths": 0, "code": "ET"}, 

	{"name": "Fiji",  "lastUpdate": 0,  "confirmed": 0, "recovered": 0, "deaths": 0, "code": "FJ"}, 
	{"name": "Finland",  "lastUpdate": 0,  "confirmed": 0, "recovered": 0, "deaths": 0, "code": "FI"}, 
	{"name": "France",  "lastUpdate": 0,  "confirmed": 0, "recovered": 0, "deaths": 0, "code": "FR"}, 

	{"name": "Gabon",  "lastUpdate": 0,  "confirmed": 0, "recovered": 0, "deaths": 0, "code": "GA"}, 
	
	{"name": "Georgia",  "lastUpdate": 0,  "confirmed": 0, "recovered": 0, "deaths": 0, "code": "GE"}, 
	{"name": "Germany",  "lastUpdate": 0,  "confirmed": 0, "recovered": 0, "deaths": 0, "code": "DE"}, 
	{"name": "Ghana",  "lastUpdate": 0,  "confirmed": 0, "recovered": 0, "deaths": 0, "code": "GH"}, 

	{"name": "Greece",  "lastUpdate": 0,  "confirmed": 0, "recovered": 0, "deaths": 0, "code": "GR"}, 
	 
	{"name": "Grenada",  "lastUpdate": 0,  "confirmed": 0, "recovered": 0, "deaths": 0, "code": "GD"}, 

	{"name": "Guatemala",  "lastUpdate": 0,  "confirmed": 0, "recovered": 0, "deaths": 0, "code": "GT"}, 
	 
	{"name": "Guinea",  "lastUpdate": 0,  "confirmed": 0, "recovered": 0, "deaths": 0, "code": "GN"}, 
	{"name": "Guinea-Bissau",  "lastUpdate": 0,  "confirmed": 0, "recovered": 0, "deaths": 0, "code": "GW"}, 
	{"name": "Guyana",  "lastUpdate": 0,  "confirmed": 0, "recovered": 0, "deaths": 0, "code": "GY"}, 
	{"name": "Haiti",  "lastUpdate": 0,  "confirmed": 0, "recovered": 0, "deaths": 0, "code": "HT"}, 

	{"name": "Honduras",  "lastUpdate": 0,  "confirmed": 0, "recovered": 0, "deaths": 0, "code": "HN"}, 

	{"name": "Hungary",  "lastUpdate": 0,  "confirmed": 0, "recovered": 0, "deaths": 0, "code": "HU"}, 
	{"name": "Iceland",  "lastUpdate": 0,  "confirmed": 0, "recovered": 0, "deaths": 0, "code": "IS"}, 
	{"name": "India",  "lastUpdate": 0,  "confirmed": 0, "recovered": 0, "deaths": 0, "code": "IN"}, 
	{"name": "Indonesia",  "lastUpdate": 0,  "confirmed": 0, "recovered": 0, "deaths": 0, "code": "ID"}, 
	{"name": "Iran, Islamic Republic Of",  "lastUpdate": 0,  "confirmed": 0, "recovered": 0, "deaths": 0, "code": "IR"}, 
	{"name": "Iraq",  "lastUpdate": 0,  "confirmed": 0, "recovered": 0, "deaths": 0, "code": "IQ"}, 
	{"name": "Ireland",  "lastUpdate": 0,  "confirmed": 0, "recovered": 0, "deaths": 0, "code": "IE"}, 

	{"name": "Israel",  "lastUpdate": 0,  "confirmed": 0, "recovered": 0, "deaths": 0, "code": "IL"}, 
	{"name": "Italy",  "lastUpdate": 0,  "confirmed": 0, "recovered": 0, "deaths": 0, "code": "IT"}, 
	{"name": "Jamaica",  "lastUpdate": 0,  "confirmed": 0, "recovered": 0, "deaths": 0, "code": "JM"}, 
	{"name": "Japan",  "lastUpdate": 0,  "confirmed": 0, "recovered": 0, "deaths": 0, "code": "JP"}, 
 
	
	{"name": "Kazakhstan",  "lastUpdate": 0,  "confirmed": 0, "recovered": 0, "deaths": 0, "code": "KZ"}, 
	{"name": "Kenya",  "lastUpdate": 0,  "confirmed": 0, "recovered": 0, "deaths": 0, "code": "KE"}, 
	
	{"name": "Korea, Republic of",  "lastUpdate": 0,  "confirmed": 0, "recovered": 0, "deaths": 0, "code": "KR"}, 
	{"name": "Kuwait",  "lastUpdate": 0,  "confirmed": 0, "recovered": 0, "deaths": 0, "code": "KW"}, 
	{"name": "Kyrgyzstan",  "lastUpdate": 0,  "confirmed": 0, "recovered": 0, "deaths": 0, "code": "KG"}, 
	{"name": "Lao People",  "lastUpdate": 0,  "confirmed": 0, "recovered": 0, "deaths": 0, "code": "LA"}, 
	{"name": "Latvia",  "lastUpdate": 0,  "confirmed": 0, "recovered": 0, "deaths": 0, "code": "LV"}, 
	{"name": "Lebanon",  "lastUpdate": 0,  "confirmed": 0, "recovered": 0, "deaths": 0, "code": "LB"}, 
	
	{"name": "Liberia",  "lastUpdate": 0,  "confirmed": 0, "recovered": 0, "deaths": 0, "code": "LR"}, 
	{"name": "Libyan Arab Jamahiriya",  "lastUpdate": 0,  "confirmed": 0, "recovered": 0, "deaths": 0, "code": "LY"}, 
	{"name": "Liechtenstein",  "lastUpdate": 0,  "confirmed": 0, "recovered": 0, "deaths": 0, "code": "LI"}, 
	{"name": "Lithuania",  "lastUpdate": 0,  "confirmed": 0, "recovered": 0, "deaths": 0, "code": "LT"}, 
	{"name": "Luxembourg",  "lastUpdate": 0,  "confirmed": 0, "recovered": 0, "deaths": 0, "code": "LU"}, 

	
	{"name": "Madagascar",  "lastUpdate": 0,  "confirmed": 0, "recovered": 0, "deaths": 0, "code": "MG"}, 
	{"name": "Malawi",  "lastUpdate": 0,  "confirmed": 0, "recovered": 0, "deaths": 0, "code": "MW"}, 
	{"name": "Malaysia",  "lastUpdate": 0,  "confirmed": 0, "recovered": 0, "deaths": 0, "code": "MY"}, 
	{"name": "Maldives",  "lastUpdate": 0,  "confirmed": 0, "recovered": 0, "deaths": 0, "code": "MV"}, 
	{"name": "Mali",  "lastUpdate": 0,  "confirmed": 0, "recovered": 0, "deaths": 0, "code": "ML"}, 
	{"name": "Malta",  "lastUpdate": 0,  "confirmed": 0, "recovered": 0, "deaths": 0, "code": "MT"}, 
	

	{"name": "Mauritania",  "lastUpdate": 0,  "confirmed": 0, "recovered": 0, "deaths": 0, "code": "MR"}, 
	{"name": "Mauritius",  "lastUpdate": 0,  "confirmed": 0, "recovered": 0, "deaths": 0, "code": "MU"}, 

	{"name": "Mexico",  "lastUpdate": 0,  "confirmed": 0, "recovered": 0, "deaths": 0, "code": "MX"}, 
	 
	{"name": "Moldova, Republic of",  "lastUpdate": 0,  "confirmed": 0, "recovered": 0, "deaths": 0, "code": "MD"}, 
	{"name": "Monaco",  "lastUpdate": 0,  "confirmed": 0, "recovered": 0, "deaths": 0, "code": "MC"}, 
	{"name": "Mongolia",  "lastUpdate": 0,  "confirmed": 0, "recovered": 0, "deaths": 0, "code": "MN"}, 
	{"name": "Montenegro",  "lastUpdate": 0,  "confirmed": 0, "recovered": 0, "deaths": 0, "code": "ME"},

	{"name": "Morocco",  "lastUpdate": 0,  "confirmed": 0, "recovered": 0, "deaths": 0, "code": "MA"}, 
	{"name": "Mozambique",  "lastUpdate": 0,  "confirmed": 0, "recovered": 0, "deaths": 0, "code": "MZ"}, 
	
	{"name": "Namibia",  "lastUpdate": 0,  "confirmed": 0, "recovered": 0, "deaths": 0, "code": "NA"}, 
 
	{"name": "Nepal",  "lastUpdate": 0,  "confirmed": 0, "recovered": 0, "deaths": 0, "code": "NP"}, 
 
	
	{"name": "New Zealand",  "lastUpdate": 0,  "confirmed": 0, "recovered": 0, "deaths": 0, "code": "NZ"}, 
	{"name": "Nicaragua",  "lastUpdate": 0,  "confirmed": 0, "recovered": 0, "deaths": 0, "code": "NI"}, 
	{"name": "Niger",  "lastUpdate": 0,  "confirmed": 0, "recovered": 0, "deaths": 0, "code": "NE"}, 
	{"name": "Nigeria",  "lastUpdate": 0,  "confirmed": 0, "recovered": 0, "deaths": 0, "code": "NG"}, 

	{"name": "Norway",  "lastUpdate": 0,  "confirmed": 0, "recovered": 0, "deaths": 0, "code": "NO"}, 
	{"name": "Oman",  "lastUpdate": 0,  "confirmed": 0, "recovered": 0, "deaths": 0, "code": "OM"}, 
	{"name": "Pakistan",  "lastUpdate": 0,  "confirmed": 0, "recovered": 0, "deaths": 0, "code": "PK"}, 
	
	{"name": "Panama",  "lastUpdate": 0,  "confirmed": 0, "recovered": 0, "deaths": 0, "code": "PA"}, 
	{"name": "Papua New Guinea",  "lastUpdate": 0,  "confirmed": 0, "recovered": 0, "deaths": 0, "code": "PG"}, 
	{"name": "Paraguay",  "lastUpdate": 0,  "confirmed": 0, "recovered": 0, "deaths": 0, "code": "PY"}, 
	{"name": "Peru",  "lastUpdate": 0,  "confirmed": 0, "recovered": 0, "deaths": 0, "code": "PE"}, 
	{"name": "Philippines",  "lastUpdate": 0,  "confirmed": 0, "recovered": 0, "deaths": 0, "code": "PH"}, 
	
	{"name": "Poland",  "lastUpdate": 0,  "confirmed": 0, "recovered": 0, "deaths": 0, "code": "PL"}, 
	{"name": "Portugal",  "lastUpdate": 0,  "confirmed": 0, "recovered": 0, "deaths": 0, "code": "PT"}, 
	
	{"name": "Qatar",  "lastUpdate": 0,  "confirmed": 0, "recovered": 0, "deaths": 0, "code": "QA"}, 
	
	{"name": "Romania",  "lastUpdate": 0,  "confirmed": 0, "recovered": 0, "deaths": 0, "code": "RO"}, 
	{"name": "Russian Federation",  "lastUpdate": 0,  "confirmed": 0, "recovered": 0, "deaths": 0, "code": "RU"}, 
	{"name": "RWANDA",  "lastUpdate": 0,  "confirmed": 0, "recovered": 0, "deaths": 0, "code": "RW"}, 
 
	{"name": "Saint Kitts and Nevis",  "lastUpdate": 0,  "confirmed": 0, "recovered": 0, "deaths": 0, "code": "KN"}, 
	{"name": "Saint Lucia",  "lastUpdate": 0,  "confirmed": 0, "recovered": 0, "deaths": 0, "code": "LC"}, 
 
	{"name": "Saint Vincent and the Grenadines",  "lastUpdate": 0,  "confirmed": 0, "recovered": 0, "deaths": 0, "code": "VC"}, 

	{"name": "San Marino",  "lastUpdate": 0,  "confirmed": 0, "recovered": 0, "deaths": 0, "code": "SM"}, 
	
	{"name": "Saudi Arabia",  "lastUpdate": 0,  "confirmed": 0, "recovered": 0, "deaths": 0, "code": "SA"}, 
	{"name": "Senegal",  "lastUpdate": 0,  "confirmed": 0, "recovered": 0, "deaths": 0, "code": "SN"}, 
	{"name": "Serbia",  "lastUpdate": 0,  "confirmed": 0, "recovered": 0, "deaths": 0, "code": "RS"}, 
	{"name": "Seychelles",  "lastUpdate": 0,  "confirmed": 0, "recovered": 0, "deaths": 0, "code": "SC"}, 
	{"name": "Sierra Leone",  "lastUpdate": 0,  "confirmed": 0, "recovered": 0, "deaths": 0, "code": "SL"}, 
	{"name": "Singapore",  "lastUpdate": 0,  "confirmed": 0, "recovered": 0, "deaths": 0, "code": "SG"}, 
	{"name": "Slovakia",  "lastUpdate": 0,  "confirmed": 0, "recovered": 0, "deaths": 0, "code": "SK"}, 
	{"name": "Slovenia",  "lastUpdate": 0,  "confirmed": 0, "recovered": 0, "deaths": 0, "code": "SI"}, 
	
	{"name": "Somalia",  "lastUpdate": 0,  "confirmed": 0, "recovered": 0, "deaths": 0, "code": "SO"}, 
	{"name": "South Africa",  "lastUpdate": 0,  "confirmed": 0, "recovered": 0, "deaths": 0, "code": "ZA"}, 
	 
	{"name": "Spain",  "lastUpdate": 0,  "confirmed": 0, "recovered": 0, "deaths": 0, "code": "ES"}, 
	{"name": "Sri Lanka",  "lastUpdate": 0,  "confirmed": 0, "recovered": 0, "deaths": 0, "code": "LK"}, 
	{"name": "Sudan",  "lastUpdate": 0,  "confirmed": 0, "recovered": 0, "deaths": 0, "code": "SD"}, 
	{"name": "Suriname",  "lastUpdate": 0,  "confirmed": 0, "recovered": 0, "deaths": 0, "code": "SR"}, 
	 
	{"name": "Sweden",  "lastUpdate": 0,  "confirmed": 0, "recovered": 0, "deaths": 0, "code": "SE"}, 
	{"name": "Switzerland",  "lastUpdate": 0,  "confirmed": 0, "recovered": 0, "deaths": 0, "code": "CH"}, 
	{"name": "Syrian Arab Republic",  "lastUpdate": 0,  "confirmed": 0, "recovered": 0, "deaths": 0, "code": "SY"}, 
	{"name": "Taiwan, Province of China",  "lastUpdate": 0,  "confirmed": 0, "recovered": 0, "deaths": 0, "code": "TW"}, 
	
	{"name": "Tanzania, United Republic of",  "lastUpdate": 0,  "confirmed": 0, "recovered": 0, "deaths": 0, "code": "TZ"}, 
	{"name": "Thailand",  "lastUpdate": 0,  "confirmed": 0, "recovered": 0, "deaths": 0, "code": "TH"}, 
	 
	{"name": "Togo",  "lastUpdate": 0,  "confirmed": 0, "recovered": 0, "deaths": 0, "code": "TG"}, 
 
	
	{"name": "Trinidad and Tobago",  "lastUpdate": 0,  "confirmed": 0, "recovered": 0, "deaths": 0, "code": "TT"}, 
	{"name": "Tunisia",  "lastUpdate": 0,  "confirmed": 0, "recovered": 0, "deaths": 0, "code": "TN"}, 
	{"name": "Turkey",  "lastUpdate": 0,  "confirmed": 0, "recovered": 0, "deaths": 0, "code": "TR"}, 
	
	{"name": "Uganda",  "lastUpdate": 0,  "confirmed": 0, "recovered": 0, "deaths": 0, "code": "UG"}, 
	{"name": "Ukraine",  "lastUpdate": 0,  "confirmed": 0, "recovered": 0, "deaths": 0, "code": "UA"}, 
	{"name": "United Arab Emirates",  "lastUpdate": 0,  "confirmed": 0, "recovered": 0, "deaths": 0, "code": "AE"}, 
	{"name": "United Kingdom",  "lastUpdate": 0,  "confirmed": 0, "recovered": 0, "deaths": 0, "code": "GB"}, 
	{"name": "United States",  "lastUpdate": 0,  "confirmed": 0, "recovered": 0, "deaths": 0, "code": "US"}, 
	 
	{"name": "Uruguay",  "lastUpdate": 0,  "confirmed": 0, "recovered": 0, "deaths": 0, "code": "UY"}, 
	{"name": "Uzbekistan",  "lastUpdate": 0,  "confirmed": 0, "recovered": 0, "deaths": 0, "code": "UZ"}, 
	{"name": "Venezuela",  "lastUpdate": 0,  "confirmed": 0, "recovered": 0, "deaths": 0, "code": "VE"}, 
	{"name": "Viet Nam",  "lastUpdate": 0,  "confirmed": 0, "recovered": 0, "deaths": 0, "code": "VN"}, 
	
	{"name": "Zambia",  "lastUpdate": 0,  "confirmed": 0, "recovered": 0, "deaths": 0, "code": "ZM"}, 
	{"name": "Zimbabwe",  "lastUpdate": 0,  "confirmed": 0, "recovered": 0, "deaths": 0, "code": "ZW"} 
  ]
  

  