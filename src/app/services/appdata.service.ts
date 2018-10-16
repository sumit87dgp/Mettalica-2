import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CountryVM } from '../models/admin/countryVM';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { ThrowStmt } from '@angular/compiler';
import { CommodityVM } from '../models/admin/commodityVM';

@Injectable({
  providedIn: 'root'
})
export class AppdataService {

  countryList: CountryVM[] = [];
  commList: CommodityVM[] = [];

  private countryListSubject = new Subject<CountryVM[]>();
  private commListSubject = new Subject<CommodityVM[]>();

  constructor(private httpclient: HttpClient) { }

  commodityObservableListner() {
    return this.commListSubject.asObservable();
  }

  countriesObservableListner() {
    return this.countryListSubject.asObservable();
  }

  getcommoditylist() {
    this.httpclient.get<{
      message: string,
      commoditylist: any, error?: any
    }>('http://localhost:3000/api/appdata/comm')
      .subscribe((response) => {
        const commoditylist: CommodityVM[] = response.commoditylist.map((commodity) => {
          return new CommodityVM(commodity._id, commodity.commname, commodity.abrvname, commodity.price);
        });
        if (commoditylist.length > 0) {
          this.commList = commoditylist;
          this.commListSubject.next([...this.commList]);
        } else {
          console.log('No commodities found');
          // this.commListSubject.error(() => {
          //   console.log(`The detailed error ${response.error}`);
          // });
        }

      });
  }

  addnewcommodity(newcommodity: CommodityVM) {
    console.log('COPY', newcommodity);
    this.httpclient.post<{ message: string, newcommodity: any }>('http://localhost:3000/api/appdata/comm', newcommodity)
      .subscribe(resultantdata => {
        const newcomm: CommodityVM = new CommodityVM(resultantdata.newcommodity._id,
          resultantdata.newcommodity.name,
          resultantdata.newcommodity.abrvname,
          resultantdata.newcommodity.price);
        this.commList.unshift(newcomm);
        this.commListSubject.next([...this.commList]);
      });
  }

  editcommodity(exitsingcom: CommodityVM) {
    this.httpclient.put<{ message: string, editedcommodity: any }>('http://localhost:3000/api/appdata/comm', exitsingcom)
      .subscribe(resultantdata => {
        const editedcomm = resultantdata.editedcommodity;
        this.commList
          .splice(this.commList.findIndex(p => p.id === editedcomm._id), 1,
            new CommodityVM(editedcomm._id, editedcomm.commname,
              editedcomm.abrvname, editedcomm.price));
        this.commListSubject.next([...this.commList]);
      });

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
        this.countryList = transformedData.countries;
        // this.countryListSubject.next([...transformedData.countries]);
        this.countryListSubject.next([...this.countryList]);
      });
    // const countries: CountryVM[] = [new CountryVM('', 'India', 'IND'), new CountryVM('', 'New Zealand', 'NZ')];
    // return countries;
  }

  addsinglecountries(country: CountryVM) {
    // console.log(country);
    if (country.id === '') {
      // Create New
      // console.log(country);
      this.httpclient.post<{ message: string, newcountry: any }>('http://localhost:3000/api/appdata/country', country)
        .pipe(map((data) => {
          console.log(data);
          const countryobj = new CountryVM(data.newcountry._id, data.newcountry.countryName, data.newcountry.abbrvName);
          return {
            // country: data.newcountry.map(ncountry => {
            //   return new CountryVM(ncountry._id, ncountry.countryName, ncountry.abbrvName);
            // }),
            country2: countryobj
          };
        }))
        .subscribe(transformedData => {
          console.log(transformedData);
          this.countryList.push(transformedData.country2);
          this.countryListSubject.next([...this.countryList]);
        });
    } else {
      // Edit
      this.httpclient.put<{ message: string, editedcountry: any }>('http://localhost:3000/api/appdata/country', country)
        .subscribe(resultantData => {

          console.log(resultantData);
          this.countryList.splice(this.countryList.findIndex
            (p => p.id === resultantData.editedcountry._id),
            1,
            new CountryVM(resultantData.editedcountry._id, resultantData.editedcountry.countryName, resultantData.editedcountry.abbrvName));

          // this.countryList = this.countryList.filter(d => {
          //   return d.id !== resultantData.editedcountry._id;
          // });
          // console.log('After filtering', this.countryList);
          // this.countryList.unshift(resultantData.editedcountry);
          // console.log(resultantData);
          this.countryListSubject.next([...this.countryList]);
        });
    }
  }

  addcountriesinbatch() {

  }

  deletecommodity(id: string) {
    this.httpclient.delete<{ statuscode: number, message: string }>(`http://localhost:3000/api/appdata/comm/${id}`)
      .subscribe(resultantdata => {
        if (resultantdata.statuscode === 1) {
          this.commList.splice(this.commList.findIndex(i => i.id === id), 1);
          this.commListSubject.next([...this.commList]);
        }
      });
  }
}
