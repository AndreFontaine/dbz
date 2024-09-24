import { Component } from '@angular/core';
import { CharacterService } from '../services/character.service';
import { Character } from '../components/interfaces/character.interface';

@Component({
  selector: 'dbz-main-page',
  templateUrl: 'main-page.component.html'
})

export class DbzMainPageComponent {

  constructor(private service: CharacterService) { }

  get characters(): Character[] {
    return [...this.service.characters];
  }

  onAddCharacter(character: Character): void {
    this.service.addCharacter(character);
  }

  onRemoveCharacter(id:string): void {
    this.service.deleteCharacter(id);
  }

}
