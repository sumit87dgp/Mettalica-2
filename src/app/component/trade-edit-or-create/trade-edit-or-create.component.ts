import { Component, OnInit, Injectable } from '@angular/core';
import { TradeSearchVM } from '../../models/tradesearchVM';
import { FormGroup, FormControl } from '../../../../node_modules/@angular/forms';
import { ComponentInteractionService } from '../../services/shared/componentInteraction.service';
import { TradeserviceService } from '../../services/tradeservice.service';
import { NgbDateStruct, NgbDatepickerConfig, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
// import { config } from 'rxjs';
// @Injectable()
@Component({
  selector: 'app-trade-edit-or-create',
  templateUrl: './trade-edit-or-create.component.html',
  styleUrls: ['./trade-edit-or-create.component.scss']
})
export class TradeEditOrCreateComponent implements OnInit {

  addmodeenabled: boolean;
  tradeEditCreateForm: FormGroup;
  tradeDetails: TradeSearchVM;
  // mindate: NgbDateStruct;
  // maxdate: NgbDateStruct;

  constructor(private cissrv: ComponentInteractionService, private trdsrv: TradeserviceService,
    config: NgbDatepickerConfig) {
      config.minDate = {year: 1900, month: 1, day: 1};
    config.maxDate = {year: 2099, month: 12, day: 31};
     }

  ngOnInit() {
    // this.mindate = { year: 1900, month: 1, day: 1 };
    // this.maxdate = {year: 2099, month: 12, day: 31};
    this.cissrv.gettrademodeListener().subscribe((fdata) => {
      if (fdata === 'edit') {
        this.addmodeenabled = false;
        this.trdsrv.getSelectedTradeItemListner().subscribe((data) => {
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
      } else {
        this.addmodeenabled = true;
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
    console.log('mode : ', this.addmodeenabled);
  }

  toggleaddeditmode() {
    const mode = this.addmodeenabled ? 'edit' : 'create';
    this.cissrv.changeMode(mode);
  }

  onSubmit() {
    console.log(this.tradeEditCreateForm);
  }

}
