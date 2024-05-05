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
} from '@ionic/angular/standalone';
import { TranslateModule } from '@ngx-translate/core';
import { Constants } from '@tamk-core/constants/constants';

const modules = [TranslateModule, CommonModule, RouterModule];

const standaloneComponents = [
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
  imports: [...standaloneComponents],
})
export class SingleVendorPage implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
    private 
  ) {}

  ngOnInit(): void {
    console.log(this.activatedRoute.snapshot.params[Constants.vendorId]);
  }
}
