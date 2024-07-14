/// <reference types="@angular/localize" />

import {enableProdMode, importProvidersFrom} from '@angular/core';
import {bootstrapApplication} from '@angular/platform-browser';
import {provideRouter, RouteReuseStrategy, withComponentInputBinding} from '@angular/router';
import {IonicRouteStrategy, provideIonicAngular} from '@ionic/angular/standalone';

import {routes} from './app/app.routes';
import {AppComponent} from './app/app.component';
import {environment} from './environments/environment';
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {
  HTTP_INTERCEPTORS,
  HttpClient,
  HttpClientModule
} from "@angular/common/http";
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {
  TamkHttpInterceptorService
} from "@tamk-core/interceptor/tamk-http-interceptor.service";

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TamkHttpInterceptorService,
      multi: true
    },
    {
      provide: RouteReuseStrategy,
      useClass: IonicRouteStrategy
    },
    provideIonicAngular(),
    provideRouter(routes, withComponentInputBinding()),
    importProvidersFrom(HttpClientModule),
    importProvidersFrom(TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: (httpClient: HttpClient) => new TranslateHttpLoader(httpClient, './assets/i18n/', '.json'),
        deps: [HttpClient]
      }
    })),
  ],
}).then();
