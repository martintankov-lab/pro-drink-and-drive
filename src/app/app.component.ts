import { ApplicationRef, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { Meta, Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(
    private meta: Meta,
    private title: Title,
    translate: TranslateService,
    appRef: ApplicationRef
  ) {
    this.title.setTitle('Pro Drink and Drive – професионален „дринк енд драйв“ в София');

    // Re-run change detection when language changes so | translate updates everywhere
    translate.onLangChange.subscribe(() => queueMicrotask(() => appRef.tick()));

    this.meta.addTags([
      {
        name: 'description',
        content:
          'Pro Drink and Drive – професионална услуга „дринк енд драйв“ в София. Лицензирани шофьори ви прибират безопасно с вашия автомобил, когато сте употребили алкохол. Работим всеки ден от 18:00 до 04:00.',
      },
      {
        name: 'keywords',
        content:
          'drink and drive, дринк енд драйв, шофьор след алкохол, безопасно прибиране, София, Pro Drink and Drive',
      },
      { name: 'robots', content: 'index,follow' },
      { name: 'author', content: 'Pro Drink and Drive' },
      // Open Graph
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://prodrinkanddrive.bg/' },
      {
        property: 'og:title',
        content: 'Pro Drink and Drive – професионален „дринк енд драйв“ в София',
      },
      {
        property: 'og:description',
        content:
          'Лицензирани шофьори ви прибират безопасно с вашия автомобил в София. Работим всеки ден от 18:00 до 04:00.',
      },
      {
        property: 'og:image',
        content: 'https://prodrinkanddrive.bg/assets/images/pro-drink-and-drive.jpeg',
      },
      // Twitter
      { name: 'twitter:card', content: 'summary_large_image' },
      {
        name: 'twitter:title',
        content: 'Pro Drink and Drive – професионален „дринк енд драйв“ в София',
      },
      {
        name: 'twitter:description',
        content:
          'Услуга „дринк енд драйв“ в София – безопасно и дискретно прибиране с вашия автомобил.',
      },
      {
        name: 'twitter:image',
        content: 'https://prodrinkanddrive.bg/assets/images/pro-drink-and-drive.jpeg',
      },
    ]);
  }
}
