import {Component} from '@angular/core';
import {IonContent, IonHeader, IonTitle, IonToolbar} from '@ionic/angular/standalone';
import {TranslateModule} from "@ngx-translate/core";

const modules = [
  TranslateModule
]

const standaloneComponents = [
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
]

@Component({
  templateUrl: 'categories.page.html',
  styleUrl: 'categories.page.scss',
  standalone: true,
  imports: [...modules, ...standaloneComponents]
})
export class CategoriesPage {

  constructor() {
  }

}
