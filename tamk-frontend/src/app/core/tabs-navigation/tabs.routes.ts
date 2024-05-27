import { Routes } from '@angular/router';
import { TabsNavigationPage } from './tabs-navigation-page.component';

export const routes: Routes = [
  {
    path: '',
    component: TabsNavigationPage,
    children: [
      {
        path: 'vendors',
        children: [
          {
            path: '',
            loadComponent: () =>
              import('@tamk-pages/vendors/vendors.page').then(
                (p) => p.VendorsPage
              ),
          },
          {
            path: ':vendorId',
            loadComponent: () =>
              import('@tamk-pages/single-vendor/single-vendor.page').then(
                (p) => p.SingleVendorPage
              ),
          },
        ],
      },
      {
        path: 'categories',
        loadComponent: () =>
          import('../../features/pages/categories/categories.page').then(
            (m) => m.CategoriesPage
          ),
      },
      {
        path: 'search',
        loadComponent: () =>
          import('../../features/pages/search/search.page').then(
            (m) => m.SearchPage
          ),
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
    // TODO: Redirect to 404 page
    // TODO: Create 404 page
    redirectTo: '/vendors',
    pathMatch: 'full',
  },
];
