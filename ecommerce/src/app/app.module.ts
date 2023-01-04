import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { ProductListComponent } from './product-list/product-list.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CartComponent } from './cart/cart.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { AllproductsComponent } from './allproducts/allproducts.component';
import { HttpClientModule } from '@angular/common/http';
import { FilterPipe } from './pipes/filter.pipe';
import { HomeComponent } from './home/home.component';
import { MenProductComponent } from './men-product/men-product.component';
import { WomenProductComponent } from './women-product/women-product.component';
import { CheckoutComponent } from './checkout/checkout.component';

@NgModule({
  declarations: [
    AppComponent,
    // ProductListComponent,
    HeaderComponent,
    FooterComponent,
    CartComponent,
    WishlistComponent,
    AllproductsComponent,
    FilterPipe,
    HomeComponent,
    MenProductComponent,
    WomenProductComponent,
    CheckoutComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
