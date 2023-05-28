import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name: string = 'ironman';
  public age: number = 40;

  get capitalizedName():string{
    return this.name.toUpperCase();
  }

  getHeroesDescription():string{
    return `${this.name} - ${this.age}`;
  }

  changeHero(){
    return this.name = 'Thor';
  }

  changeAge(){
    return this.age=27;
  }

  ResetForm():void{
    this.name="ironman";
    this.age=40;
  }
}
