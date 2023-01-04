import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllproductsComponent } from './allproducts/allproducts.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { HomeComponent } from './home/home.component';
import { MenProductComponent } from './men-product/men-product.component';
// import { ProductListComponent } from './product-list/product-list.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { WomenProductComponent } from './women-product/women-product.component';

const routes: Routes = [
  {
    path:'',component:HomeComponent
  },
  {
    path:'cart',component:CartComponent
  },
  {
    path:'wishlist',component:WishlistComponent
  },
  {
    path:'allproduct',component:AllproductsComponent
  },
  {
    path:'menproduct',component:MenProductComponent
  },
  {
    path:'womenproduct',component:WomenProductComponent
  },
  // {
  //   path:'checkout',component:CheckoutComponent
  // }
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
