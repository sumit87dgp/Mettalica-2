import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { AppdataService } from '../../../services/appdata.service';
import { CountryVM } from '../../../models/admin/countryVM';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-country-add',
  templateUrl: './country-add.component.html',
  styleUrls: ['./country-add.component.scss']
})

export class CountryAddComponent implements OnInit, OnDestroy {

  @ViewChild('f') addeditcountryform: NgForm;
  @ViewChild('basicModal') formModal: any;
  country: CountryVM;
  countryList: CountryVM[];
  editmode = false;
  private countryListSub: Subscription;
  constructor(private appdataSrv: AppdataService) {

  }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.appdataSrv.getallcountries();
    this.countryListSub = this.appdataSrv.countriesObservableListner().subscribe((countries: CountryVM[]) => {
      this.countryList = countries;
    });
    this.country = new CountryVM('', '', '');
    console.log(this.formModal);

  }

  savenewCountry() {

  }

  editcountrydetails(selectedcountry: CountryVM) {
    this.country = selectedcountry;
    this.editmode = true;
    this.formModal.show();
  }
  addnewCountry(): void {
    this.editmode = false;
    this.country = new CountryVM('', '', '');
    this.formModal.show();
  }
  addeditCountry(): void {
    if (this.addeditcountryform.valid) {
      let countrytopost;
      if (this.editmode) {
        this.editmode = false;
        countrytopost = new CountryVM(this.country.id, this.addeditcountryform.value.countryName,
          this.addeditcountryform.value.abbrvName);
      } else {
        countrytopost = new CountryVM('', this.addeditcountryform.value.countryName,
          this.addeditcountryform.value.abbrvName);
      }
      this.appdataSrv.addsinglecountries(countrytopost);
      // this.appdataSrv.countriesObservableListner().subscribe((countries: CountryVM[]) => {
      //     this.countryList = countries;
      // });
      this.addeditcountryform.reset();
      this.formModal.hide();

    }
  }
  ngOnDestroy(): void {
    this.countryListSub.unsubscribe();
  }

}
