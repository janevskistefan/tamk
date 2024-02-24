import {Component} from '@angular/core';
import {IonContent, IonHeader, IonTitle, IonToolbar} from '@ionic/angular/standalone';
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'app-categories-page',
  templateUrl: 'categories-page.component.html',
  styleUrls: ['categories-page.component.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, TranslateModule]
})
export class CategoriesPage {

  constructor() {}

}
