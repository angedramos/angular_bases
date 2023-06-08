import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
//Injectable hace que esta clase sea un servicio
import {v4 as uuid} from 'uuid';

@Injectable({providedIn: 'root'})
export class DbzService {
 //tratar de no usar any
 public characters: Character[] = [{
    id: uuid(),
    name: 'Krillin',
    power:1000
},{
    id: uuid(),
    name:'Goku',
    power:9500
},
{
    id: uuid(),
    name:'Vegeta',
    power:9000
}
];


addCharacter(character: Character):void{
    const newCharacter: Character={
        id:uuid(), ...character
    };


this.characters.unshift(character);
}

// onDeleteCharacter(index:number){
// this.characters.splice(index,1);
// }

deleteCharacterById(id:string){
   var getICharacterId =
//    var index = this.characters.splice(this.characters.indexOf(id),1)
   
 this.characters = this.characters.filter(character => character.id !==id) ;  
}

    
}