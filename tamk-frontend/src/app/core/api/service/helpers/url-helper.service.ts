import {inject, Injectable} from '@angular/core';
import {Router} from "@angular/router";
import {Constants} from "@tamk-core/constants/constants";

@Injectable({
  providedIn: 'root'
})
export class UrlHelperService {

  constructUrlWithQueryParameters(baseUrl: string, queryParams: Map<string, any>): string {
    let url = baseUrl
    queryParams.forEach((queryParamValue, queryParamName, map) => {
      if (url === baseUrl && queryParamValue !== undefined) {
        url = url.concat(`?`).concat(`${queryParamName}=${queryParamValue}`)
      } else if (url !== baseUrl && queryParamValue !== undefined) {
        url = url.concat(`&`).concat(`${queryParamName}=${queryParamValue}`)
      }
    })
    return url;
  }

  constructGetAllCategoriesPath = (searchQuery: string | undefined) => {
    let path = Constants.categoriesBasePath
    if (searchQuery)
        path = `${path}/?searchQuery=${searchQuery}`
    return path
  }

  constructGetSingleCategoryPath = (categoryId: number) => `${Constants.categoriesBasePath}/${categoryId}`

  constructGetSingleProductPath = (productId: number) => `${Constants.productsBasePath}/${productId}`

}
