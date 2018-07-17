import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavigationComponent } from './navigation/navigation.component';
import { TradeSearchComponent } from './component/trade-search/trade-search.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// For form dropdowns
import { NgxSelectModule } from 'ngx-select-ex';

import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { AppRoutingModule } from './/app-routing.module';
import { TradesearchVwComponent } from './component/tradesearch-vw/tradesearch-vw.component';
import { TradedetailsVwComponent } from './component/tradedetails-vw/tradedetails-vw.component';
import { DdlselectComponent } from './shared/ddlselect/ddlselect.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    TradeSearchComponent,
    LoginComponent,
    RegisterComponent,
    TradesearchVwComponent,
    TradedetailsVwComponent,
    DdlselectComponent],
  imports: [
    BrowserModule,
    FormsModule,
    MDBBootstrapModule.forRoot(),
    NgbModule.forRoot(),
    AppRoutingModule,
    NgxSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
