import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserVM } from '../models/userVM';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: UserVM;

  constructor(private httpClient: HttpClient) { }


  Authenticate(email: string, password: string): UserVM {

    return this.GenerateUser();
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
