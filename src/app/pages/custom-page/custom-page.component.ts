import { Component, signal } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { ToggleCasePipe } from '../../pipes/toggle-case.pipe';
import { TableComponent } from '../../components/table/table.component';

@Component({
  selector: 'app-custom-page',
  imports: [CardComponent, ToggleCasePipe, TableComponent],
  templateUrl: './custom-page.component.html',
})
export default class CustomPageComponent {
  name = signal('William Villamizar');
  upperCase = signal<boolean>(false);
}
