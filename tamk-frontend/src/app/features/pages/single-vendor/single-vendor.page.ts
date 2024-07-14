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
  standalone: true,
  imports: [IonIcon, ...modules, ...standaloneComponents],
})
export class SingleVendorPage {
}
