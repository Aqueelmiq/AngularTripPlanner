import {Component, Input, OnInit} from '@angular/core';
import {Hotel} from "../../models/Hotel.js";

@Component({
  selector: 'app-hotellist',
  templateUrl: 'hotellist.component.html',
  styleUrls: ['hotellist.component.css']
})
export class HotellistComponent implements OnInit {

  @Input() hotels:Hotel[];

  constructor() {}

  onHotelData2(hotels) {
    this.hotels = hotels;
  }

  ngOnInit() {
  }

}
