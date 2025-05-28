import {
  ApplicationConfig,
  LOCALE_ID,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import LocaleEs from '@angular/common/locales/es-CO';
import LocaleJA from '@angular/common/locales/ja';
import { registerLocaleData } from '@angular/common';
import { LocaleService } from './services/locale.service';

registerLocaleData(LocaleEs, 'es');
registerLocaleData(LocaleJA, 'ja');

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    {
      provide: LOCALE_ID,
      /* useValue: 'es' */ deps: [LocaleService],
      useFactory: (localeService: LocaleService) => localeService.getLocale,
    },
  ],
};
