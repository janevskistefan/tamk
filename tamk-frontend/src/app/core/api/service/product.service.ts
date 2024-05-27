import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { Vendor } from '../../model/vendor';
import { Category } from '@tamk-core/model/category';
import { CategoryVendor } from '@tamk-core/model/categoryVendor';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  path = 'http://localhost:8080/api';

  constructor(private httpClient: HttpClient) {}

  getVendors(size: number) {
    return this.httpClient.get(`${this.path}/vendors?size=${size}`).pipe(
      map((response: any) => {
        return response.content.map((result: any) => {
          return {
            id: result.id,
            name: result.name,
            slogan: result.slogan,
            logoUrl: result.logoUrl,
          };
        }) as Vendor[];
      })
    );
  }

  getAllCategories(size: number) {
    return this.httpClient
      .get(`${this.path}/categories?size=size=${size}`)
      .pipe(
        map((reponse: any) => {
          return reponse.content.map((result: any) => {
            return {
              id: result.id,
              name: result.name,
              imageUrl: result.imageUrl,
            };
          }) as Category[];
        })
      );
  }

  getAllCategoriesForVendor(vendorId: number) {
    return this.httpClient.get<CategoryVendor[]>(
      `${this.path}/filter-categories-by-vendor/${vendorId}`
    );
  }
}
