import { Component, OnInit } from '@angular/core';
import { GetOrderListService } from '../services/get-order-list.service';

@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.css']
})
export class AdminOrdersComponent  {
 _getorderobj:GetOrderListService
  constructor(_getorderref: GetOrderListService) {
    
    this._getorderobj = _getorderref;
  }
    
  
}
