import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  productsArray:any=[]
  totalPrice=0

  constructor(private cartService:CartService, private router:Router) { }

  ngOnInit(): void {
    this.cartService.getProducts().subscribe((data)=>{
      console.log(data);
      this.productsArray=data

    })
    this.cartService.getmenProducts().subscribe((data)=>{
      console.log(data);
      this.productsArray=data

    })
    
   this.totalPrice = this.cartService.getTotalPrice()

  }
  
  removeItemCart(item:any){
    this.cartService.removeItemCart(item)
    this.totalPrice = this.cartService.getTotalPrice()

  }
  
    removeAllItem(){
      this.cartService.removeAllItemCart()
    }
checkout(){
  alert('Your Order is Confirmed and Total Price is :$'+this.totalPrice)
  this.removeAllItem()

  this.router.navigateByUrl('/allproduct')

}
}
