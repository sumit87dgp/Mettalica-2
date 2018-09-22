import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from '../services/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit, OnDestroy {

  private authStatusSubscription: Subscription;

  isUserLoggedIn: boolean;

  constructor(private usrSrv: UserService) { }

  ngOnInit() {
    this.isUserLoggedIn = this.usrSrv.getIsUserAuthenticated();
    this.authStatusSubscription = this.usrSrv.getAuthStatusListner().subscribe((
      isAuthenticated => {
        this.isUserLoggedIn = isAuthenticated;
      }
    ));
  }

  ngOnDestroy() {
    this.authStatusSubscription.unsubscribe();
  }

}
