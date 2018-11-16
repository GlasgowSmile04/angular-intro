import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title: String = 'Hello World';
  name: String = 'Zac';
  currentDay: any = new Date().getDay();

  days: Object = {
    0: 'Sunday',
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday',
  };

  languages: Object[] = [
    {
      names: ['English', 'American'],
      country: 'Murica'
    },
    {
      names: ['Spanish', 'Arabic'],
      country: 'Spain'
    },
    {
      names: ['JavaScript', 'Basque'],
      country: 'Bitwise'
    }
  ];

  constructor() { }

  renderThisDay(): String {
    return this.days[this.currentDay];
  }

  renderSpokenLanguages(languages): String {
    return languages.join(', ');
  }

  ignoreLanguage(language): Boolean {
    const languageToIgnore = 'English';
    return !language.names.includes(languageToIgnore);
  }

  ngOnInit() {
    console.log('Hello moto');
  }

}
