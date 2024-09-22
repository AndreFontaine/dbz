import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DbzMainPageComponent } from './pages/main-page.component';
import { ListCharacterComponent } from './components/list/list.component';
import { AddCharacterComponent } from './components/add-character/add-character.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    DbzMainPageComponent,
    ListCharacterComponent,
    AddCharacterComponent
  ],
  providers: [],
  exports: [
    DbzMainPageComponent
  ],
})
export class DbzModule { }
