import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, Observable} from 'rxjs';
import {UrlHelperService} from "@tamk-core/api/service/helpers/url-helper.service";
import {Product} from "@tamk-core/model/product";

@Injectable({
  providedIn: 'root',
})
export class StockService {

  readonly #basePath = 'api/stock'
  #httpClient = inject(HttpClient)
  #urlHelperService = inject(UrlHelperService)

  getAvailableProducts(
    vendorId: number | undefined = undefined,
    categoryId: number | undefined = undefined,
    searchQuery: string | undefined = undefined,
    pageNumber: number | undefined = undefined,
    pageSize: number | undefined = undefined
  ): Observable<Product[]> {
    let queryParamMap = new Map<string, any>([
      ['vendorId', vendorId],
      ['categoryId', categoryId],
      ['searchQuery', searchQuery],
      ['pageNumber', pageNumber],
      ['pageSize', pageSize]
    ])
    let path = this.#urlHelperService.constructUrlWithQueryParameters(this.#basePath, queryParamMap)
    return this.#httpClient.get<any>(path).pipe(map((response) => response.content as Product[]))
  }
}
