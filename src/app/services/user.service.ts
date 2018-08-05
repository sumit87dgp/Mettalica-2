import { Injectable } from '@angular/core';
import { UserVM } from '../models/userVM';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: UserVM;

  constructor() { }


  Authenticate(email: string, password: string): UserVM {

    return this.GenerateUser();
  }

  ResetPassword(email: string, password: string): UserVM {
    return this.GenerateUser();
  }

  AddNewUser(user: UserVM): boolean {
    return true;
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
