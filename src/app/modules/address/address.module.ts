import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddressRoutingModule } from './address-routing.module';
import { AddressPageComponent } from './components/address-page/address-page.component';
import { AddAddressModule } from '../../../../projects/add-address/src/lib/add-address.module';


@NgModule({
  declarations: [
    AddressPageComponent
  ],
  imports: [
    CommonModule,
    AddressRoutingModule,
    AddAddressModule
  ]
})
export class AddressModule { }
