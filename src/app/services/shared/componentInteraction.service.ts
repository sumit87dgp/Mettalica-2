import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComponentInteractionService {

  private admcommodityaddevent = new BehaviorSubject<string>('initial');
  private mode = new BehaviorSubject<string>('edit');

  constructor() {

  }

  getcommaddListnet() {
    return this.admcommodityaddevent.asObservable();
  }


  gettrademodeListener() {
    return this.mode.asObservable();
  }

  changeModeForComm(action: string) {
    console.log(`Is this hit ${action}`);
    this.admcommodityaddevent.next(action);
  }

  changeMode(action: string) {
    this.mode.next(action);
  }
}
