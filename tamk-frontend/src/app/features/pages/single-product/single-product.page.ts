import {Component, inject, Input, OnInit} from '@angular/core';
import {Product} from "@tamk-core/model/product";
import {ProductService} from "@tamk-core/api/service/product.service";
import {IonBackButton, IonContent, IonHeader, IonTitle, IonToolbar} from "@ionic/angular/standalone";
import {TranslateModule} from "@ngx-translate/core";

@Component({
  templateUrl: './single-product.page.html',
  imports: [
    IonBackButton,
    IonHeader,
    IonTitle,
    IonToolbar,
    TranslateModule,
    IonContent
  ],
  standalone: true
})
export class SingleProductPage implements OnInit {

  #productService = inject(ProductService)

  @Input() productId!: number

  protected product: Product | undefined

  ngOnInit(): void {
    this.#productService
      .getSingleProduct(this.productId)
      .subscribe({
        next: response => this.product = response
      })
  }


}
