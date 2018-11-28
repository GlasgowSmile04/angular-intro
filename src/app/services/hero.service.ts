import { Injectable } from '@angular/core';

import {HEROES } from '../mocks/mock-heroes';
import { HeroInterface } from '../interfaces/hero-interface';
import { HeroesComponent } from '../heroes/heroes.component';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeroes(filter: string): HeroInterface[] {
    if (filter === 'all') { return HEROES; }
    return HEROES.filter(hero => {
      if (filter === 'hero' && hero.hero) {
        return hero.hero;
      } else if (filter === 'villain' && !hero.hero) {
        return !hero.hero;
      }
    });
  }
}
