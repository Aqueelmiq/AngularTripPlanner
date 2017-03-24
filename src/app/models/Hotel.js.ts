import {Address} from './Address';

export class Hotel {

  public name: string;
  public id: string;
  public address: Address;
  public amneties: Array<any>;
  public _links: Array<any>;

  constructor(name: string, id: string, amenities:Array<any>,
              links:Array<any>, street: string, zip: string,
              city: string, country: string) {
    this.name = name;
    this.id = id;
    this._links = links;
    this.address = new Address(street, zip, city, country);
    this.amneties = amenities;
  }
}
