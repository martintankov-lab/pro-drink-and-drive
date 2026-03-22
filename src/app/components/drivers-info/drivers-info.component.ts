import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-drivers-info',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './drivers-info.component.html',
  styleUrl: './drivers-info.component.scss',
})
export class DriversInfoComponent {}
