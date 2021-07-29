import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeroes() : Observable<Hero[]> {
    const heroes = of(HEROES); //목 데이터를 Observable<Hero[]>타입으로 한번에 반환함
    return heroes;
  }

}
