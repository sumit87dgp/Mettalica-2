import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { HomeComponent } from './component/home/home.component';

import { AdminHomeComponent } from './component/admin/admin-home/admin-home.component';
import { AuthGaurd } from './gaurds/auth.gaurd';



const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'admin-home', component: AdminHomeComponent },
  { path: '', component: HomeComponent }
  // { path: '', component: HomeComponent, canActivate: [AuthGaurd] }

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [AuthGaurd],
  declarations: []
})
export class AppRoutingModule { }
