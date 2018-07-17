import { Injectable } from '@angular/core';
import { UserVM } from '../models/userVM';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: UserVM;

  constructor() { }


  Authenticate(email: string, password: string): UserVM {
    return this.user;
  }

  ResetPassword(email: string, password: string): UserVM {
    return this.user;
  }

  AddNewUser(user: UserVM): boolean {
    return true;
  }

}
