import {ComponentFixture, TestBed} from '@angular/core/testing';

import {VendorsPage} from './vendors-page';

describe('Tab1Page', () => {
  let component: VendorsPage;
  let fixture: ComponentFixture<VendorsPage>;

  beforeEach(async () => {
    fixture = TestBed.createComponent(VendorsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
