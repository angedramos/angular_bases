import { Component } from "@angular/core";

//decorador que transforma mi clase en un componente
@Component({
    //template espera todo un html en un string ej: '<h1>Hola Mundo </h1>'
    selector: 'app-counter',
    template: `
    <h2>Counter: {{counter}}</h2>
        <button (click)="increaseBy(counter)" >+1</button>
        <button (click)="resetCounter()">Reset</button>
        <button (click)="decreaseBy(counter)">-1</button>
    `
})

export class CounterComponent {

    constructor() { }

    public counter: number = 10

  increaseBy(value: number):void {
    this.counter += 1; 
  }

  decreaseBy(value: number):void {
    this.counter -= 1; 
  }

  resetCounter():void {
    this.counter = 10
  }

}