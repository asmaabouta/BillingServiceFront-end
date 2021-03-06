import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  constructor(private http:HttpClient) { }

  getProductsList():Observable<any> {
    return this.http.get(environment.url+"/INVENTORY-SERVICE/products")
  }

}
