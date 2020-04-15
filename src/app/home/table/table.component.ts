import { Component, OnInit, PLATFORM_ID, Inject } from "@angular/core";
import {  isPlatformBrowser } from "@angular/common";


import { CoronaService } from "src/app/srevises/corona.service";




@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.scss"],
})
export class TableComponent implements OnInit {
  term;
  countries;
  Summary
order = 'total_cases'
  constructor( private CS: CoronaService, @Inject(PLATFORM_ID) private platformId: Object ) {


   


   
  }
  ngOnInit(): void {
    this.CS.getAll().subscribe((el) => {
  
   
      this. countries = el

      
      
    })
    this.CS.getSummary().subscribe(data => {
      this.Summary = data;
      // console.log(data);
      
    });
   
  }
}
