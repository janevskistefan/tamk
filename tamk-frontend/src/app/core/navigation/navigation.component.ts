import { Component } from "@angular/core";
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';

@Component({
    selector: 'navigation-tabs',
    templateUrl: 'navigation.tabs.html',
    styleUrls: ['navigation.tabs.scss'],
    standalone: true,
    imports: [IonHeader, IonToolbar, IonTitle, IonContent],
  })
  export class NavigationTabs {
    constructor() {}
  }
  