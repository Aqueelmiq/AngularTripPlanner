export class City {

  public name: string;
  public id: string;
  public loc: Array<number>;

  constructor(name: string, id: string, lat: number, long: number) {
    this.name = name;
    this.id = id;
    this.loc = [lat, long];
  }

}
