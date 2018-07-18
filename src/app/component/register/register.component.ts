import { Component, OnInit, ViewChild } from '@angular/core';
import { UserVM } from '../../models/userVM';
import { NgForm } from '../../../../node_modules/@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  @ViewChild('regForm') registrationform: NgForm;

  newUser: UserVM;
  constructor() { }

  ngOnInit() {
  }
  onSubmit(form: any) {
    console.log(this.registrationform);
  }

}
