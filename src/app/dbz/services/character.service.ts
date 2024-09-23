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

  addCharacter(character:Character): void {
    const newCharacter = { ...character, id: uuid() };
    this.characters.push(newCharacter);
  }

  deleteCharacter(id: string): void {
    if(id) {
      const index = this.characters.findIndex((element) => element.id === id);
      this.characters.splice(index, 1);
    }
  }

}
