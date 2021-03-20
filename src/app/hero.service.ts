import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';


@Injectable({
  providedIn: 'root'
})
export class HeroService {

  //hero é um novo objeto de Hero declarado em typescript
  /*hero: Hero = {
    id: 1,
    name: ''
  }*/

  constructor(/*propriedade global*/private messageService: MessageService ) { }
  
  /*metodo do tipo Observable que  cria uma constante que recebe a estrutura de Hero mais o array de HEROES através do of que linka os dados. Neste metodo, também é injetado um metodo do serviço de menssagens chamdo add(parametro: ...).
  por fim, é retornado o valor da união de todos os dados e metodos de varios serviços, classes e components desejados.*/
  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES)
    this.messageService.add('HeroService: fetched heroes')
    return heroes
  }
}
