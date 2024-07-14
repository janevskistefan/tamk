import {CommonModule} from '@angular/common';
import {Component, inject, OnInit, ViewChild} from '@angular/core';
import {RouterModule} from '@angular/router';
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
  IonMenuButton,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import {TranslateModule} from '@ngx-translate/core';
import {Vendor} from '@tamk-core/model/vendor';
import {Observable} from 'rxjs';
import {VendorService} from "@tamk-core/api/service/vendor.service";
import {RoutingHelperService} from "@tamk-core/api/service/helpers/routing-helper.service";
import {AppHeaderComponent} from "@tamk-common/components/app-header/app-header.component";

const modules = [TranslateModule, CommonModule, RouterModule];

const standaloneComponents = [
  IonItem,
  IonList,
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonLabel,
  IonIcon,
  IonButtons,
  IonMenuButton,
];

@Component({
  templateUrl: 'vendors.page.html',
  standalone: true,
  imports: [...modules, ...standaloneComponents, AppHeaderComponent],
})
export class VendorsPage implements OnInit {

  @ViewChild(AppHeaderComponent) header!: AppHeaderComponent;

  protected vendors = new Observable<Vendor[]>()

  #vendorService = inject(VendorService)
  #routingService = inject(RoutingHelperService)

  ngOnInit(): void {
    this.vendors = this.#vendorService.getAllVendors()
  }

  protected onVendorClick(vendorId: number) {
    this.#routingService
      .navigateToCategoriesForVendor(vendorId)
      .then()
  }
}
