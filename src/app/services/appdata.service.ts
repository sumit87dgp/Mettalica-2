import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CountryVM } from '../models/admin/countryVM';

@Injectable({
  providedIn: 'root'
})
export class AppdataService {

  constructor(private httpclient: HttpClient) { }

  getallcountries(): CountryVM[] {
    const countries: CountryVM[] = [new CountryVM('', 'India', 'IND'), new CountryVM('', 'New Zealand', 'NZ')];
    return countries;
  }

  addsinglecountries(country: CountryVM) {
    // console.log(country);
    if (country.id === '') {
      // Create New
      console.log(country);
      this.httpclient.post<{ message: string }>('http://localhost:3000/api/appdata/country', country)
        .subscribe(resdata => {
          console.log(resdata);
        });
    } else {
      // Edit
    }
  }

  addcountriesinbatch() {

  }
}
