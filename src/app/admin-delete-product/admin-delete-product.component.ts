import { Component,  OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/models';
import { ProductServicesService } from '../services/product-services.service';

@Component({
  selector: 'app-admin-delete-product',
  templateUrl: './admin-delete-product.component.html',
  styleUrls: ['./admin-delete-product.component.css'],
  standalone: true,
  imports:[FormsModule]
 
})
export class AdminDeleteProductComponent implements OnInit {

  productData: undefined | Product;
  productMessage: undefined | string;
  constructor(private route: ActivatedRoute, private product: ProductServicesService) {}

  // productId: number = -1;

 ngOnInit(): void {
    
   }
  submit(data: any) {
    if (this.productData) {
      data.id = this.productData.id;
    }

    this.product.deleteProduct(data.Id).subscribe((result) => {
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
