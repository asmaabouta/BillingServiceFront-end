import { Component, OnInit } from '@angular/core';
import {InventoryService} from "../../../services/inventory.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  public products: any
  constructor(private inventoryService:InventoryService) { }

  ngOnInit(): void {
    //this.getProducts()
  }

  getProducts():void{
    this.inventoryService
      .getProductsList()
      .subscribe((res: any) => {
        this.products = res._embedded.products;
      }, err => {
        console.log(err);
      });



  }

}
