import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { TranslocoHttpLoader } from './transloco-loader';
import { provideTransloco } from '@jsverse/transloco';
import { ASSETS } from './core/assets/assets-fetcher.token';
import { AssetsFetcherBrowserService } from './core/assets/assets-fetcher.browser.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideHttpClient(withFetch()),
    provideTransloco({
      config: {
        availableLangs: ['en', 'es', 'it', 'de', 'nl', 'fr'],
        defaultLang: 'en',
        // Remove this option if your application doesn't support changing language in runtime.
        reRenderOnLangChange: true,
        prodMode: !isDevMode(),
        
      },
      loader: TranslocoHttpLoader,
    }),
    { provide: ASSETS, useClass: AssetsFetcherBrowserService },
  ],
};
