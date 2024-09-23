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
  public onDeleteCharacter: EventEmitter<string> = new EventEmitter;

  emitRemoveCharacter(id:string): void {
    this.onDeleteCharacter.emit(id);
  }

}
