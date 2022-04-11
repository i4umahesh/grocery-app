import { NgModule } from '@angular/core';
import { AddAddressComponent } from './add-address.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddressFormComponent } from './modules/components/address-form/address-form.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AddAddressComponent,
    AddressFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    AddAddressComponent,
    AddressFormComponent,
  ],
  providers: [
    
  ]
})
export class AddAddressModule { }
