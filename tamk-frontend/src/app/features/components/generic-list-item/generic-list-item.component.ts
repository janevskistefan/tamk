import { Component, Input } from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'generic-list-item',
  templateUrl: './generic-list-item.component.html',
  styleUrl: './generic-list-item.component.scss',
  standalone: true,
})
export class GenericListItemComponent {
  @Input({ required: true }) itemId!: number;
  @Input({ required: true }) itemLabel!: string;
  @Input({ required: true }) itemLogoUrl!: string;
  @Input() itemDescription: string | undefined;

  constructor() {}
}
