import { CurrencyPipe, DecimalPipe, PercentPipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { CardContentComponent } from '../../components/card-content/card-content.component';

@Component({
  selector: 'app-numbers-page',
  imports: [DecimalPipe, PercentPipe, CurrencyPipe, CardContentComponent],
  templateUrl: './numbers-page.component.html',
})
export default class NumbersPageComponent {
  totalSells = signal(2_433_232.5567);
  percent = signal(0.4856);
}
