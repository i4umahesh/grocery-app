import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 {
   path:"login",
   loadChildren: () => import("./modules/app-login/app-login.module").then(m => m.AppLoginModule)
 },
 {
   path: 'address',
   loadChildren:() => import("./modules/address/address.module").then(m => m.AddressModule)
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
