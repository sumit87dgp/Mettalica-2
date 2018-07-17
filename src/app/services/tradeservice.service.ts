import { Injectable } from '@angular/core';
import { TradeSearchVM } from '../models/tradesearchVM';

@Injectable({
  providedIn: 'root'
})
export class TradeserviceService {
  filteredTradeSearchResult: TradeSearchVM[];
  constructor() {
    this.filteredTradeSearchResult = [
      {
        id: '32131-432423',
        tradeDate: new Date(),
        commodity: 'commodity1',
        tradeSide: 'buy',
        quantity: 2,
        price: 2132.5,
        counterparty: 'LA Metals',
        location: 'Los Angeles'
      },
      {
        id: '32131-432423',
        tradeDate: new Date(),
        commodity: 'commodity1',
        tradeSide: 'buy',
        quantity: 2,
        price: 2132.5,
        counterparty: 'LA Metals',
        location: 'Los Angeles'
      },
      {
        id: '32131-432423',
        tradeDate: new Date(),
        commodity: 'commodity1',
        tradeSide: 'buy',
        quantity: 2,
        price: 2132.5,
        counterparty: 'LA Metals',
        location: 'Los Angeles'
      },
      {
        id: '32131-432423',
        tradeDate: new Date(),
        commodity: 'commodity1',
        tradeSide: 'buy',
        quantity: 2,
        price: 2132.5,
        counterparty: 'LA Metals',
        location: 'Los Angeles'
      },
      {
        id: '32131-432423',
        tradeDate: new Date(),
        commodity: 'commodity1',
        tradeSide: 'buy',
        quantity: 2,
        price: 2132.5,
        counterparty: 'LA Metals',
        location: 'Los Angeles'
      },
      {
        id: '32131-432423',
        tradeDate: new Date(),
        commodity: 'commodity1',
        tradeSide: 'buy',
        quantity: 2,
        price: 2132.5,
        counterparty: 'LA Metals',
        location: 'Los Angeles'
      },
      {
        id: '32131-432423',
        tradeDate: new Date(),
        commodity: 'commodity1',
        tradeSide: 'buy',
        quantity: 2,
        price: 2132.5,
        counterparty: 'LA Metals',
        location: 'Los Angeles'
      },
      {
        id: '32131-432423',
        tradeDate: new Date(),
        commodity: 'commodity1',
        tradeSide: 'buy',
        quantity: 2,
        price: 2132.5,
        counterparty: 'LA Metals',
        location: 'Los Angeles'
      },
      {
        id: '32131-432423',
        tradeDate: new Date(),
        commodity: 'commodity1',
        tradeSide: 'buy',
        quantity: 2,
        price: 2132.5,
        counterparty: 'LA Metals',
        location: 'Los Angeles'
      }

    ];
  }

  getfilteredorAll(): TradeSearchVM[] {
    return this.filteredTradeSearchResult;
  }
  editTradeItem(tradeItem: TradeSearchVM) {
    console.log('tradeItems', tradeItem);
  }
  searchwithfilter(tradeItem: TradeSearchVM) {
    return this.filteredTradeSearchResult;
  }
}
