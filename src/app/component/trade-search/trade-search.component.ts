import { Component, OnInit, OnDestroy } from '@angular/core';
import { INgxSelectOption } from 'ngx-select-ex/ngx-select-ex';
import { FormControl } from '../../../../node_modules/@angular/forms';
import { TradeSearchVM } from '../../models/tradesearchVM';
import { TradeserviceService } from '../../services/tradeservice.service';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { DDLmodel } from '../../shared/ddlselect/DDlmodel';
import { AppdataService } from '../../services/appdata.service';
import { CountryVM } from '../../models/admin/countryVM';
import { CommodityVM } from '../../models/admin/commodityVM';

@Component({
  selector: 'app-trade-search',
  templateUrl: './trade-search.component.html',
  styleUrls: ['./trade-search.component.scss']
})
export class TradeSearchComponent implements OnInit {

  tradeSearchModel: TradeSearchVM;
  mindate: NgbDateStruct;


  public ddlcountryitems: DDLmodel[] = [];
  public ddlcounterpartyitems: DDLmodel[] = [];
  public ddlcommitems: DDLmodel[] = [];
  // = ['Amsterdam', 'Antwerp', 'Athens', 'Barcelona',
  //   'Berlin', 'Birmingham', 'Bradford', 'Bremen', 'Brussels', 'Bucharest',
  //   'Budapest', 'Cologne', 'Copenhagen', 'Dortmund', 'Dresden', 'Dublin',
  //   'Düsseldorf', 'Essen', 'Frankfurt', 'Genoa', 'Glasgow', 'Gothenburg',
  //   'Hamburg', 'Hannover', 'Helsinki', 'Kraków', 'Leeds', 'Leipzig', 'Lisbon',
  //   'London', 'Madrid', 'Manchester', 'Marseille', 'Milan', 'Munich', 'Málaga',
  //   'Naples', 'Palermo', 'Paris', 'Poznań', 'Prague', 'Riga', 'Rome',
  //   'Rotterdam', 'Seville', 'Sheffield', 'Sofia', 'Stockholm', 'Stuttgart',
  //   'The Hague', 'Turin', 'Valencia', 'Vienna', 'Vilnius', 'Warsaw', 'Wrocław',
  //   'Zagreb', 'Zaragoza', 'Łódź'];


  public ngxControl = new FormControl();

  private _ngxDefaultTimeout;
  private _ngxDefaultInterval;
  private _ngxDefault;

  constructor(private trdservice: TradeserviceService, private appdtservice: AppdataService) { }

  ngOnInit() {
    this.ddlCountryList();
    this.mindate = { year: 2017, month: 1, day: 1 };
    this.tradeSearchModel = {
      id: '32131-432423',
      tradeDate: new Date('MM/dd/yyyy'),
      fromdate: new Date('MM/dd/yyyy'),
      todate: new Date(),
      buy: true,
      sell: false,
      commodity: 'commodity1',
      tradeSide: 'buy',
      quantity: 2,
      price: 2132.5,
      counterparty: 'LA Metals',
      location: 'Los Angeles'
    };
  }

  private ddlCountryList() {
    this.appdtservice.getallcountries();
    this.appdtservice.getcommoditylist();
    this.appdtservice.countriesObservableListner()
      .subscribe((countries: CountryVM[]) => {
        countries.map((country) => {
          this.ddlcountryitems.push(new DDLmodel(country.abbreviatedname, country.id));
          // return new DDLmodel(country.abbreviatedname, country.id);
        });
      });
    this.appdtservice.commodityObservableListner()
      .subscribe((commodities: CommodityVM[]) => {
        commodities.map(comm => {
          this.ddlcommitems.push(new DDLmodel(comm.name, comm.id));
        });
      });
  }
  onSearch() {
    console.log(this.tradeSearchModel);
    // //this.trdservice.searchwithfilter(this.tradeSearchModel);
  }

}

