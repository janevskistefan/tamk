import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonList,
  IonToolbar,
  IonItem,
  IonLabel, IonIcon } from '@ionic/angular/standalone';
import { TranslateModule } from '@ngx-translate/core';
import { ProductService } from '@tamk-core/api/service/product.service';
import { Constants } from '@tamk-core/constants/constants';
import { CategoryVendor } from '@tamk-core/model/categoryVendor';
import { Vendor } from '@tamk-core/model/vendor';
import { Subject } from 'rxjs';

const modules = [TranslateModule, CommonModule, RouterModule];

const standaloneComponents = [
  IonItem,
  IonLabel,
  IonHeader,
  IonButtons,
  IonToolbar,
  IonBackButton,
  IonContent,
  IonList,
];

@Component({
  templateUrl: './single-vendor.page.html',
  styleUrl: './single-vendor.page.scss',
  standalone: true,
  imports: [IonIcon, ...modules, ...standaloneComponents],
})
export class SingleVendorPage implements OnInit {
  protected vendorCategories = new Subject<CategoryVendor[]>();

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    let vendorId = this.activatedRoute.snapshot.params[Constants.vendorId];
    this.productService.getAllCategoriesForVendor(vendorId).subscribe({
      next: (categoriesForVendor: CategoryVendor[]) =>
        this.vendorCategories.next(categoriesForVendor),
    });
  }
}
