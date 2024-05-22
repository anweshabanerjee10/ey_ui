import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetOrderListService {

   _http: HttpClient
  
  constructor(httpRef: HttpClient) {
    
    this._http=httpRef
    
    
  }

  orderData:any=[];

  getOrderData() {
    let url = 'https://localhost:7164/api/Shopping/GetOrderList';
    this._http.get(url).subscribe((data) => {
      this.orderData = data;
    })

    
  }


}
