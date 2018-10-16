import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appAdminModalHost]'
})
export class AdminModalHostDirective {

  constructor(private viewrefcontainer: ViewContainerRef) { }

}
