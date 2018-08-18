import { Component, OnInit, ViewChild } from '@angular/core';
import { UserVM } from '../../models/userVM';
import { NgForm } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  submitted: boolean;
  newUser: UserVM;
  constructor(public usrSrv: UserService) { }

  ngOnInit() {
    this.submitted = false;
  }
  onSubmit(registrationform: NgForm) {
    const user = new UserVM();
    if (registrationform.valid) {
      user.firstName = registrationform.value.firstname;
      user.lastName = registrationform.value.lastname;
      user.dob = registrationform.value.dob;
      user.email = registrationform.value.emailId;
      user.phoneNo = registrationform.value.phnnumber;
      user.passWord = registrationform.value.password;

      this.usrSrv.AddNewUser(user).subscribe((responsedata) => {
        console.log(responsedata.message);
        this.submitted = true;
      });

    }
    // console.log(user);
    // console.log(registrationform);
    // console.log(registrationform.value.firstname);

  }

}
