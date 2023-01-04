 import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(productlist:any[],filterString:string,propName:string)  {
    const result:any=[];
    if(!productlist || filterString=='' || propName==''){
      return productlist
    }
    productlist.forEach((product:any)=>{
      if(product[propName].trim().toLowerCase().includes(filterString.toLowerCase())){
        result.push(product)
      }

    })
    return result;
  }

}



