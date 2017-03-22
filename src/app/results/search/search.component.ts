import { Component, OnInit } from '@angular/core';
import { FetchDataService } from '../dataservice/fetchdata.service'
import 'rxjs/add/operator/map';
import {Observable} from "rxjs";
import {City} from '../../models/City';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [FetchDataService]
})
export class SearchComponent implements OnInit {

  search_text: string;
  suggestions: Observable<City[]>;
  errorMessage: string;

  constructor(public ds: FetchDataService) {
    this.search_text = '';
  }

  ngOnInit() {
  }

  search () {
    this.suggestions = this.ds.getCitySuggestions(this.search_text);
  }

  getDeals(chose: string) {

  }

}
