import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'ga-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private fb:FormBuilder) {
    this.loginForm = this.fb.group({
      mobileNumber:['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  submitLogin(){
    
  }

}
