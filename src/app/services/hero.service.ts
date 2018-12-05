import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import {HEROES } from '../mocks/mock-heroes';
import { HeroInterface } from '../interfaces/hero-interface';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private router: Router ) { }

  getHeroes(filter: string, powerFilter?: string): HeroInterface[] {
    if ( !filter && !powerFilter ) { return HEROES; }
    return HEROES.filter(hero => {
      if ( !filter  && powerFilter ) { return hero.powers.includes(powerFilter); }
      if ( filter === 'hero' && hero.hero ) { return this.filterHeroes(powerFilter, hero); }
      if ( filter === 'villain' && !hero.hero ) { return this.filterHeroes(powerFilter, hero); }
    });
  }

  filterHeroes(powerFilter: string, hero: HeroInterface ): HeroInterface | boolean {
    if ( powerFilter ) { return hero.powers.includes(powerFilter); }
    return hero;
  }

  getIndividualHero(params: object){
    return HEROES.find(hero => hero.id === +params['id']);
  }

  heroNotFound( noHero: string ) {
    return this.router.navigateByUrl(`/hero-not-found/${noHero}`);
  }

}
