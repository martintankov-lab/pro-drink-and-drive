import { Component, input } from '@angular/core';

@Component({
  selector: 'app-number',
  standalone: true,
  imports: [],
  templateUrl: './number.component.html',
  styleUrl: './number.component.scss',
})
export class NumberComponent {
  phoneNumber = input.required<string>();

  /** Display version with spaces: +359 89 554 4420 */
  get displayNumber(): string {
    const raw = this.phoneNumber() ?? '';
    const digits = raw.replace(/\D/g, '');
    if (digits.startsWith('359') && digits.length >= 12) {
      return `+359 ${digits.slice(3, 5)} ${digits.slice(5, 8)} ${digits.slice(8, 12)}`;
    }
    if (digits.length >= 10) {
      return `${digits.slice(0, 3)} ${digits.slice(3, 5)} ${digits.slice(5, 8)} ${digits.slice(8)}`;
    }
    return raw;
  }
}
