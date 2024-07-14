import {Routes} from '@angular/router';
import {TabsNavigationPage} from './tabs-navigation-page.component';

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
            loadComponent: () => import('@tamk-pages/vendors/vendors.page').then(p => p.VendorsPage)
          },
          {
            path: ':vendorId',
            children: [
              {
                path: '',
                loadComponent: () => import('@tamk-pages/single-vendor/single-vendor.page').then(p => p.SingleVendorPage)
              },
              {
                path: 'categories',
                children: [
                  {
                    path: '',
                    loadComponent: () => import('@tamk-pages/categories/categories.page').then(p => p.CategoriesPage)
                  },
                  {
                    path: ':categoryId',
                    loadComponent: () => import('@tamk-pages/products/products.page').then(p => p.ProductsPage)
                  }
                ]
              },
              {
                path: 'products',
                children: [
                  {
                    path: ':productId',
                    loadComponent: () => import('@tamk-pages/single-product/single-product.page')
                      .then(p => p.SingleProductPage)
                  }
                ]
              },
            ]
          },
        ]
      },
      {
        path: 'categories',
        children: [
          {
            path: '',
            loadComponent: () =>
              import('@tamk-pages/categories/categories.page')
                .then(p => p.CategoriesPage)
          },
          {
            path: ':categoryId',
            loadComponent: () =>
              import('@tamk-pages/products/products.page')
                .then(p => p.ProductsPage)
          }
        ]
      },
      {
        path: 'products/:productId',
        loadComponent: () =>
          import('@tamk-pages/single-product/single-product.page')
            .then(p => p.SingleProductPage)
      },
      {
        path: 'search',
        loadComponent: () =>
          import('@tamk-pages/search/search.page')
            .then(p => p.SearchPage),
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
    redirectTo: '/vendors',
    pathMatch: 'full',
  },
];
