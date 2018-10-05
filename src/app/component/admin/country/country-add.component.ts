import { Component, OnInit, ViewChild } from '@angular/core';
import { AppdataService } from '../../../services/appdata.service';
import { CountryVM } from '../../../models/admin/countryVM';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-country-add',
  templateUrl: './country-add.component.html',
  styleUrls: ['./country-add.component.scss']
})

export class CountryAddComponent implements OnInit {

  @ViewChild('f') addeditcountryform: NgForm;
  country: CountryVM;
  countryList: CountryVM[];
  constructor(private appdataSrv: AppdataService) {

  }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.countryList = this.appdataSrv.getallcountries();
    this.country = new CountryVM('', '', '');
  }

  savenewCountry() {

  }

  editcountrydetails(selectedcountry: CountryVM) {
    this.country = selectedcountry;
  }
  addeditCountry(): void {
    if (this.addeditcountryform.valid) {
      this.country = new CountryVM('', this.addeditcountryform.value.countryName,
        this.addeditcountryform.value.abbrvName);
      this.appdataSrv.addsinglecountries(this.country);
      this.addeditcountryform.reset();

    }
  }

}
