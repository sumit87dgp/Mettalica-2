import { Injectable } from '@angular/core';
import { TradeSearchVM } from '../models/tradesearchVM';
import { HttpClient } from '@angular/common/http';
import { Subject } from '../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class TradeserviceService {
  filteredTradeSearchResult: TradeSearchVM[];
  constructor(private http: HttpClient) {
    // this.filteredTradeSearchResult = [

    // ];
  }
  private tradeListUpdate = new Subject<TradeSearchVM[]>();

  getTradeListUpdateListner() {
    return this.tradeListUpdate.asObservable();
  }

  getfilteredorAll(): TradeSearchVM[] {
    // return this.filteredTradeSearchResult;
    this.http.get<{ message: string, tradelist: TradeSearchVM[] }>('http://localhost:3000/api/trades')
      .subscribe((resdata) => {
        this.filteredTradeSearchResult = resdata.tradelist;
        this.tradeListUpdate.next([...this.filteredTradeSearchResult]);
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
