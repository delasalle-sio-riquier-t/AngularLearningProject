import { Component } from '@angular/core';
import {reject} from 'q';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isAuth = false;
  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 2000
    );
  });

  appareils = [

    {
      name: 'Machine à laver',
      status: 'éteint',
      value: 1
    },
    {
      name: 'Frigo',
      status: 'allumé',
      value: 2
    },
    {
      name: 'Ordinateur',
      status: 'éteint',
      value: 3
    }
  ];

  constructor() {

    setTimeout(

      () => {

        this.isAuth = true;

      }, 4000

    );

  }

  onAllumer() {

    console.log('On allume tout !');

  }
}
