import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Product} from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  public api='https://amsbillingserver.herokuapp.com/api/products';
  constructor(private http:HttpClient) { }

getAllProducts(){
  return this.http.get(this.api);
}

addNewProduct(body){
  return this.http.post(this.api,body);
}

updateProduct(body){
  return this.http.put(this.api+'/'+body._id,body);
}

deleteProduct(id){
  return this.http.delete(this.api+'/'+id);
}

}
