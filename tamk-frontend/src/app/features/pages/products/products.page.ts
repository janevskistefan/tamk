import {Component, inject, Input, OnInit} from '@angular/core';
import {StockService} from "@tamk-core/api/service/stock.service";
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem, IonLabel, IonList,
  IonToolbar
} from "@ionic/angular/standalone";
import {AsyncPipe} from "@angular/common";
import {TranslateModule} from "@ngx-translate/core";
import {Observable} from "rxjs";
import {Product} from "@tamk-core/model/product";
import {UrlHelperService} from "@tamk-core/api/service/helpers/url-helper.service";
import {RoutingHelperService} from "@tamk-core/api/service/helpers/routing-helper.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  imports: [
    IonBackButton,
    IonButtons,
    IonHeader,
    IonToolbar,
    IonContent,
    AsyncPipe,
    IonIcon,
    IonItem,
    IonLabel,
    IonList,
    TranslateModule
  ],
  standalone: true
})
export class ProductsPage implements OnInit {

  protected products = new Observable<Product[]>()

  @Input() vendorId: number | undefined;
  @Input() categoryId!: number;

  #stockService = inject(StockService)
  #routingService = inject(RoutingHelperService)

  ngOnInit() {
    this.products = this.#stockService.getAvailableProducts(this.vendorId, this.categoryId)
  }

  onSingleProductClick(productId: number) {
    this.#routingService
      .navigateToSingleProduct(productId)
      .then()
  }

}
