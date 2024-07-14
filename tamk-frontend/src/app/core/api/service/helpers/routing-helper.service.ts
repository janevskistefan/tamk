import {inject, Injectable} from '@angular/core';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class RoutingHelperService {



  #router = inject(Router)

  #pathToVendorCategories = (vendorId: number) => `vendors/${vendorId}/categories`
  #pathToProductsFromSingleCategoryForVendor = (vendorId: number, categoryId: number) => `/vendors/${vendorId}/categories/${categoryId}`
  #pathToProductsFromSingleCategory = (categoryId: number) => `categories/${categoryId}`
  #pathToSingleProduct = (productId: number) => `products/${productId}`

  navigateToVendors = () => this.#router.navigateByUrl('/vendors')
  navigateToCategories = () => this.#router.navigateByUrl('/categories')
  navigateToSearch = () => this.#router.navigateByUrl('/search')

  navigateToCategoriesForVendor = (vendorId: number) =>
    this.#router.navigateByUrl(this.#pathToVendorCategories(vendorId))

  navigateToProductsFromSingleCategoryForVendor = (vendorId: number, categoryId: number) =>
    this.#router.navigateByUrl(this.#pathToProductsFromSingleCategoryForVendor(vendorId, categoryId))

  navigateToProductsFromSingleCategory = (categoryId: number) =>
    this.#router.navigateByUrl(this.#pathToProductsFromSingleCategory(categoryId))

  navigateToSingleProduct = (productId: number) =>
    this.#router.navigateByUrl(this.#pathToSingleProduct(productId))


}
