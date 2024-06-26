import { Component, OnInit } from '@angular/core';
import { Product } from '../models/models';
import { FormsModule, } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ProductServicesService } from '../services/product-services.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
  

export class AdminDashboardComponent implements OnInit {

 

   addProductMessage: string | undefined;
  constructor(private product: ProductServicesService) {}

  ngOnInit(): void {}

  submit(data: Product) {
    this.product.addProduct(data).subscribe((result) => {
      console.warn(result);
      if (result) {
        this.addProductMessage = 'Product is added successfully';
      }
    });

    setTimeout(() => {
      this.addProductMessage=undefined
    }, 3000);
  }

}
