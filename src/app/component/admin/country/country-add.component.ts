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
    @ViewChild('basicModal') formModal: any;
    country: CountryVM;
    countryList: CountryVM[];
    editmode = false;
    constructor(private appdataSrv: AppdataService) {

    }
    ngOnInit(): void {
        // throw new Error('Method not implemented.');
        this.appdataSrv.getallcountries();
        this.appdataSrv.countriesObservableListner().subscribe((countries: CountryVM[]) => {
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
            this.addeditcountryform.reset();

        }
    }

}
