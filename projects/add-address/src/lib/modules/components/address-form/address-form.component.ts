import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'lib-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.scss']
})
export class AddressFormComponent implements OnInit {

  addressForm: FormGroup;

  addressDetails:any[] = [];

  localData:any[] = [];

  constructor(
    private fb: FormBuilder
  ) { 
    this.addressForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      location: ['', Validators.required],
      houseNumber: ['', Validators.required],
      emailID: ['',Validators.required],
      accountCreation: ['', Validators.requiredTrue]
    });
  }

  ngOnInit(): void {
  }
  submitAddress(){
   // console.log(this.addressForm.value)
    this.addressDetails = this.addressForm.value
    this.localData = JSON.parse(localStorage.getItem('userInfo'));

    this.localData.push(this.addressDetails);
    localStorage.setItem("userInfo", JSON.stringify(this.localData));
    var result = localStorage.getItem("userInfo");
    //console.log(result);

    //localStorage.getItem("userInfo")
    //localStorage.setItem('userInfo', JSON.stringify(this.addressDetails));

    // const currentArray = this.storage.get(this.STORAGE_KEY);
    // const index = currentArray.findIndex(e => e.id === id);
    // if(index >= 0) {
    //   currentArray[index] = {...currentArray[index], ...{Name:Name}}; 
    //   this.storage.set(this.STORAGE_KEY, currentArray);
    //   this.notifiy.showInfo('Name Updated'  , '');
    // } else {
    //   this.notifiy.showFailure('Error'  , '');
    // }
  }
}
