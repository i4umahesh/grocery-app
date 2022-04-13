import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
{
  path:"login",
  loadChildren: () => import("./modules/app-login/app-login.module").then(m => m.AppLoginModule)
},
{
  path: 'address',
  loadChildren:() => import("./modules/address/address.module").then(m => m.AddressModule)
},
{
  path:"products",
  loadChildren:() => import("./modules/products-page/products-page.module").then(m => m.ProductsPageModule)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
