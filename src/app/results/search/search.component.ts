import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { FetchDataService } from '../dataservice/fetchdata.service'
import 'rxjs/add/operator/map';
import {Observable} from "rxjs";
import {City} from '../../models/City';
import {Hotel} from "../../models/Hotel.js";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [FetchDataService]
})
export class SearchComponent implements OnInit {

  search_text: string;
  suggestions: Observable<City[]>;
  @Output() onHotelData = new EventEmitter<Hotel[]>();

  constructor(public ds: FetchDataService) {
    this.search_text = '';
  }

  ngOnInit() {
  }

  highlight(event) {
    event.target.className += " active";
  }

  dehighlight(event) {
    event.target.className = event.target.className.replace("active", "");
  }

  search () {
    this.suggestions = this.ds.getCitySuggestions(this.search_text);
  }

  getDeals(chose: City) {
    let a = this.ds.getGPSLoc(chose.id);
    a.subscribe( data => {
      this.onHotelData.emit(data);
      this.suggestions = Observable.empty<City[]>();
      this.search_text = '';
    });
  }

}
