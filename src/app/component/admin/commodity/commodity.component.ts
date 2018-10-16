import { Component, OnInit, OnDestroy, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { CommodityVM } from '../../../models/admin/commodityVM';
import { AppdataService } from '../../../services/appdata.service';
import { Subscription } from 'rxjs';
import { ComponentInteractionService } from '../../../services/shared/componentInteraction.service';
import { CommodityEditItem } from './commeditItem';
import { CommodityDirective } from './commodity.directive';
import { DynamicCompIntacService } from '../../../services/shared/dynamic-comp-intac.service';

@Component({
  selector: 'app-commodity',
  templateUrl: './commodity.component.html',
  styleUrls: ['./commodity.component.scss']
})
export class CommodityComponent implements OnInit, OnDestroy {

  commedititems: CommodityEditItem;
  @ViewChild(CommodityDirective) commdirective: CommodityDirective;


  commoditylist: CommodityVM[];
  commoditylistsubs: Subscription;

  constructor(private appdatasrv: AppdataService,
    private dyncompsrv: DynamicCompIntacService,
    private componentFactoryResolver: ComponentFactoryResolver,
    private cisrv: ComponentInteractionService) { }

  ngOnInit() {
    this.commoditylist = [];
    this.appdatasrv.getcommoditylist();
    this.commoditylistsubs = this.appdatasrv.commodityObservableListner().subscribe((commoditylist: CommodityVM[]) => {
      this.commoditylist = commoditylist;
      // console.log(this.commoditylist);
    });
  }
  addcommodity() {
    this.cisrv.changeModeForComm('add');
    console.log('Adding commodity');
  }

  deletecomodity(id: string) {
    this.appdatasrv.deletecommodity(id);
  }

  ngOnDestroy() {
    this.commoditylistsubs.unsubscribe();
  }

  loadpopup() {
    this.commedititems = this.dyncompsrv.getdynamicComponent();
    const commEditItemFactory =
      this.componentFactoryResolver.resolveComponentFactory(this.commedititems.component);
    const viewContainerRef = this.commdirective.viewContainerRef;
    viewContainerRef.clear();
    const componentRef = viewContainerRef.createComponent(commEditItemFactory);
    // (<AdComponent>componentRef.instance) = this.commedititems;
  }

}
