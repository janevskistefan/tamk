import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-vendor-widget',
  templateUrl: './vendor-widget.component.html',
  styleUrls: ['./vendor-widget.component.scss'],
  standalone: true
})
export class VendorWidgetComponent {

  @Input({required: true}) vendorId!: string;
  @Input({required: true}) vendorName!: string;
  @Input({required: true}) vendorLogoUrl!: string
  constructor() {

  }

}
