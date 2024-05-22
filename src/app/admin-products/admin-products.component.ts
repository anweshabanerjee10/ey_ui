import { Component, OnInit } from '@angular/core';
import { Product } from '../models/models';
import { ProductServicesService } from '../services/product-services.service';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css'],
  standalone: true,
  imports:[FormsModule],
})
export class AdminProductsComponent implements OnInit {

   addProductMessage: string | undefined;
  constructor(private product: ProductServicesService) {}

  ngOnInit(): void {}

  submit(data: Product) {
    this.product.addProduct(data).subscribe((result) => {
      console.warn(result);
      if (result) {
        this.addProductMessage = 'Product is added successfully';
      }
      alert("Product has been added")
    });

    setTimeout(() => {
      this.addProductMessage=undefined
    }, 3000);
  }

}
