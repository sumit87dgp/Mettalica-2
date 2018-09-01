import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComponentInteractionService {

  private mode = new BehaviorSubject<string>('edit');

  constructor() {

  }

  gettrademodeListener() {
    return this.mode.asObservable();
  }

  changeMode(action: string) {
    this.mode.next(action);
  }
}
