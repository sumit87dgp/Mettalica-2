export class CommodityVM {
  id: string;
  name: string;
  abrvname: string;
  priceperunit: number;

  constructor(id: string, name: string, abrvname: string, price: number) {
    this.id = id;
    this.name = name;
    this.abrvname = abrvname;
    this.priceperunit = price;
  }
}
