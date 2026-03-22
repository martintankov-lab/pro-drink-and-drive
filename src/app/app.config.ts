import {
  APP_INITIALIZER,
  ApplicationConfig,
  importProvidersFrom,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { firstValueFrom } from 'rxjs';

import { routes } from './app.routes';
import { staticTranslateLoaderFactory } from './i18n/static-translate.loader';

// Preload translations before app bootstrap (SSR-safe)
export function initTranslationsFactory(translate: TranslateService) {
  return () => {
    translate.setDefaultLang('bg');
    return firstValueFrom(translate.use('bg')); // ensures SSR waits for JSON
  };
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(
      routes,
      withInMemoryScrolling({ scrollPositionRestoration: 'top', anchorScrolling: 'enabled' })
    ),
    // Intentionally no provideClientHydration — avoids Material/CDK + lazy-route hydration bugs (hasAttribute).
    provideAnimationsAsync(),
    provideHttpClient(withFetch()),

    importProvidersFrom(
      TranslateModule.forRoot({
        defaultLanguage: 'bg',
        loader: {
          provide: TranslateLoader,
          useFactory: staticTranslateLoaderFactory,
        },
      })
    ),

    // APP_INITIALIZER to preload translations before SSR
    {
      provide: APP_INITIALIZER,
      useFactory: initTranslationsFactory,
      deps: [TranslateService],
      multi: true,
    },
  ],
};