import { Component, OnInit } from '@angular/core';
import { TradeSearchVM } from '../../models/tradesearchVM';
import { FormGroup, FormControl } from '../../../../node_modules/@angular/forms';
import { ComponentInteractionService } from '../../services/shared/componentInteraction.service';
import { TradeserviceService } from '../../services/tradeservice.service';

@Component({
  selector: 'app-trade-edit-or-create',
  templateUrl: './trade-edit-or-create.component.html',
  styleUrls: ['./trade-edit-or-create.component.scss']
})
export class TradeEditOrCreateComponent implements OnInit {

  addmodeenabled: boolean;
  tradeEditCreateForm: FormGroup;
  tradeDetails: TradeSearchVM;

  constructor(private cissrv: ComponentInteractionService, private trdsrv: TradeserviceService) { }

  ngOnInit() {
    this.cissrv.gettrademodeListener().subscribe((data) => {
      if (data === 'edit') {
        this.addmodeenabled = false;
      } else {
        this.addmodeenabled = true;
      }
    });

    this.trdsrv.getSelectedTradeItemListner().subscribe((data) => {
      // console.log('item : ', data);

      this.tradeEditCreateForm = new FormGroup({
        'id': new FormControl(data.id),
        'tradeDate': new FormControl(data.tradeDate),
        'commodity': new FormControl(data.commodity),
        'tradeSide': new FormControl(data.tradeSide),
        'quantity': new FormControl(data.quantity),
        'price': new FormControl(data.price),
        'counterparty': new FormControl(data.counterparty),
        'location': new FormControl(data.location)
      });
    });

    this.tradeEditCreateForm = new FormGroup({
      'id': new FormControl('New'),
      'tradeDate': new FormControl(null),
      'commodity': new FormControl(null),
      'tradeSide': new FormControl('buy'),
      'quantity': new FormControl(0),
      'price': new FormControl(0),
      'counterparty': new FormControl(null),
      'location': new FormControl(null)
    });
    // console.log('mode : ', this.addmodeenabled);
  }

  toggleaddeditmode() {
    const mode = this.addmodeenabled ? 'edit' : 'create';
    this.cissrv.changeMode(mode);
  }

  onSubmit() {

  }

}
