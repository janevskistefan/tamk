import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs-navigation/tabs.routes').then((m) => m.routes),
  },
];
