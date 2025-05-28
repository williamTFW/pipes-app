import { Component, input } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
})
export class CardComponent {
  cardTitle = input.required<string>();
}
