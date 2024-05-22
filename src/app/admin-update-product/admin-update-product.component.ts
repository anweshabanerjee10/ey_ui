import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/models';

import { ProductServicesService } from '../services/product-services.service';

@Component({
  selector: 'app-admin-update-product',
  templateUrl: './admin-update-product.component.html',
  styleUrls: ['./admin-update-product.component.css'],
  standalone: true,
  imports:[FormsModule],
})
export class AdminUpdateProductComponent implements OnInit {
  productData: undefined | Product;
  productMessage: undefined | string;
  constructor(private route: ActivatedRoute, private product: ProductServicesService) {}

  // productId: number = -1;

 ngOnInit(): void {
    // this.productId = Number(this.route.snapshot.paramMap.get('id'));
  //   console.warn(productId);
  //   productId &&
  //     this.product.updateProduct(productId).subscribe((data) => {
  //       console.warn(data);
  //       this.productData = data;
  //     });
   }
  submit(data: any) {
    if (this.productData) {
      data.id = this.productData.id;
    }

    this.product.updateProduct(data.Id, data.Price, data).subscribe((result) => {
      if (result) {
        this.productMessage = 'Product has updated';
      }
    });
    setTimeout(() => {
      this.productMessage = undefined;
    }, 3000);
    console.warn(data.id, data);
  }

}
