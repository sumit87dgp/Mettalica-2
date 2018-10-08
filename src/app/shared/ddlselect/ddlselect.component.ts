import { Component, OnInit, Input, Output } from '@angular/core';
import { IDDLoptionsmodel } from './IDDLoptionsmodel';
import { DDLmodel } from './DDlmodel';


@Component({
  selector: 'app-ddlselect',
  templateUrl: './ddlselect.component.html',
  styleUrls: ['./ddlselect.component.scss']
})
export class DdlselectComponent implements OnInit {

  // @Input() options: string[];
  @Input() options: DDLmodel[];

  @Output() selecteditem: DDLmodel;

  constructor() { }

  ngOnInit() {

  }
  OnItemChange(event: any) {
    console.log(event);
  }

}
