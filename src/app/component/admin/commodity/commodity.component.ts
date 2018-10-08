import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommodityVM } from '../../../models/admin/commodityVM';
import { AppdataService } from '../../../services/appdata.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-commodity',
  templateUrl: './commodity.component.html',
  styleUrls: ['./commodity.component.scss']
})
export class CommodityComponent implements OnInit, OnDestroy {

  commoditylist: CommodityVM[];
  commoditylistsubs: Subscription;
  constructor(private appdatasrv: AppdataService) { }

  ngOnInit() {
    this.commoditylist = [];
    this.appdatasrv.getcommoditylist();
    this.commoditylistsubs = this.appdatasrv.commodityObservableListner().subscribe((commoditylist: CommodityVM[]) => {
      this.commoditylist = commoditylist;
    });
  }
  ngOnDestroy() {
    this.commoditylistsubs.unsubscribe();
  }

}
