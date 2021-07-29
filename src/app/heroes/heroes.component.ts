import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[] = [];

  hero : Hero = {
    id : 1,
    name : 'Windstorm' 
  };
  
  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  selectedHero? : Hero;
  onSelect(hero: Hero): void{
    this.selectedHero = hero;
  }

  getHeroes(): void {
    //기존코드
    // this.heroes = this.heroService.getHeroes();

    //Observable사용하는 코드 -> 이렇게 해야 비동기방식으로 가능 
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }
}
