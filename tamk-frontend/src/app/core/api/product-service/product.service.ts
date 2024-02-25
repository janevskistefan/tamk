import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs";
import {VendorListResponse} from "../../model/vendor-list-response";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  path = "http://localhost:8080/api/vendors"

  constructor(private httpClient: HttpClient) {
  }

  getVendors(pageNumber: number, size: number) {
    return this.httpClient
      .get(`${this.path}?pageNumber=${pageNumber}&size=${size}`)
      .pipe(
        map((response: any) => {
          return response.content.map((result: any) => {
            return {
              id: result.id,
              name: result.name,
              logoUrl: result.logoUrl
            }
          }) as VendorListResponse[]
        })
      )
  }
}
