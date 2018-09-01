import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserVM } from '../models/userVM';
import { AuthData } from '../models/authVM';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: UserVM;
  IsUserAuthenticated = false;

  constructor(private httpClient: HttpClient, private router: Router) { }


  getIsUserAuthenticated(): boolean {
    return this.IsUserAuthenticated;
  }

  Authenticate(email: string, password: string) {
    const authdata: AuthData = { emailId: email, password: password };
    this.httpClient.post<{ token: string, expiresIn: number, userId: string }>('http://localhost:3000/api/user/login', authdata)
      .subscribe(responsedata => {
        const token = responsedata.token;
        if (token) {
          this.IsUserAuthenticated = true;
          this.router.navigate(['/']);
        }

      });
    // return this.GenerateUser();

  }



  ResetPassword(email: string, password: string): UserVM {
    return this.GenerateUser();
  }

  AddNewUser(user: UserVM) {
    return this.httpClient.post<{ message: string }>('http://localhost:3000/api/users', user);
  }

  private GenerateUser(): UserVM {

    this.user = new UserVM();
    this.user.email = 'sumit.test@gmail.com';
    this.user.firstName = 'Sumit';
    this.user.lastName = 'Saha';
    this.user.phoneNo = '99xx-xx99-111';
    this.user.id = '1';
    return this.user;
  }


}
