import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hero-not-found',
  templateUrl: './hero-not-found.component.html',
  styleUrls: ['./hero-not-found.component.css']
})
export class HeroNotFoundComponent implements OnInit, OnDestroy {

  noHero: string;

  constructor( private route: ActivatedRoute ) { }


  updateNoHero() {
    return this.route.params.subscribe(params => {
      this.noHero = params['no-hero'];
    });
  }

  ngOnInit() {
    this.updateNoHero();
  }

  ngOnDestroy() { this.updateNoHero().unsubscribe(); }

}
