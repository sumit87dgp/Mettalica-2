export class CounterPartyVM {
  id: string;
  name: string;
  abrvname: string;
  location: string;

  constructor(name: string, abrvname: string, location: string, id?: string) {
    this.id = id;
    this.name = name;
    this.abrvname = abrvname;
    this.location = location;
  }
}
