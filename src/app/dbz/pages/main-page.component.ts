import { Component } from '@angular/core';
import { CharacterService } from '../services/character.service';
import { Character } from '../components/interfaces/character.interface';

@Component({
  selector: 'dbz-main-page',
  templateUrl: 'main-page.component.html'
})

export class DbzMainPageComponent {

  public characters: Character[] = this.service.characters;

  constructor(private service: CharacterService) { }

  onAddCharacter(character: Character): void {
    this.service.addCharacter(character);
  }

  onRemoveCharacter(id:string): void {
    console.log(`$event: ${id}`)
    this.service.deleteCharacter(id);
  }

}
