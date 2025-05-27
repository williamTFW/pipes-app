import { LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'basic-page',
  imports: [LowerCasePipe, UpperCasePipe, TitleCasePipe],
  templateUrl: './basic-page.component.html',
})
export class BasicPageComponent {
  nameLower = signal<string>('william');
  nameUpper = signal<string>('WILLIAM');
  fullName = signal<string>('WillIaM vilLaMizAr');
}
