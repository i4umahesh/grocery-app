import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginStateService } from '../../../services/login-state.service';

@Component({
  selector: 'ga-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.scss']
})
export class OtpComponent implements OnInit {

  mobileNumber: string = '';
  
  otpForm: FormGroup
  constructor(
    private fb:FormBuilder,
    private mobileService: LoginStateService,
    private chageDetector: ChangeDetectorRef
  ) {
    this.otpForm = this.fb.group({
      otpNumber:['', Validators.required]
    });    
    
  }

  ngOnInit(): void {
    this.mobileService.eNumbers$.subscribe( res => {
      console.log('mobileNumber', res) ;
      this.mobileNumber = res ;
      
    })
  }

  submitOtp(){

  }

}
