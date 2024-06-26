import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Subject, window } from 'rxjs';
import { Admin, Cart, Payment, Product, User } from '../models/models';
import { NavigationService } from './navigation.service';

@Injectable({
  providedIn: 'root',
})
export class UtilityService {
  changeCart = new Subject();

  constructor(
    private navigationService: NavigationService,
    private jwt: JwtHelperService
  ) {}

  applyDiscount(price: number, discount: number): number {
    let finalPrice: number = price - price * (discount / 100);
    return finalPrice;
  }

  // JWT Helper Service : npm install @auth0/angular-jwt

  getUser(): User {
    let token = this.jwt.decodeToken();
    let user: User = {
      id: token.id,
      firstName: token.firstName,
      lastName: token.lastName,
      address: token.address,
      mobile: token.mobile,
      email: token.email,
      password: '',
      createdAt: token.createdAt,
      modifiedAt: token.modifiedAt,
    };
    return user;
  }

  getAdmin(): Admin {
    let token = this.jwt.decodeToken();
    let admin: Admin = {
      id: token.id,
      email: token.email,
      password: '',
    };
    return admin;
  }


  setUser(token: string) {
    localStorage.setItem('user', token);
  }

  setAdmin(token: string) {
    localStorage.setItem('admin', token);
  }


  isLoggedIn() {
    return localStorage.getItem('user') ? true : false;
  }

  isAdminLoggedIn() {
    return localStorage.getItem('admin') ? true : false;
  }

  logoutUser() {
    localStorage.removeItem('user');
  }
  logoutAdmin() {
    localStorage.removeItem('admin')
  }

  addToCart(product: Product) {
    let productid = product.id;
    let userid = this.getUser().id;

    this.navigationService.addToCart(userid, productid).subscribe((res) => {
      if (res.toString() === 'inserted') this.changeCart.next(1);
    });
  }

  calculatePayment(cart: Cart, payment: Payment) {
    payment.totalAmount = 0;
    payment.amountPaid = 0;
    payment.amountReduced = 0;

    for (let cartitem of cart.cartItems) {
      payment.totalAmount += cartitem.product.price;

      payment.amountReduced +=
        cartitem.product.price -
        this.applyDiscount(
          cartitem.product.price,
          cartitem.product.offer.discount
        );

      payment.amountPaid += this.applyDiscount(
        cartitem.product.price+0.18*cartitem.product.price,
        cartitem.product.offer.discount
      );
    }

    
    if(payment.amountPaid)
    payment.amountPaid+=payment.shipingCharges = 40;
  }

  calculatePricePaid(cart: Cart) {
    let pricepaid = 0;
    for (let cartitem of cart.cartItems) {
      pricepaid += this.applyDiscount(
        cartitem.product.price,
        cartitem.product.offer.discount
      );
    }
    return pricepaid;
  }

  orderTheCart() {
    
  }
}
