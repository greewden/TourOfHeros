import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
<<<<<<< HEAD
import {HeroService} from '../hero.service';
=======
>>>>>>> 4fd2119aaba7c71ad71f9909a10979c5f0003a67

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

<<<<<<< HEAD
  heroes: Hero[];

  constructor(private heroService: HeroService) {
  }

  ngOnInit() {
    this.getHeroes();
  }

  private getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(
        heroes => { this.heroes = heroes; }
      );
  }
=======
  private hero: Hero;

  constructor() {
    this.hero = {
      id: 1,
      name: 'Windstorm'
    };
  }

  ngOnInit() {
  }

>>>>>>> 4fd2119aaba7c71ad71f9909a10979c5f0003a67
}
