import {Component, inject, Input, OnInit} from '@angular/core';
import {
  IonBackButton, IonButton,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList, IonNav, IonRouterOutlet,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import {TranslateModule} from "@ngx-translate/core";
import {CategoryService} from "@tamk-core/api/service/category.service";
import {Category} from "@tamk-core/model/category";
import {Observable} from "rxjs";
import {AsyncPipe, CommonModule, LocationStrategy} from "@angular/common";
import {RoutingHelperService} from "@tamk-core/api/service/helpers/routing-helper.service";
import {addIcons} from "ionicons";
import {arrowBackSharp} from "ionicons/icons";

const components = [
  AsyncPipe
]

const modules = [
  TranslateModule,
  CommonModule
]

const standaloneComponents = [
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonIcon
]

@Component({
  templateUrl: 'categories.page.html',
  standalone: true,
  imports: [...modules, ...standaloneComponents, ...components, IonBackButton, IonButton]
})
export class CategoriesPage implements OnInit {

  @Input() vendorId: number | undefined;

  #categoryService = inject(CategoryService)
  #routingService = inject(RoutingHelperService)

  protected routerOutlet = inject(IonRouterOutlet)


  constructor() {
    addIcons({arrowBackSharp});
  }

  protected categories: Observable<Category[]> | undefined

  ngOnInit() {
    this.categories = this.#categoryService.getAllCategories()
  }

  protected onCategoryClick(categoryId: number) {
    if (this.vendorId) {
      this.#routingService
        .navigateToProductsFromSingleCategoryForVendor(this.vendorId, categoryId)
        .then()
    } else {
      this.#routingService
        .navigateToProductsFromSingleCategory(categoryId)
        .then()
    }
  }

}
