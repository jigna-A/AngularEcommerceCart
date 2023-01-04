import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  searchTerm = new BehaviorSubject("")

  constructor(private http:HttpClient) { }
  getProducts(){
    return this.http.get('http://localhost:3000/allProducts')
  }
  getMenproduct(){
    return this.http.get('http://localhost:3000/menProducts')
  }
  getwomenproduct(){
    return this.http.get('http://localhost:3000/womenProducts')

  }
}
