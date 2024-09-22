import { Injectable } from '@angular/core';

import { v4 as uuid  } from 'uuid';
import { Character } from '../components/interfaces/character.interface';

@Injectable({providedIn: 'root'})
export class CharacterService {
  constructor() { }

  public characters: Character[] = [
    { id: uuid(), name: 'Goku', power: 12000 },
    { id: uuid(), name: 'Vegeta', power: 11600 },
    { id: uuid(), name: 'Piccolo', power: 7200 },
    { id: uuid(), name: 'Krillin', power: 5020 },
  ];

  deleteCharacter(id: string) {
    if(id) {
      console.log(`id: ${id}`);
      this.characters = this.characters.filter(element => element.id !== id);
    }
  }

  addCharacter(character:Character) {
    this.characters.push(character);
  }

}
