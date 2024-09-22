import { Component } from '@angular/core';
import { CharacterService } from '../../services/character.service';
import { Character } from '../interfaces/character.interface';


@Component({
  selector: 'dbz-character-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  characters: Character[];
  constructor(private service: CharacterService) {
    this.characters = this.service.characters;
  }

  removeCharacter(id:string) {
    if(id) {
      this.characters = this.characters.filter(element => element.id !== id);
    }
  }

}
