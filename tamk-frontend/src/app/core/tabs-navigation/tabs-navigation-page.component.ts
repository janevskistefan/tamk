import {Component, EnvironmentInjector, inject} from '@angular/core';
import {IonIcon, IonLabel, IonTabBar, IonTabButton, IonTabs} from '@ionic/angular/standalone';
import {addIcons} from 'ionicons';
import {TranslateModule} from "@ngx-translate/core";
import {grid, search, storefront} from 'ionicons/icons';
import {RoutingHelperService} from "@tamk-core/api/service/helpers/routing-helper.service";

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs-navigation-page.component.html',
  standalone: true,
  imports: [IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, TranslateModule],
})
export class TabsNavigationPage {

  #routingService = inject(RoutingHelperService)

  constructor() {
    addIcons({storefront, grid, search});
  }

  protected navigateToVendors = () => this.#routingService.navigateToVendors()
  protected navigateToCategories = () => this.#routingService.navigateToCategories()
  protected navigateToSearch = () => this.#routingService.navigateToSearch()
}
