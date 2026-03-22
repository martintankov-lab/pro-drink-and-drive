import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { I18nService } from '../../services/i18n.service';

@Component({
  selector: 'app-drivers-info',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './drivers-info.component.html',
  styleUrl: './drivers-info.component.scss',
})
export class DriversInfoComponent {
  constructor(public i18n: I18nService) {}
}
