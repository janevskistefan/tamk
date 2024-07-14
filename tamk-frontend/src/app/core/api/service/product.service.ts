import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Product} from "@tamk-core/model/product";
import {Observable} from "rxjs";
import {UrlHelperService} from "@tamk-core/api/service/helpers/url-helper.service";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  #httpClient = inject(HttpClient)
  #urlHelperService = inject(UrlHelperService)

  getSingleProduct(productId: number): Observable<Product> {
    return this.#httpClient.get<Product>(this.#urlHelperService.constructGetSingleProductPath(productId))
  }

}
