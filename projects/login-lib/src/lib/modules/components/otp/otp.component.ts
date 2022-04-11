import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { LoginStateService } from '../../../services/login-state.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ga-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.scss']
})
export class OtpComponent implements OnInit {

  mobileNumber: string = '';
  otpArray:any[] = []
  
  otpForm: FormGroup
  constructor(
    private fb:FormBuilder,
    private mobileService: LoginStateService,
    private router:Router
    
  ) {
    this.otpForm = this.fb.group({
      otpNumber:['', Validators.required]
    });    
    
  }

  get mobileOTPNumber(): AbstractControl{
    return this.otpForm.get('otpNumber')
  }
  ngOnInit(): void {
    this.mobileService.eNumbers$.subscribe( res => {
      console.log('mobileNumber', res) ;
      this.mobileNumber = res ;
      
    })
  }

  submitOtp(){
    this.otpArray = JSON.parse(localStorage.getItem('userInfo'))
    console.log(this.otpArray);
    
    this.otpArray.forEach(item => {
      if(this.mobileOTPNumber.value === item.mobileOTP && this.mobileNumber === item.mobileNumber) {
        this.router.navigate(['/address'])
       // console.log("MobileOTP", item.mobileOTP);
        let index = this.otpArray.findIndex(x => x.mobileOTP === this.mobileOTPNumber.value);
        console.log(index);
      } else {
        console.log("Something wrong");
      }
    })

  }

}
