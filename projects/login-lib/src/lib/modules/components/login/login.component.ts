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
      this.shareMessage.getMobileNumber(this.number.value)
      this.router.navigate(['/login/otp'])
    } 
    //this.mobileValid = this.number.invalid ? true : false

  }

}
