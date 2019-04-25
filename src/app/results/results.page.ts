import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-results',
  templateUrl: './results.page.html',
  styleUrls: ['./results.page.scss'],
})
export class ResultsPage implements OnInit {

  constructor(private http:HttpClient, public activeRoute:ActivatedRoute) { }

    // Variables
    results: any = [];
    searchType: String;
    searchValue: String;
    private url = "https://swapi.co/api/";
  
    //Function to call the API URL
    GetSwapiData():Observable<any>{
      return this.http.get(this.url);
    }

    ngOnInit() {
      //Receiving data from the home page
      this.searchValue = this.activeRoute.snapshot.paramMap.get("searchValue");
      this.searchType = this.activeRoute.snapshot.paramMap.get("searchType");

      //Adding parameters to the URL to search the API
      this.url = this.url + this.searchType + "/?search=" + this.searchValue;

      //Pulling Data from the API
      this.GetSwapiData().subscribe(data => {
      this.results = data.results;
    });
  }
}
