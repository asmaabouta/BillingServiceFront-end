import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './components/customer/customer/customer.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { LoginComponent } from './components/login/login.component';
import { ProductListComponent } from './components/product/product-list/product-list.component';
import { NewProductComponent } from './components/product/new-product/new-product.component';
import { EditProductComponent } from './components/product/edit-product/edit-product.component';
import {FormsModule} from "@angular/forms";
import { InvoiceListComponent } from './components/invoice/invoice-list/invoice-list.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    AccueilComponent,
    LoginComponent,
    ProductListComponent,
    NewProductComponent,
    EditProductComponent,
    InvoiceListComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
