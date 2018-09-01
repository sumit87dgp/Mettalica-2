import { Component, OnInit } from '@angular/core';
import { TradeSearchVM } from '../../models/tradesearchVM';
import { DomElementSchemaRegistry } from '@angular/compiler';
import { TradeserviceService } from '../../services/tradeservice.service';

@Component({
  selector: 'app-tradesearch-vw',
  templateUrl: './tradesearch-vw.component.html',
  styleUrls: ['./tradesearch-vw.component.scss']
})
export class TradesearchVwComponent implements OnInit {

  tradeSearchResult: TradeSearchVM[];
  constructor(private tradeService: TradeserviceService) { }

  ngOnInit() {
    this.tradeService.getfilteredorAll();
    this.tradeService.getTradeListUpdateListner().subscribe((tradelist: TradeSearchVM[]) => {
      this.tradeSearchResult = tradelist;
    });
    // this.tradeSearchResult = this.tradeService.getfilteredorAll();
  }

  onEdit(tradeItem: TradeSearchVM) {
    this.tradeService.editTradeItem(tradeItem);
  }
  editTradeDetails(item: TradeSearchVM) {
   // console.log('item :', item);
   this.tradeService.editTradeItem(item);
  }

}
