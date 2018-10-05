export class CountryVM {
  id: string;
  name: string;
  abbreviatedname: string;

  constructor(id: string, name: string, abbrName: string) {
    this.id = id;
    this.name = name;
    this.abbreviatedname = abbrName;
  }
}
