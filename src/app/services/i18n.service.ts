import { Injectable, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({ providedIn: 'root' })
export class I18nService {
  currentLang = signal('bg');

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('bg');
    this.translate.use('bg');

    this.translate.onLangChange.subscribe((e) => {
      this.currentLang.set(e.lang);
    });
  }

  use(lang: string): void {
    this.translate.use(lang);
  }
}
