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
          import('../../features/pages/vendors-page/vendors-page').then((m) => m.VendorsPage),
      },
      {
        path: 'categories',
        loadComponent: () =>
          import('../../features/pages/categories-page/categories-page.component').then((m) => m.CategoriesPage),
      },
      {
        path: 'search',
        loadComponent: () =>
          import('../../features/pages/search-page/search-page.component').then((m) => m.SearchPage),
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
