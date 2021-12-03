import { Component, OnInit } from '@angular/core';
import {InventoryService} from "../../../services/inventory.service";
import {BillingService} from "../../../services/billing.service";

@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.css']
})
export class InvoiceListComponent implements OnInit {
  public invoice:any
  public productItems: any;
  public id:any
  constructor(private billingService:BillingService) { }

  ngOnInit(): void {
   // this.getInvoices()
  }

  handleIdChange(event: Event): void{
    this.id  = (event.target as HTMLInputElement).value

  }
  getInvoiceById():void{
    this.billingService
      .getInvoiceById(this.id)
      .subscribe((res: any) => {
        this.invoice = res;

      }, err => {
        console.log(err);
      });

    this.billingService
      .getProductItemsById(this.id)
      .subscribe((res: any)=>{
        this.productItems = res._embedded.productItems
        console.log(this.productItems);
      });

  }

}
