import { Injectable } from '@angular/core';
import {Http, Response, URLSearchParams} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { City } from ''
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class FetchDataService {

  maps_base_uri = 'https://maps.googleapis.com/maps/api/place/autocomplete/json';
  maps_key = 'AIzaSyBV5Psgt3ImW5QiixQZFgu9PlcrcJ7INTc';

  hotels_base_uri = 'https://api.sandbox.amadeus.com/v1.2/hotels/search-circle';
  hotel_key = 'ifDv9dg7QTiIJswoa17q9Fs7npZZI1aQ';

  constructor (private http: Http) {}

  getCitySuggestions(search_term: string): Observable<any[]> {

    let params = new URLSearchParams();
    params.set('input', search_term);
    params.set('types', '(cities)');
    params.set('key', this.maps_key);

    return this.http.get(this.maps_base_uri, {search: params})
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.predictions.map((data) => data.description || "");
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
