import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public heroesName: string[]=['Spiderman','She-Hulk',"Thor","Capitan America","Ironman","Black Widow"]
  public deletedHero?: string;


  removeLastHero(){
    this.deletedHero = this.heroesName.pop();
  }

}
