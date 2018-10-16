import { Component, OnInit, ViewChild, ComponentFactoryResolver, OnDestroy } from '@angular/core';
import { AppdataService } from '../../../services/appdata.service';
import { CounterPartyVM } from '../../../models/admin/counterpartyVM';
import { DynamicCompIntacService } from '../../../services/shared/dynamic-comp-intac.service';
import { CommodityEditItem } from '../commodity/commeditItem';
import { CommodityDirective } from '../commodity/commodity.directive';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-counterparty',
  templateUrl: './counterparty.component.html',
  styleUrls: ['./counterparty.component.scss']
})
export class CounterpartyComponent implements OnInit, OnDestroy {


  ctrEditItem: CommodityEditItem;
  ctrparties: CounterPartyVM[] = [];
  ctrpartysubslist: Subscription;
  @ViewChild(CommodityDirective) ctrpartydirective: CommodityDirective;
  constructor(private appdatservice: AppdataService,
    private dyncompsrv: DynamicCompIntacService,
    private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.appdatservice.getctrpartylist();
    this.ctrpartysubslist = this.appdatservice.ctrpartyObservableListner()
      .subscribe((ctrpartylist: CounterPartyVM[]) => {
        this.ctrparties = ctrpartylist;
        // console.log(this.ctrparties);
      });
  }
  loadpopup() {
    this.ctrEditItem = this.dyncompsrv.getdynamicCtrPartyComponent();
    const commEditItemFactory =
      this.componentFactoryResolver.resolveComponentFactory(this.ctrEditItem.component);
    const viewContainerRef = this.ctrpartydirective.viewContainerRef;
    viewContainerRef.clear();
    const componentRef = viewContainerRef.createComponent(commEditItemFactory);
    // (<AdComponent>componentRef.instance) = this.commedititems;
  }
  ngOnDestroy(): void {
    this.ctrpartysubslist.unsubscribe();
  }

}
