import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class BillingService {

  constructor(private http:HttpClient) { }
  getInvoiceById(id: any):Observable<any> {
    return this.http.get(environment.url+"/BILLING-SERVICE/invoices/"+id)
  }

  // this function is for getting products for a bill by id
  getProductItemsById(id: any): Observable<any>{
    return this.http.get(environment.url+"/BILLING-SERVICE/invoices/"+id+"/productItems")
  }

}
