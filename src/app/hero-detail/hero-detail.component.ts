import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: [ './hero-detail.component.css' ]
})
export class HeroDetailComponent implements OnInit {
  hero!: Hero; //diz ao compilador para não procurar um inicializador para esta propriedade

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHero();
  }
  getHero(): void {
    let id = +this.route.snapshot.paramMap.get('id')!; //o + substitui o parseInt e o ! evita que valores null sejam retornados.
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }
  

  goBack(): void {
    this.location.back();
  }
}