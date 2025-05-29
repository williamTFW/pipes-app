import { Pipe, PipeTransform } from '@angular/core';
import { Color } from '../interfaces/hero.interfaces';

@Pipe({
  name: 'heroColor',
})
export class HeroColorPipe implements PipeTransform {
  transform(color: Color): string {
    return Color[color];
  }
}
