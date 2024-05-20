import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.css']
})
export class AdminOrdersComponent implements OnInit {
  ordersList = [
    {
      orderId: 123,
      customerId: 12,
      customerName: 'Mr. Fresh',
      status: 'Delivered',
      orderDate: new Date(),
      price: 123.4
    },
    {
      orderId: 143,
      customerId: 11,
      customerName: 'Nijesh',
      status: 'Pending',
      orderDate: new Date(),
      price: 23.56
    },
    {
      orderId: 124,
      customerId: 22,
      customerName: 'Naruto',
      status: 'Cancelled',
      orderDate: new Date(),
      price: 113.4
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
