import { Injectable } from '@angular/core';
import {Http, Response, URLSearchParams} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import { City } from '../../models/City';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import {Hotel} from "../../models/Hotel.js";

@Injectable()
export class FetchDataService {

  autocomplete_base_uri = 'https://maps.googleapis.com/maps/api/place/autocomplete/json';
  location_base_uri = 'https://maps.googleapis.com/maps/api/place/details/json';
  maps_key = 'AIzaSyBV5Psgt3ImW5QiixQZFgu9PlcrcJ7INTc';

  hotels_base_uri = 'https://api.sandbox.amadeus.com/v1.2/hotels/search-circle';
  hotel_key = 'ifDv9dg7QTiIJswoa17q9Fs7npZZI1aQ';

  constructor (private http: Http) {}

  getCitySuggestions(search_term: string): Observable<any[]> {

    let params = new URLSearchParams();
    params.set('input', search_term);
    params.set('types', '(cities)');
    params.set('key', this.maps_key);

    return this.http.get(this.autocomplete_base_uri, {search: params})
      .map(this.extractCity)
      .catch(this.handleError);
  }

  getGPSLoc(place_id: string): Observable<any[]> {
    let params = new URLSearchParams();
    params.set('placeid', place_id);
    params.set('key', this.maps_key);

    return this.http.get(this.location_base_uri, {search: params})
      .map(this.extractCoordinates)
      .mergeMap(this.getHotel.bind(this));
  }

  private getHotel(loc): Observable<any[]> {

      let params = new URLSearchParams();
      params.set('apikey', this.hotel_key);
      params.set('latitude', loc[0]);
      params.set('longitude', loc[1]);
      params.set('radius', '30');
      params.set('check_in', '2017-05-01');
      params.set('check_out', '2017-05-04');

      return this.http.get(this.hotels_base_uri, {search: params})
        .map(this.extractHotels);
  }

  private extractCity(res: Response) {
    let body = res.json();
    return body.predictions.map((data) => new City(data.description, data.place_id, 0, 0));
  }

  private extractCoordinates(res: Response) {
    let body = res.json();
    return [body.result.geometry.location.lat, body.result.geometry.location.lng];
  }

  private extractHotels(res: Response) {
    let body = res.json();
    return body.results.map((hotel) => {
      return new Hotel(hotel.property_name, hotel.property_code, hotel.amneties,
                        hotel._links, hotel.address.line1, hotel.address.postal_code,
                        hotel.address.city, hotel.address.country);
    });
  }

  private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
