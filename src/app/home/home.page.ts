import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public router:Router) { }

  //Variables
  private searchValue: String;
  private searchType: String;

  // Method to Navigate to the Results page, and pass through data from the variables "this,searchValue" and "this.searchType"
  navResultsPage(){
    this.router.navigate(["results", this.searchValue, this.searchType]);
  }

}
