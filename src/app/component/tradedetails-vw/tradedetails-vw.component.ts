import { Component, OnInit } from '@angular/core';
import { TradeSearchVM } from '../../models/tradesearchVM';
import { TradeserviceService } from '../../services/tradeservice.service';

@Component({
  selector: 'app-tradedetails-vw',
  templateUrl: './tradedetails-vw.component.html',
  styleUrls: ['./tradedetails-vw.component.scss']
})
export class TradedetailsVwComponent implements OnInit {
  tradedetailsVM: TradeSearchVM;
  constructor() { }

  ngOnInit() {
    this.tradedetailsVM = {
      id: '32131-432423',
      tradeDate: new Date(),
      commodity: 'commodity1',
      tradeSide: 'buy',
      quantity: 2,
      price: 2132.5,
      counterparty: 'LA Metals',
      location: 'Los Angeles'
    };
  }

}
