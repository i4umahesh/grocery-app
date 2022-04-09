import { NgModule } from '@angular/core';
import { AddAddressComponent } from './add-address.component';
import { AddressFormComponent } from './modules/components/address-form/address-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AddAddressComponent,
    AddressFormComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    AddAddressComponent,
    AddressFormComponent
  ]
})
export class AddAddressModule { }
