export class Address {

  public street: string;
  public second: string;
  public zip: string;
  public city: string;
  public country: string;
  public location: {lat, long};

  constructor(street: string, zip: string, city: string, country: string) {
    this.street = street;
    this.zip = zip;
    this.city = city;
    this.country = country;
  }

}
