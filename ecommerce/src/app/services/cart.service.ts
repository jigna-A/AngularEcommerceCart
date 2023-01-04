import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItemList = new BehaviorSubject([])

  cartItemListArray:any=[]

  constructor() { }
getProducts(){
   return this.cartItemList.asObservable()
}
getmenProducts(){
  return this.cartItemList.asObservable()
}

  addToCart(products:any){
    this.cartItemListArray.push(products)
    this.cartItemList.next(this.cartItemListArray)
    
  
  }

  getTotalPrice(){
    let grandtotal=0
    this.cartItemListArray.map((item:any)=>{
      grandtotal += item.price
      console.log( grandtotal);

      
    })
    return grandtotal

  }

  removeItemCart(products:any){
    this.cartItemListArray.map((item:any,index:any)=>{
      if(products.id==item.id){
        this.cartItemListArray.splice(index,1)


      }
    })
    this.cartItemList.next(this.cartItemListArray)
  }

  removeAllItemCart(){
       this.cartItemListArray=[]
       this.cartItemList.next(this.cartItemListArray)
  }
    
}
