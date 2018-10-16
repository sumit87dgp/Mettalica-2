import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ComponentInteractionService } from '../../../services/shared/componentInteraction.service';
import { ModalDirective } from 'angular-bootstrap-md';
import { CommodityVM } from '../../../models/admin/commodityVM';
import { AppdataService } from '../../../services/appdata.service';

@Component({
  selector: 'app-commodity-add',
  templateUrl: './commodity-add.component.html',
  styleUrls: ['./commodity-add.component.scss']
})
export class CommodityAddComponent implements OnInit, AfterViewInit {

  comeditcreateform: FormGroup;
  commodity: CommodityVM;
  @ViewChild('basicModal') formModal: ModalDirective;
  constructor(private cisrv: ComponentInteractionService, private appdtsrv: AppdataService) { }
  ngAfterViewInit(): void {
    // throw new Error('Method not implemented.');
    // this.formModal.show();
    this.toggleModal();
  }
  ngOnInit() {
    this.initializeform();
    // this.cisrv.getcommaddListnet().subscribe(data => {
    //   console.log('Dat firing');
    //   if (data) {
    //     console.log('Data firing');
    //     this.toggleModal();
    //   }
    // });

  }

  initializeform() {
    // this.comeditcreateform.reset();
    this.comeditcreateform = new FormGroup({
      'commname': new FormControl({ value: null, disabled: false }, Validators.required),
      'abrvname': new FormControl(null, Validators.required),
      'priceperunit': new FormControl(0, Validators.required),
      'unitstoadd': new FormControl(0, Validators.required),
      'avlbunits': new FormControl({ value: 'NA', disabled: true }, Validators.required)
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

  addeditCommodity() {
    // console.log(this.comeditcreateform);
    if (this.comeditcreateform.valid) {
      const comm: CommodityVM = new CommodityVM(null,
        this.comeditcreateform.get('commname').value,
        this.comeditcreateform.get('abrvname').value,
        this.comeditcreateform.get('priceperunit').value
      );
      this.appdtsrv.addnewcommodity(comm);
      this.toggleModal();
    }

  }

}
