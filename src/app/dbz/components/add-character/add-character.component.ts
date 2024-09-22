import { Component } from '@angular/core';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {

  name: string = '';
  power: number = 0;

  addCharacter() {
    console.log(`Name: ${this.name}, power: ${this.power}`);
  }

}
