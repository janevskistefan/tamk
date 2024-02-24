import {Component} from '@angular/core';
import {IonContent, IonHeader, IonTitle, IonToolbar} from '@ionic/angular/standalone';
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'app-vendors-pages',
  templateUrl: 'vendors-page.html',
  styleUrls: ['vendors-page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, TranslateModule],
})
export class VendorsPage {
  constructor() {
  }
}
