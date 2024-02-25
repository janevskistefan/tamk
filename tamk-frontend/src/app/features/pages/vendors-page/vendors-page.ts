import {Component, OnInit} from '@angular/core';
import {IonContent, IonHeader, IonTitle, IonToolbar} from '@ionic/angular/standalone';
import {TranslateModule} from "@ngx-translate/core";
import {ProductService} from "../../../core/api/product-service/product.service";

const imports = [
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  TranslateModule
]

@Component({
  selector: 'app-vendors-pages',
  templateUrl: 'vendors-page.html',
  styleUrls: ['vendors-page.scss'],
  standalone: true,
  imports: [...imports],
})
export class VendorsPage implements OnInit {
  constructor(private vendorService: ProductService) {
  }

  ngOnInit(): void {
    this.vendorService.getVendors(0, 5).subscribe({
      next: value => console.log(...value)
    })
  }

}
