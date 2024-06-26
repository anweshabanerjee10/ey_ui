import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { SuggestedProductsComponent } from './suggested-products/suggested-products.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { OrderComponent } from './order/order.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { OpenProductsDirective } from './directives/open-products.directive';
import { OpenProductDetailsDirective } from './directives/open-product-details.directive';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { JwtModule } from '@auth0/angular-jwt';
import { AdminComponent } from './admin/admin.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminOrdersComponent } from './admin-orders/admin-orders.component';
import { AdminCustomersComponent } from './admin-customers/admin-customers.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AuthInterceptor } from './admin/auth.interceptor';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { AdminUpdateProductComponent } from './admin-update-product/admin-update-product.component';
import { AdminDeleteProductComponent } from './admin-delete-product/admin-delete-product.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    SuggestedProductsComponent,
    HomeComponent,
    ProductsComponent,
    ProductDetailsComponent,
    CartComponent,
    OrderComponent,
    HeaderComponent,
    PageNotFoundComponent,
    OpenProductsDirective,
    OpenProductDetailsDirective,
    RegisterComponent,
    LoginComponent,
    AdminComponent,
    AdminDashboardComponent,
    AdminOrdersComponent,
    AdminCustomersComponent,
    AdminLoginComponent,
    //AdminDeleteProductComponent
    //AdminUpdateProductComponent,
    //AdminProductsComponent
  ],
  imports: [
    AdminDeleteProductComponent,
    AdminUpdateProductComponent,
    AdminProductsComponent,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return localStorage.getItem('user');
        },
        allowedDomains: ['localhost:7164'],
        //allowedDomains:[]
      },
    }),
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
  bootstrap: [AppComponent],
})
export class AppModule {}
