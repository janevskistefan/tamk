import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
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
import { TranslateModule } from '@ngx-translate/core';
import { ProductService } from '@tamk-core/api/service/product.service';
import { Vendor } from '@tamk-core/model/vendor';
import { Subject } from 'rxjs';

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
  styleUrl: 'vendors.page.scss',
  standalone: true,
  imports: [...modules, ...standaloneComponents],
})
export class VendorsPage implements OnInit {
  protected vendors = new Subject<Vendor[]>();

  constructor(private vendorService: ProductService, private router: Router) {}

  ngOnInit(): void {
    this.vendorService.getVendors(10).subscribe({
      next: (vendorResponseList) => this.vendors.next(vendorResponseList),
    });
  }

  protected onVendorClick(vendorId: number) {
    this.router.navigateByUrl(`/vendors/${vendorId}`);
  }
}
