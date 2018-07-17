import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-ddlselect',
  templateUrl: './ddlselect.component.html',
  styleUrls: ['./ddlselect.component.scss']
})
export class DdlselectComponent implements OnInit {

  @Input() options: string[];

  @Output() selecteditem: string;

  constructor() { }

  ngOnInit() {

  }
  OnItemChange(event: any) {
    console.log(event);
  }

}
