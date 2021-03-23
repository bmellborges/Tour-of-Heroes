import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes!: Hero[];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }
}
/*export class HeroesComponent implements OnInit {

  heroes: Hero [];
  
 /* hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };*/
  
 /* selectedHero?: Hero;*/
  
  
 /* constructor(private heroService: HeroService, private messageService: MessageService) { 
    
  }
  
  ngOnInit(): void {
    //inicializa o app com tais informações abaixo
    this.getHeroes();
  }

  //parametros que exibem concatenação de variaveis recebem um `${var.param}` na sua declarção, como visto abaixo.
  /*onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`)*/
    //Metodo que busca os dados dos herois no 'servidor'
   /* getHeroes(): void {
      this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes)
    }
  }*/
  




