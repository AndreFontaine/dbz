import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../interfaces/character.interface';

import { v4 as uuid  } from 'uuid';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html'
})
export class AddCharacterComponent {

  @Output()
  public emitCharacter: EventEmitter<Character> = new EventEmitter;

  character: Character = {
    name: '',
    power: 0
  };

  addCharacter() {
    if(!this.character.name) return;
    const character = { id: uuid(), name: this.character.name, power: this.character.power }
    this.emitCharacter.emit(character);
    console.log(`Name: ${this.character.name}, power: ${this.character.power}`);

  }

}
