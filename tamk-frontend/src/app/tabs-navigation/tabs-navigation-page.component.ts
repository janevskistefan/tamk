import {Component, EnvironmentInjector, inject} from '@angular/core';
import {IonIcon, IonLabel, IonTabBar, IonTabButton, IonTabs} from '@ionic/angular/standalone';
import {addIcons} from 'ionicons';
import {TranslateModule} from "@ngx-translate/core";
import {grid, search, storefront} from 'ionicons/icons';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs-navigation-page.component.html',
  styleUrls: ['tabs-navigation-page.component.scss'],
  standalone: true,
  imports: [IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, TranslateModule],
})
export class TabsNavigationPage {
  public environmentInjector = inject(EnvironmentInjector);

  constructor() {
    addIcons({storefront, grid, search});
  }
}
