import { provideServerRendering } from '@angular/ssr';
import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { appConfig } from './app.config';
import { ASSETS } from './core/assets/assets-fetcher.token';
import { AssetsFetcherServerService } from './core/assets/assets-fetcher.server.service';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
    { provide: ASSETS, useClass: AssetsFetcherServerService },
  ],
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
