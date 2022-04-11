import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginStateService } from '../../../services/login-state.service';

@Component({
  selector: 'ga-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  mobileValid: boolean = false;

  userArray:any[] = [];

  validUser:boolean = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private shareMessage: LoginStateService

  ) {
    this.loginForm = this.fb.group({
      mobileNumber: ['', Validators.required]
    })
    
  }

  ngOnInit(): void {
    
    // this.loginForm.valueChanges.subscribe((data) => {    
    // if( data.mobileNumber.va >= 10) {
    // }
    // });
  }

  /**
   * To get all input attribute use abstarctControl
   */

  get number(): AbstractControl {
    return this.loginForm.get('mobileNumber');
  }

  submitLogin() {

    if(this.number.valid){
      this.userArray = JSON.parse(localStorage.getItem("userInfo"));
      /**
       * Find mobile number from local object
       */
      this.userArray.forEach(item => {
        if(item.mobileNumber === this.number.value){
          this.validUser = true
          return
        }
      })

      //console.log('User validation3', this.userArray, this.number.value, this.validUser);

      if(this.validUser) {
      /**
       * Share mobile number to OTP component
       */
      this.shareMessage.getMobileNumber(this.number.value);
      /**
       * navigate to otp component with out payloads
       */
      this.router.navigate(['/login/otp']);
      } else {
        alert("Enter valid mobile number")
      }
      

  }
}

}
