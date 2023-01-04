import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { CartService } from '../services/cart.service';
import { WishlistService } from '../services/wishlist.service';

@Component({
  selector: 'app-men-product',
  templateUrl: './men-product.component.html',
  styleUrls: ['./men-product.component.css']
})
export class MenProductComponent implements OnInit {
  productDetails:any
  search:any

  constructor(private api:ApiService,private wlist:WishlistService,private cartService:CartService) { }

  ngOnInit(): void {
    this.api.getMenproduct()
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
