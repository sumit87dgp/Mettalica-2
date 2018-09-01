import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../../services/user.service';
import { UserVM } from '../../models/userVM';
import { NgForm } from '@angular/forms';
import { Routes, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  route: Routes;
  emailId: string;
  password: string;
  rememberMe: boolean;
  loggedInUser: UserVM;


  constructor(private usrService: UserService, private router: Router) {

  }

  ngOnInit() {
  }

  onLoginSubmit(signInform: NgForm): void {

    if (signInform.valid) {
      this.usrService.Authenticate(signInform.value.emailId, signInform.value.password);

    }

  }



}
