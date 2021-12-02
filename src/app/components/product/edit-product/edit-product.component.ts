import { Component, OnInit } from '@angular/core';
import {InventoryService} from "../../../services/inventory.service";

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  public products:any
  constructor(private inventoryService:InventoryService) { }

  ngOnInit(): void {
  }

  editProduct(): void {
    this.inventoryService
      .getProductsList()
      .subscribe((res: any) => {
        this.products = res._embedded.products;
      }, err => {
        console.log(err);
      });

  }


}
