import { Component, signal } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import {
  AsyncPipe,
  I18nPluralPipe,
  I18nSelectPipe,
  JsonPipe,
  KeyValuePipe,
  SlicePipe,
  TitleCasePipe,
} from '@angular/common';
import { interval, tap } from 'rxjs';
import { CardContentComponent } from '../../components/card-content/card-content.component';

const client1 = {
  name: 'william',
  gender: 'male',
  age: 31,
  city: 'Ottawa, Canadá',
};

const client2 = {
  name: 'ingrid',
  gender: 'female',
  age: 21,
  city: 'Toronto, Canadá',
};

@Component({
  selector: 'app-uncommon-page',
  imports: [
    CardComponent,
    I18nSelectPipe,
    I18nPluralPipe,
    SlicePipe,
    JsonPipe,
    KeyValuePipe,
    TitleCasePipe,
    AsyncPipe,
    CardContentComponent,
  ],
  templateUrl: './uncommon-page.component.html',
})
export default class UncommonPageComponent {
  // i18n Select
  client = signal(client1);

  inivtatioMap = {
    male: 'bienvenido',
    female: 'bienvenida',
  };

  changeClient() {
    if (this.client() === client1) {
      this.client.set(client2);
      return;
    }
    this.client.set(client1);
  }

  // i18n Plural Pipe
  clients = signal([
    'william',
    'ingrid',
    'samir',
    'nancy',
    'wilson',
    'carolina',
    'esteban',
  ]);

  clientsMap = signal({
    '=0': 'There are not clients waiting !',
    '=1': 'There is one client waiting !',
    '=2': 'There are two clients waiting !',
    other: 'There are # clients waiting !',
  });

  deleteClient() {
    this.clients.update((prev) => prev.slice(1));
  }

  //KeyValue Pipe
  profile = {
    name: 'william',
    lastName: 'villamizar',
    phone: '3112325536',
  };

  // Async Pipe
  promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Data en la promesa !!!');
      console.log('Promesa Finalizada');
    }, 3500);
  });

  //Async Pipe con Observables

  myObservableTimer = interval(1000).pipe(
    tap((val) => console.log('tap: ', val))
  );
}
