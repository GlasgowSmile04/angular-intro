import { Component, OnInit, OnDestroy } from '@angular/core';
import {ActivatedRoute } from '@angular/router';

import { HeroInterface } from '../interfaces/hero-interface';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit, OnDestroy {

  heroes: HeroInterface[];
  filter: string;
  hasFilter: boolean;

  constructor(private heroService: HeroService, private route: ActivatedRoute) { }

  getHeroes(filter?: string) {
    return this.route.params.subscribe(params => {
      if ( params.power ) {
        this.hasFilter = true;
        const powerFilter: string = params.power;
        this.heroes = this.heroService.getHeroes(filter, powerFilter);
      } else {
        this.hasFilter = false;
        this.filter = filter;
        this.heroes = this.heroService.getHeroes(filter);
      }
    });
   }

  updateFilter(filter?: string) { this.filter = filter; this.getHeroes(this.filter); }

  filterIsActive(filter?: string): boolean { return this.filter === filter; }

  ngOnInit() { this.getHeroes(); }

  ngOnDestroy() { this.getHeroes().unsubscribe(); }

}
