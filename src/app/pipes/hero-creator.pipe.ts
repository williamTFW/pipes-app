import { Pipe, PipeTransform } from '@angular/core';
import { Creator } from '../interfaces/hero.interfaces';

@Pipe({
  name: 'heroCreator',
})
export class HeroCreatorPipe implements PipeTransform {
  transform(value: Creator): string {
    return Creator[value];
  }
}
