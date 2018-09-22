import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserVM } from '../models/userVM';
import { AuthData } from '../models/authVM';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: UserVM;
  IsUserAuthenticated = false;
  private authstatus = new Subject<boolean>();

  constructor(private httpClient: HttpClient, private router: Router) { }


  getIsUserAuthenticated(): boolean {
    return this.IsUserAuthenticated;
  }

  getAuthStatusListner() {
    return this.authstatus.asObservable();
  }

  Authenticate(email: string, password: string) {
    const authdata: AuthData = { emailId: email, password: password };
    this.httpClient.post<{ token: string, expiresIn: number, userId: string }>('http://localhost:3000/api/user/login', authdata)
      .subscribe(responsedata => {
        const token = responsedata.token;
        if (token) {
          this.IsUserAuthenticated = true;
          this.authstatus.next(true);
          const expiresInDuration = responsedata.expiresIn;
          const userId = responsedata.userId;
          const expirationDate = new Date(new Date().getTime() + expiresInDuration * 1000);
          this.saveAuthData(token, expirationDate, userId);
          this.router.navigate(['/']);
        }

      });
    // return this.GenerateUser();

  }

  private saveAuthData(token: string, expirationDate: Date, userId: string) {
    localStorage.setItem('token', token);
    localStorage.setItem('expirationDate', expirationDate.toISOString());
    localStorage.setItem('userId', userId);
  }

  AddNewUser(user: UserVM) {
    return this.httpClient.post<{ message: string }>('http://localhost:3000/api/users', user);
  }


}
