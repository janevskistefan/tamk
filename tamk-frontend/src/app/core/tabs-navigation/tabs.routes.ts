import {Routes} from '@angular/router';
import {TabsNavigationPage} from './tabs-navigation-page.component';

export const routes: Routes = [
  {
    path: '',
    component: TabsNavigationPage,
    children: [
      {
        path: 'vendors',
        loadComponent: () =>
          import('../../features/pages/vendors/vendors.page').then((m) => m.VendorsPage),
      },
      {
        path: 'categories',
        loadComponent: () =>
          import('../../features/pages/categories/categories.page').then((m) => m.CategoriesPage),
      },
      {
        path: 'search',
        loadComponent: () =>
          import('../../features/pages/search/search.page').then((m) => m.SearchPage),
      },
      {
        path: '',
        redirectTo: '/vendors',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '**',
    redirectTo: '/search',
    pathMatch: 'full',
  },
];
