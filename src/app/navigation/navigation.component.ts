import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  isUserLoggedIn: boolean;

  constructor() { }

  ngOnInit() {
    this.isUserLoggedIn = false;
  }

}
