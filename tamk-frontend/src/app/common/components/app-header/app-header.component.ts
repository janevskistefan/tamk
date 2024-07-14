import {Component, Input} from '@angular/core';
import {IonicModule} from "@ionic/angular";

export type BreadcrumbItem = {
  label: string;
  url: string;
}

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'tamk-header',
  templateUrl: './app-header.component.html',
  imports: [
    IonicModule
  ],
  standalone: true
})
export class AppHeaderComponent {

  @Input() showBackButton!: boolean

  protected breadcrumbs = [{
    label: 'Vendors',
    url: '/vendors'
  }] as BreadcrumbItem[]

  addBreadcrumbItem(item: BreadcrumbItem) {
    this.breadcrumbs.push(item)
  }

  removeBreadCrumbItemByLabel(label: string) {
    this.breadcrumbs = this.breadcrumbs.filter(item => item.label !== label)
  }

}
