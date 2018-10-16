import { Injectable } from '@angular/core';
import { CommodityEditItem } from '../../component/admin/commodity/commeditItem';
import { CommodityAddComponent } from '../../component/admin/commodity-add/commodity-add.component';

@Injectable({
  providedIn: 'root'
})
export class DynamicCompIntacService {

  constructor() { }

  getdynamicComponent() {
    return new CommodityEditItem(CommodityAddComponent, null);
  }
}
