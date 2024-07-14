import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Vendor} from "@tamk-core/model/vendor";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class VendorService {
  readonly #basePath = 'api/vendors'
  #httpClient = inject(HttpClient)

  getAllVendors(searchQuery: string | undefined = undefined): Observable<Vendor[]> {
    let path = this.#basePath;
    if (searchQuery)
      path = `${path}?searchQuery=${searchQuery}`
    return this.#httpClient.get<Vendor[]>(path);
  }

  getSingleVendor(id: number): Observable<Vendor> {
    const path = `${this.#basePath}/${id}`
    return this.#httpClient.get<Vendor>(path)
  }

}
