import { Component, OnInit } from '@angular/core';
import { TradeSearchVM } from '../../models/tradesearchVM';
import { FormGroup, FormControl } from '../../../../node_modules/@angular/forms';

@Component({
  selector: 'app-trade-edit-or-create',
  templateUrl: './trade-edit-or-create.component.html',
  styleUrls: ['./trade-edit-or-create.component.scss']
})
export class TradeEditOrCreateComponent implements OnInit {

  tradeEditCreateForm: FormGroup;
  tradeDetails: TradeSearchVM;

  constructor() { }

  ngOnInit() {
    this.tradeEditCreateForm = new FormGroup({
      'id': new FormControl(null),
      'tradeDate': new FormControl(null),
      'commodity': new FormControl(null),
      'tradeSide': new FormControl('buy'),
      'quantity': new FormControl(0),
      'price': new FormControl(0),
      'counterparty': new FormControl(null),
      'location': new FormControl(null)
    });
  }

  onSubmit() {

  }

}
