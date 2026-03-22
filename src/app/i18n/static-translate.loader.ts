import { TranslateLoader } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';
import bg from './bg.json';
import en from './en.json';

/**
 * Bundled translations (imported at build time). Works in browser + SSR with no HTTP.
 * Edit `bg.json` / `en.json` in this folder, then rebuild.
 */
const TRANSLATIONS: Record<string, Record<string, string>> = {
  bg: bg as Record<string, string>,
  en: en as Record<string, string>,
};

export function staticTranslateLoaderFactory(): TranslateLoader {
  return {
    getTranslation(lang: string): Observable<Record<string, string>> {
      const bundle = TRANSLATIONS[lang] ?? TRANSLATIONS['bg'];
      return of({ ...bundle });
    },
  };
}
