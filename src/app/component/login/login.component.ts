import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../../services/user.service';
import { UserVM } from '../../models/userVM';
import { NgForm } from '../../../../node_modules/@angular/forms';
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

  @ViewChild('f') signupForm: NgForm;

  constructor(private usrService: UserService, private router: Router) {

  }

  ngOnInit() {
  }

  // Directly getting the form
  // onLoginSubmit(form: NgForm): void {
  //   console.log(form);
  //   this.usrService.Authenticate('user', 'pass');
  //   event.preventDefault();
  // }


  // Getting form with @ViewChild
  onLoginSubmit(returnurl): void {
    console.log(this.signupForm);
    this.emailId = this.signupForm.form.value.email;
    this.password = this.signupForm.form.value.password;
    this.rememberMe = this.signupForm.form.value.rememberMe;
    this.loggedInUser = this.usrService.Authenticate(this.emailId, this.password);
    this.router.navigate(['/']);
  }



}
