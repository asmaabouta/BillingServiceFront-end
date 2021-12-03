import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AccueilComponent} from "./components/accueil/accueil.component";
import {LoginComponent} from "./components/login/login.component";
import {ProductListComponent} from "./components/product/product-list/product-list.component";
import {NewProductComponent} from "./components/product/new-product/new-product.component";
import {EditProductComponent} from "./components/product/edit-product/edit-product.component";
import {InvoiceListComponent} from "./components/invoice/invoice-list/invoice-list.component";
import {NavbarComponent} from "./components/navbar/navbar.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {path: 'admin' , component: NavbarComponent,
  children:[
    { path: 'accueil', component: AccueilComponent },
    { path: 'productlist', component: ProductListComponent },
    { path: 'newproduct', component: NewProductComponent},
    { path: 'editproduct', component: EditProductComponent},
    { path: 'invoicelist', component: InvoiceListComponent},
  ]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
