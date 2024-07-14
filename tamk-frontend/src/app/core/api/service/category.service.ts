import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Category} from "@tamk-core/model/category";
import {Observable} from "rxjs";
import {Constants} from "@tamk-core/constants/constants";
import {UrlHelperService} from "@tamk-core/api/service/helpers/url-helper.service";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  #httpClient = inject(HttpClient)
  #urlHelperService = inject(UrlHelperService)

  getAllCategories(searchQuery: string | undefined = undefined): Observable<Category[]> {
    return this.#httpClient.get<Category[]>(this.#urlHelperService.constructGetAllCategoriesPath(searchQuery))
  }

  getSingleCategory(categoryId: number): Observable<Category> {
    return this.#httpClient.get<Category>(this.#urlHelperService.constructGetSingleCategoryPath(categoryId))
  }

}
