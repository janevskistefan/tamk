import {ComponentFixture, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';

import {TabsNavigationPage} from './tabs-navigation-page.component';

describe('TabsPage', () => {
  let component: TabsNavigationPage;
  let fixture: ComponentFixture<TabsNavigationPage>;

  beforeEach(async () => {
    TestBed.overrideComponent(TabsNavigationPage, {
      add: {
        imports: [RouterTestingModule]
      }
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsNavigationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
