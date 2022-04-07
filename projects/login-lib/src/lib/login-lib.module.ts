import { NgModule } from '@angular/core';
import { LoginLibComponent } from './login-lib.component';
import { LoginComponent } from './modules/components/login/login.component';



@NgModule({
  declarations: [
    LoginLibComponent,
    LoginComponent
  ],
  imports: [
  ],
  exports: [
    LoginLibComponent
  ]
})
export class LoginLibModule { }
