import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { UserService } from '../services/user.service';

@Injectable()
export class AuthGaurd implements CanActivate {

  constructor(private userService: UserService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
    : boolean | Observable<boolean> | Promise<boolean> {

    const isAuth = this.userService.getIsUserAuthenticated();
    if (!isAuth) {
      this.router.navigate(['/login']);
    }

    return isAuth;

  }
}
