import { Injectable } from '@angular/core';
import { TradeSearchVM } from '../models/tradesearchVM';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TradeserviceService {
  filteredTradeSearchResult: TradeSearchVM[];
  constructor(private http: HttpClient) {
    // this.filteredTradeSearchResult = [

    // ];
  }

  getfilteredorAll(): TradeSearchVM[] {
    // return this.filteredTradeSearchResult;
    this.http.get<{ message: string, tradelist: TradeSearchVM[] }>('http://localhost:3000/api/trades')
      .subscribe((resdata) => {
        this.filteredTradeSearchResult = resdata.tradelist;
      });
    return this.filteredTradeSearchResult;
  }
  editTradeItem(tradeItem: TradeSearchVM) {
    console.log('tradeItems', tradeItem);
  }
  searchwithfilter(tradeItem: TradeSearchVM) {
    return this.filteredTradeSearchResult;
  }
}
