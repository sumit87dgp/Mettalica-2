import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { UserVM } from '../../models/userVM';
import { NgForm } from '../../../../node_modules/@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  emailId: string;
  password: string;
  rememberMe: boolean;

  constructor(private usrService: UserService) {
    this.rememberMe = true;
  }

  ngOnInit() {
  }

  onLoginSubmit(form: NgForm): void {
    console.log('UserName :', this.emailId);
    console.log('Password :', this.password);
    console.log(form);
    this.usrService.Authenticate('user', 'pass');
    event.preventDefault();
  }



}
