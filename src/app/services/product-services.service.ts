import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class ProductServicesService {

  


  constructor(private http: HttpClient) { }
  addProduct(data: Product) {
    console.log(data);
    return this.http.post('https://localhost:7164/api/Shopping/Addnewproduct', data);
  }
 

  deleteProduct(id: number) {
    return this.http.delete(`https://localhost:7164/api/Shopping/Deleteproduct?id=${id}`);
  }

  

  updateProduct(id: number, price: number, data: Product) {
    // console.log(`https://localhost:7164/api/Shopping/Updateproduct?id=${id}&price=${data.price}`);
    console.log(data);
    return this.http.put<Product>(
      `https://localhost:7164/api/Shopping/Updateproduct?id=${id}&price=${price}`, data);
  }
 
}

  
