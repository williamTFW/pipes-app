import {
  Component,
  effect,
  Input,
  input,
  signal,
  WritableSignal,
} from '@angular/core';
import { Hero } from '../../interfaces/hero.interfaces';
import { CanFlyPipe } from '../../pipes/cla-fly.pipe';
import { HeroColorPipe } from '../../pipes/hero-color.pipe';
import { HeroTextColorPipe } from '../../pipes/hero-text-color.pipe';
import { TitleCasePipe } from '@angular/common';
import { HeroCreatorPipe } from '../../pipes/hero-creator.pipe';
import { HeroSortBy } from '../../pipes/hero-sort-by.pipe';
import { HeroFilterPipe } from '../../pipes/hero-filter.pipe';

@Component({
  selector: 'app-table',
  imports: [
    CanFlyPipe,
    HeroColorPipe,
    HeroTextColorPipe,
    TitleCasePipe,
    HeroCreatorPipe,
    HeroSortBy,
    HeroFilterPipe,
  ],
  templateUrl: './table.component.html',
})
export class TableComponent {
  heros = input.required<Hero[]>();
  /* sortBy = input.required<keyof Hero | null>(); */
  @Input({ required: true }) sortBy!: WritableSignal<keyof Hero | null>;
  @Input({ required: true }) querySearch!: WritableSignal<string | null>;

  constructor() {
    effect(() => {
      console.log(`Valor: ${this.sortBy()}`);
      console.log(`Valor querySearch: ${this.querySearch()}`);
    });
  }
}
