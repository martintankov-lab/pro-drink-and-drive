import { Component } from '@angular/core';
import { CallUsComponent } from '../../components/call-us/call-us.component';
import { NumberComponent } from '../../components/number/number.component';
import { PricingComponent } from '../../components/pricing/pricing.component';
import { DriversInfoComponent } from '../../components/drivers-info/drivers-info.component';
import { SocialComponent } from '../../components/social/social.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CallUsComponent,
    NumberComponent,
    PricingComponent,
    DriversInfoComponent,
    SocialComponent,
    FooterComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  readonly phoneNumber = '+359895544420';
}
