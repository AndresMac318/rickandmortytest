import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, filter, map } from 'rxjs';
import { Character } from 'src/app/interfaces/apiresponse.interface';
import { selectCharacter, selectCharactersState } from 'src/app/state/selectors/characters.selectors';

@Component({
  selector: 'app-detail-character',
  templateUrl: './detail-character.component.html',
  styleUrls: ['./detail-character.component.scss']
})
export class DetailCharacterComponent {

  character$: Observable<Character> = new Observable();
  id: string;

  constructor(private router: ActivatedRoute, private store: Store ){
    const id = this.router.snapshot.params['id'];
    this.id = id;
    console.log('contruct - this.id: ',this.id);
    
  }
  
  ngOnInit(){
    this.store.select(selectCharactersState);
    this.getCharacters();
    console.log('fin oninit - this.id: ',this.id);
  }

  getCharacters(){
    console.log('start get character - this.id: ',this.id);
    this.character$ = this.store.select(selectCharacter(this.id)).pipe(
      filter((character): character is Character => character !== undefined),
      map((character: Character) => character as Character)
    )
  }

}
