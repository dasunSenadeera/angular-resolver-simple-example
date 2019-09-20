import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { customerList } from "../data/data";
import { Customer } from "../model/Customer";

@Injectable()
export class CustomerResolver implements Resolve<Promise<any>> {
  constructor(private http: HttpClient) {}

  customerList: Customer[] = customerList;
  resolve() {
    // Here is a mock promise which gets 2 seconds
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = { res: this.customerList };
        resolve(data);
      }, 2000);
    });
  }
}
