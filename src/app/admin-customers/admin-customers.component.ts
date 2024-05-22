import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GetCustomerListService } from '../services/get-customer-list.service';

@Component({
  selector: 'app-admin-customers',
  templateUrl: './admin-customers.component.html',
  styleUrls: ['./admin-customers.component.css']
})
export class AdminCustomersComponent  {
 

  _getcustobj:GetCustomerListService
  constructor(_getcusref: GetCustomerListService) {
    
    this._getcustobj = _getcusref;
    
    
  }

  

}
