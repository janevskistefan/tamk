import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CategoriesPage} from './categories-page.component';

describe('Tab2Page', () => {
  let component: CategoriesPage;
  let fixture: ComponentFixture<CategoriesPage>;

  beforeEach(async () => {
    fixture = TestBed.createComponent(CategoriesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
