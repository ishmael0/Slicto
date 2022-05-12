import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AddressesComponent } from './addresses/addresses.component';
import { BrandsComponent } from './brands/brands.component';
import { UserInformtionComponent } from './user-informtion/user-informtion.component';
import { OrdersComponent } from './orders/orders.component';
import { RegisterComponent } from './register/register.component';
import { ProductsComponent } from './products/products.component';
import { BasketComponent } from './basket/basket.component';
import { IndexComponent } from './index/index.component';



var routes: Routes = [
  { path: '', redirectTo: 'index', pathMatch:'full' },
  { path: 'index', component: IndexComponent },

]



@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    AddressesComponent,
    BrandsComponent,
    UserInformtionComponent,
    OrdersComponent,
    RegisterComponent,
    ProductsComponent,
    BasketComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
