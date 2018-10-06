import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CountryVM } from '../models/admin/countryVM';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppdataService {

  countryList: CountryVM[];

  private countryListSubject = new Subject<CountryVM[]>();


  constructor(private httpclient: HttpClient) { }

  countriesObservableListner() {
    return this.countryListSubject.asObservable();
  }
  getallcountries() {
    // let countries: CountryVM[];
    this.httpclient.get<{ message: string, countries: any }>('http://localhost:3000/api/appdata/countries')
      .pipe(map((countriesdata) => {
        return {
          countries: countriesdata.countries.map(country => {
            return new CountryVM(country._id, country.countryName, country.abbrvName);
          })
        };
      }))
      .subscribe((transformedData) => {
        this.countryListSubject.next([...transformedData.countries]);
      });
    // const countries: CountryVM[] = [new CountryVM('', 'India', 'IND'), new CountryVM('', 'New Zealand', 'NZ')];
    // return countries;
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
