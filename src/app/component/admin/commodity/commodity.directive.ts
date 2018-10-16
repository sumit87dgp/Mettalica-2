import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appCommodityEditHost]'
})
export class CommodityDirective {
  constructor(public viewContainerRef: ViewContainerRef) {

  }
}
