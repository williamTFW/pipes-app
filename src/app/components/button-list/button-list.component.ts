import { Component, Input, WritableSignal } from '@angular/core';
import { Hero } from '../../interfaces/hero.interfaces';

@Component({
  selector: 'button-list',
  imports: [],
  templateUrl: './button-list.component.html',
})
export class ButtonListComponent {
  @Input({ required: true }) sortBy!: WritableSignal<keyof Hero | null>;
  @Input({ required: true }) searchQuery!: WritableSignal<string | null>;
  /* searchQuery = input.required<WritableSignal<string>>; */
  /* btnSelect = input.required(); */
  /* sortBy = input.required<keyof Hero | null>(); */
}
