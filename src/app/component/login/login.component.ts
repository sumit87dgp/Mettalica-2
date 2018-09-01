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

  // @ViewChild('f') signupForm: NgForm;

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
  onLoginSubmit(signInform: NgForm): void {
    // console.log(this.signupForm);
    // this.emailId = this.signupForm.form.value.email;
    // this.password = this.signupForm.form.value.password;
    // this.rememberMe = this.signupForm.form.value.rememberMe;
    if (signInform.valid) {
      this.usrService.Authenticate(signInform.value.emailId, signInform.value.password);
      // this.router.navigate(['/']);
    }

  }



}
