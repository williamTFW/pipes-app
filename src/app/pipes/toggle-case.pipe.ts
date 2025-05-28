import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toggleCase', // 'string ejemplo' | toggle-case
})
export class ToggleCasePipe implements PipeTransform {
  transform(value: string, change: boolean = true): string {
    console.log({ value, change });
    /* return value.toUpperCase(); */
    return change ? value.toUpperCase() : value.toLowerCase();
  }
}
