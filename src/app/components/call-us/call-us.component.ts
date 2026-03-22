import { Component, input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { I18nService } from '../../services/i18n.service';

@Component({
  selector: 'app-call-us',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, TranslateModule],
  templateUrl: './call-us.component.html',
  styleUrl: './call-us.component.scss',
})
export class CallUsComponent {
  phoneNumber = input.required<string>();

  constructor(public i18n: I18nService) {}
}
