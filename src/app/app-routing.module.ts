import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AccueilComponent} from "./components/accueil/accueil.component";
import {LoginComponent} from "./components/login/login.component";
import {ProductListComponent} from "./components/product/product-list/product-list.component";
import {NewProductComponent} from "./components/product/new-product/new-product.component";
import {EditProductComponent} from "./components/product/edit-product/edit-product.component";

const routes: Routes = [
  { path: 'accueil', component: AccueilComponent },
  { path: 'login', component: LoginComponent },
  { path: 'productlist', component: ProductListComponent },
  { path: 'newproduct', component: NewProductComponent},
  { path: 'editproduct', component: EditProductComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
