import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppLoginRoutingModule } from './app-login-routing.module';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { LoginLibModule } from '@grocery-app/login-lib';
import { OtpPageComponent } from './components/otp-page/otp-page.component';


@NgModule({
  declarations: [
    LoginPageComponent,
    OtpPageComponent
  ],
  imports: [
    CommonModule,
    AppLoginRoutingModule,
    LoginLibModule
  ]
})
export class AppLoginModule { }
