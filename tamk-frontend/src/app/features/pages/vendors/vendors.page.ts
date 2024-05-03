import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  IonContent,
  IonHeader,
  IonItem,
  IonList,
  IonMenu,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { TranslateModule } from '@ngx-translate/core';
import { ProductService } from '@tamk-core/api/product-service/product.service';
import { VendorListResponse } from '@tamk-core/model/vendor-list-response';
import { GenericListItemComponent } from '@tamk-components/generic-list-item/generic-list-item.component';
import { Subject } from 'rxjs';

const modules = [TranslateModule, CommonModule];

const standaloneComponents = [
  IonItem,
  IonList,
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  GenericListItemComponent,
];

@Component({
  templateUrl: 'vendors.page.html',
  styleUrl: 'vendors.page.scss',
  standalone: true,
  imports: [...modules, ...standaloneComponents],
})
export class VendorsPage implements OnInit {
  protected vendors = new Subject<VendorListResponse[]>();

  constructor(private vendorService: ProductService) {}

  ngOnInit(): void {
    this.vendorService.getVendors(0, 5).subscribe({
      next: (vendorResponseList) => this.vendors.next(vendorResponseList),
    });
  }
}
