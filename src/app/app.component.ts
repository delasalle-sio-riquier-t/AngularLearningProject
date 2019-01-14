import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {


  postsArray = [
    {
      title: 'Titre 1',
      content: 'azerty azerty azerty azery',
      loveit: 1
    },
    {
      title: 'Titre 2',
      content: 'azerty azerty azerty azery',
      loveit: 0
    },
    {
      title: 'Titre 3',
      content: 'azerty azerty azerty azery',
      loveit: -1
    },
    ]

  constructor() {

  }
}
