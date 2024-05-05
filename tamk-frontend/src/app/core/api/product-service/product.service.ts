import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs";
import {VendorListResponse} from "../../model/vendor-list-response";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  path = "http://localhost:8080/api"

  constructor(private httpClient: HttpClient) {
  }

  getVendors(size: number) {
    return this.httpClient
      .get(`${this.path}/vendors?pageNumber=1&size=${size}`)
      .pipe(
        map((response: any) => {
          return response.content.map((result: any) => {
            return {
              id: result.id,
              name: result.name,
              slogan: result.slogan,
              logoUrl: result.logoUrl
            }
          }) as VendorListResponse[]
        })
      )
  }

  getAllCategoriesForVendor(vendorId: number, size: number) {
    return this.httpClient
    .get(`${this.path}/`)
  }
}
