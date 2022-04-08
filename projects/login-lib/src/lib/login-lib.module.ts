import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginLibComponent } from './login-lib.component';
import { LoginComponent } from './modules/components/login/login.component';
import { OtpComponent } from './modules/components/otp/otp.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    LoginLibComponent,
    LoginComponent,
    OtpComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    LoginLibComponent,
    LoginComponent
  ]
})
export class LoginLibModule { }
