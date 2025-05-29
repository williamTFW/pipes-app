import { heroes } from './../../data/hero';
import { Component, input, signal } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { ToggleCasePipe } from '../../pipes/toggle-case.pipe';
import { TableComponent } from '../../components/table/table.component';
import { Hero } from '../../interfaces/hero.interfaces';
import { ButtonListComponent } from '../../components/button-list/button-list.component';

@Component({
  selector: 'app-custom-page',
  imports: [CardComponent, ToggleCasePipe, TableComponent, ButtonListComponent],
  templateUrl: './custom-page.component.html',
})
export default class CustomPageComponent {
  name = signal('William Villamizar');
  upperCase = signal<boolean>(false);
  heros = signal<Hero[]>(heroes);
  sortBy = signal<keyof Hero | null>(null);
  querySearch = signal<string | null>(null);
  /* sortBy = signal<keyof Hero | null>(null); */
}
