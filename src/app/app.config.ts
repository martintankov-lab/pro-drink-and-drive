import {
  APP_INITIALIZER,
  ApplicationConfig,
  importProvidersFrom,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { provideTranslateHttpLoader } from '@ngx-translate/http-loader';
import { firstValueFrom } from 'rxjs';

import { routes } from './app.routes';

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
    provideClientHydration(),
    provideAnimationsAsync(),
    provideHttpClient(withFetch()),

    // TranslateModule (no loader args in v17+)
    importProvidersFrom(
      TranslateModule.forRoot({
        defaultLanguage: 'bg',
      })
    ),

    // Provide the HTTP loader for translations
    provideTranslateHttpLoader({ prefix: '/assets/i18n/', suffix: '.json' }),

    // APP_INITIALIZER to preload translations before SSR
    {
      provide: APP_INITIALIZER,
      useFactory: initTranslationsFactory,
      deps: [TranslateService],
      multi: true,
    },
  ],
};