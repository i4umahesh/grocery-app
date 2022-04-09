import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'lib-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.scss']
})
export class AddressFormComponent implements OnInit {

  addressInfo: FormGroup
  constructor(
    private fb: FormBuilder
  ) { 
    this.addressInfo = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      location: ['', Validators.required],
      houseNumber: ['', Validators.required],
      emailID: ['',Validators.required],
      accountCreation: ['']

    })
  }

  ngOnInit(): void {
  }

}
