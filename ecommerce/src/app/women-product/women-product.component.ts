import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { CartService } from '../services/cart.service';
import { WishlistService } from '../services/wishlist.service';

@Component({
  selector: 'app-women-product',
  templateUrl: './women-product.component.html',
  styleUrls: ['./women-product.component.css']
})
export class WomenProductComponent implements OnInit {
  productDetails:any
  search:any

  constructor(private api:ApiService,private wlist:WishlistService,private cartService:CartService) { }

  ngOnInit(): void {
    this.api.getwomenproduct()
    .subscribe((result:any)=>{
      // console.log(result.products);
      this.productDetails = result.products
      this.productDetails.forEach((item:any)=>{
        Object.assign(item,{quantity:1,total:item.price})

      })
  })
  this.api.searchTerm.subscribe((data)=>{
    this.search=data
  
 


  })
  

}
addTowishlist(products:any){
  this.wlist.addTowList(products)
  alert("Product Added to your Wishlist")
    }
    addToCart(products:any){
      this.cartService.addToCart(products)
      alert("Product Added to Your Cart")
  
    }
}
