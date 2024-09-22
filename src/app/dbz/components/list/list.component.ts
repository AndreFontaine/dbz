import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../interfaces/character.interface';


@Component({
  selector: 'dbz-character-list',
  templateUrl: './list.component.html'
})
export class ListCharacterComponent {

  @Input()
  public characters: Character[] = [];

  @Output()
  public emitCharacterId: EventEmitter<string> = new EventEmitter;

  constructor() { }

  removeCharacter(id:string) {
    this.emitCharacterId.emit(id);
  }

}
