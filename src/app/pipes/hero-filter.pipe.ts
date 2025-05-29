import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/hero.interfaces';

@Pipe({
  name: 'heroFilter',
})
export class HeroFilterPipe implements PipeTransform {
  transform(value: Hero[], search: string | null): Hero[] {
    if (!search) return value;
    search = search.toLocaleLowerCase();
    return value.filter((hero) => hero.name.toLowerCase().includes(search));
  }
}
