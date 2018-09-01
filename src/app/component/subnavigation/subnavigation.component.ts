import { Component, OnInit, EventEmitter } from '@angular/core';
import { ComponentInteractionService } from '../../services/shared/componentInteraction.service';


@Component({
  selector: 'app-subnavigation',
  templateUrl: './subnavigation.component.html',
  styleUrls: ['./subnavigation.component.scss']
})
export class SubnavigationComponent implements OnInit {

  mode: string;
  constructor(private cissrv: ComponentInteractionService) { }

  ngOnInit() {
    this.cissrv.gettrademodeListener().subscribe((formmode) => {
      this.mode = formmode;
    });
  }

  addtrade() {
    this.cissrv.changeMode('addnew');
  }

}
