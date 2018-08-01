import { Component, OnInit } from '@angular/core';
import { LoggingService } from '../../services/logging.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [LoggingService]
})
export class HomeComponent implements OnInit {

  constructor(private logService: LoggingService) { }

  ngOnInit() {
    this.logService.logmessage('Loading Home');
  }

}
