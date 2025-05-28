import { Component, input, signal } from '@angular/core';

@Component({
  selector: 'card-content',
  imports: [],
  templateUrl: './card-content.component.html',
})
export class CardContentComponent {
  titleCardComp = input.required<string>();
}
