import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'grocery-app';
  
  UserDetails = [
    {mobileNumber:"8888888888", mobileOTP:"888888"},
    {mobileNumber:"9999999999", mobileOTP:"999999"},
    {mobileNumber:"7777777777", mobileOTP:"777777"},
    {mobileNumber:"6666666666", mobileOTP:"666666"}

  ];
  
  constructor(){
    if (!localStorage['userInfo']){
    localStorage.setItem('userInfo', JSON.stringify(this.UserDetails));
    }
  }
  
  
}
