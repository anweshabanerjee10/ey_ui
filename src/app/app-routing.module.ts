import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { OrderComponent } from './order/order.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsComponent } from './products/products.component';
import { AdminComponent } from './admin/admin.component';
import { AdminCustomersComponent } from './admin-customers/admin-customers.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminOrdersComponent } from './admin-orders/admin-orders.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, title: 'Home' },
  { path: 'products', component: ProductsComponent, title: 'Products'},
  { path: 'product-details', component: ProductDetailsComponent, title: 'Product Detail' },
  { path: 'cart', component: CartComponent, title: 'Cart' },
  { path: 'orders', component: OrderComponent, title: 'Orders' },
  { path: 'admin', component: AdminComponent, title: 'Admin',
    children: [
      {
        path: '',
        component: AdminDashboardComponent,
        title: 'Admin'
      },
      {
        path: 'orders',
        component: AdminOrdersComponent,
        title: 'Orders'
      },
      {
        path: 'customers',
        component: AdminCustomersComponent,
        title: 'Customers'
      }
    ]
   },
   {path: 'admin/login', component: AdminLoginComponent, title: 'Admin Login'},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
