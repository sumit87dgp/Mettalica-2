import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ModalDirective } from 'angular-bootstrap-md';
import { AppdataService } from '../../../services/appdata.service';
import { FormGroup, FormControl, FormControlDirective } from '@angular/forms';
import { CounterPartyVM } from '../../../models/admin/counterpartyVM';

@Component({
  selector: 'app-counterparty-add',
  templateUrl: './counterparty-add.component.html',
  styleUrls: ['./counterparty-add.component.scss']
})
export class CounterpartyAddComponent implements OnInit, AfterViewInit {
  ctrpartyeditcreateform: FormGroup;
  @ViewChild('basicModal') formModal: ModalDirective;
  constructor(private appdtsrv: AppdataService) { }

  ngOnInit() {
    this.initform();
  }
  ngAfterViewInit(): void {
    this.toggleModal();
    // throw new Error('Method not implemented.');
  }

  initform() {
    this.ctrpartyeditcreateform = new FormGroup({
      'ctrpartyname': new FormControl(null),
      'abrvname': new FormControl(null),
      'location': new FormControl(null)
    });
  }

  toggleModal() {
    // this.formModal=new ModalDirective()
    if (this.formModal.config.show === false) {
      this.formModal.show();
    } else {
      this.formModal.hide();
    }

    console.log(this.formModal.config);
  }

  addeditCounterparty() {
    // console.log(this.ctrpartyeditcreateform);
    if (this.ctrpartyeditcreateform.valid) {
      const ctr: CounterPartyVM = new CounterPartyVM(
        this.ctrpartyeditcreateform.get('ctrpartyname').value,
        this.ctrpartyeditcreateform.get('abrvname').value,
        this.ctrpartyeditcreateform.get('location').value
      );
      this.appdtsrv.addnewctrparty(ctr);
    }

  }

}
