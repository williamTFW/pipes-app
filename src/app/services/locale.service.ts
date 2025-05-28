import { Injectable, signal } from '@angular/core';

export type availableLocale = 'es' | 'en' | 'ja';

@Injectable({
  providedIn: 'root',
})
export class LocaleService {
  private currentLocale = signal<availableLocale>('es');
  constructor() {
    this.currentLocale.set(
      <availableLocale>localStorage.getItem('locale') ?? 'es'
    );
  }

  get getLocale() {
    return this.currentLocale();
  }

  changeLocal(locale: availableLocale) {
    localStorage.setItem('locale', locale);
    this.currentLocale.set(locale);
    window.location.reload();
  }
}
