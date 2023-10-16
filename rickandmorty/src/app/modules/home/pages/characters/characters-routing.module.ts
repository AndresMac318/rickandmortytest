import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './characters.component';
import { DetailCharacterComponent } from './detail-character/detail-character.component';

const routes: Routes = [
  {
    path: '', component: CharactersComponent
  },
  {
    path: 'character/:id', component: DetailCharacterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharactersRoutingModule { }
