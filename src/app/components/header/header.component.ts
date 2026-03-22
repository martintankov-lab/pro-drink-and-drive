import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { I18nService } from '../../services/i18n.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    TranslateModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatTooltipModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  mobileMenuOpen = false;
  readonly navLinks = [
    { fragment: 'call-section', labelKey: 'NAV_CALL' },
    { fragment: 'phone-section', labelKey: 'NAV_PHONE' },
    { fragment: 'pricing', labelKey: 'PRICES_SOFIA' },
    { fragment: 'social-section', labelKey: 'NAV_SOCIAL' },
    { fragment: 'footer', labelKey: 'NAV_ABOUT' },
  ] as const;
  readonly languages = [
    { code: 'bg', icon: '/assets/icons/bulgaria.png', tooltip: 'Bulgaria' },
    { code: 'en', icon: '/assets/icons/united-kingdom.png', tooltip: 'English' },
  ] as const;

  constructor(public i18n: I18nService) {}

  useLanguage(code: string): void {
    this.i18n.use(code);
  }

  scrollToSection(fragment: string, event: Event): void {
    event.preventDefault();
    this.mobileMenuOpen = false;
    const el = document.getElementById(fragment);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      if (typeof history !== 'undefined' && history.replaceState) {
        history.replaceState(null, '', '#' + fragment);
      }
    }
  }
}
