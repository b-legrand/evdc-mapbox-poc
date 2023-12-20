import { Routes } from '@angular/router';
import { supportedLangGuard } from './supported-lang.guard';
import { AppComponent } from './app.component';
import { ShellPageComponent } from './pages/shell/components/shell-page/shell-page.component';

export const routes: Routes = [
  {
    path: '',
    component: ShellPageComponent,
    children: [
      {
        path: ':lang',
        canMatch: [supportedLangGuard],
        children: [
          {
            path: '',
            pathMatch: 'full',
            redirectTo: 'home',
          },
          {
            path: 'home',
            loadComponent: () =>
              import(
                './pages/home/components/home-page/home-page.component'
              ).then((m) => m.HomePageComponent),
          },
          {
            path: 'map',
            loadComponent: () =>
              import('./pages/map/components/map-page/map-page.component').then(
                (m) => m.MapPageComponent,
              ),
          },
          {
            path: 'station',
            loadComponent: () =>
              import(
                './pages/station/components/station-page/station-page.component'
              ).then((m) => m.StationPageComponent),
          },
        ],
      },
    ],
  },
  {
    path: '**',
    loadComponent: () =>
      import(
        './pages/not-found/components/not-found-page/not-found-page.component'
      ).then((m) => m.NotFoundPageComponent),
  },
];
