import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetCustomerListService {

  _http: HttpClient
  
  constructor(httpRef: HttpClient) {
    
    this._http=httpRef
    
  //   this.get('http://example.com/api/data').subscribe(
  //     (response) => {
  //       this.responseData = response;
  //       console.log('Response:', this.responseData);
  //     },
  //     (error) => {
  //       console.error('Error:', error);
  //     }
    
    
  }

  customerData:any=[];

  getCustomerData() {
    let url = 'https://localhost:7164/api/Shopping/GetCustomers';
    this._http.get(url).subscribe((data) => {
      this.customerData = data;
    })

    
  }


  
}
