import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavigationComponent } from './navigation/navigation.component';
import { TradeSearchComponent } from './component/trade-search/trade-search.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NgbModule, NgbDatepickerConfig } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

// For form dropdowns
import { NgxSelectModule } from 'ngx-select-ex';

import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { AppRoutingModule } from './/app-routing.module';
import { TradesearchVwComponent } from './component/tradesearch-vw/tradesearch-vw.component';
// import { TradedetailsVwComponent } from './component/tradedetails-vw/tradedetails-vw.component';
import { DdlselectComponent } from './shared/ddlselect/ddlselect.component';
import { TradeEditOrCreateComponent } from './component/trade-edit-or-create/trade-edit-or-create.component';
import { HomeComponent } from './component/home/home.component';
import { MyselfComponent } from './component/myself/myself.component';
import { MyhighlighterDirective } from './shared/myhighlighter.directive';
import { SubnavigationComponent } from './component/subnavigation/subnavigation.component';

// Admin modules
import { CommodityAddComponent } from './component/admin/commodity-add/commodity-add.component';
import { AdminHomeComponent } from './component/admin/admin-home/admin-home.component';
import { CountryAddComponent } from './component/admin/country/country-add.component';
import { CountryEditAddComponent } from './component/admin/country-edit-add/country-edit-add.component';
import { CommodityComponent } from './component/admin/commodity/commodity.component';



@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    TradeSearchComponent,
    LoginComponent,
    RegisterComponent,
    TradesearchVwComponent,
    // TradedetailsVwComponent,
    DdlselectComponent,
    TradeEditOrCreateComponent,
    HomeComponent,
    MyselfComponent,
    MyhighlighterDirective,
    SubnavigationComponent,
    // Admin modules
    CommodityAddComponent,
    AdminHomeComponent,
    CountryAddComponent,
    CountryEditAddComponent,
    CommodityComponent
    // NgbInputDatepicker --error Uncaught Error:
    // Type NgbInputDatepicker is part of the declarations of
    // 2 modules: NgbDatepickerModule and AppModule! Please consider
    // moving NgbInputDatepicker to a higher module that imports
    // NgbDatepickerModule and AppModule. You can also create a new NgModule
    //  that exports and includes NgbInputDatepicker then import that NgModule
    //  in NgbDatepickerModule and AppModule.
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgxSelectModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    NgbModule.forRoot()
  ],
  providers: [NgbDatepickerConfig],
  bootstrap: [AppComponent]
})
export class AppModule { }
