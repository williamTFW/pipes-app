import {
  DatePipe,
  LowerCasePipe,
  TitleCasePipe,
  UpperCasePipe,
} from '@angular/common';
import { Component, effect, inject, LOCALE_ID, signal } from '@angular/core';
import { availableLocale, LocaleService } from '../../services/locale.service';

@Component({
  selector: 'basic-page',
  imports: [LowerCasePipe, UpperCasePipe, TitleCasePipe, DatePipe],
  templateUrl: './basic-page.component.html',
})
export class BasicPageComponent {
  localeServer = inject(LocaleService);
  currentLocale = signal(inject(LOCALE_ID));

  nameLower = signal<string>('william');
  nameUpper = signal<string>('WILLIAM');
  fullName = signal<string>('WillIaM vilLaMizAr');
  customDate = signal(new Date());

  // Los efectos se ejecutan cuando surge algun cambio en la signal a la que se asocia
  tickingDateEffect = effect((onClieanup) => {
    const interval = setInterval(() => {
      this.customDate.set(new Date());
      console.log('tik');
    }, 500);

    onClieanup(() => {
      clearInterval(interval);
    });
  });

  changeLocale(locale: availableLocale) {
    console.log({ locale });
    this.localeServer.changeLocal(locale);
  }
}
