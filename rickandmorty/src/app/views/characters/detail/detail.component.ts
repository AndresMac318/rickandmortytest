import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, filter, map } from 'rxjs';
import { Character } from 'src/app/interfaces/apiresponse.interface';
import { selectCharacter, selectCharactersState } from 'src/app/state/selectors/characters.selectors';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  character$: Observable<Character> = new Observable();
  id: string;

  constructor(private router: ActivatedRoute, private store: Store ){
    const id = this.router.snapshot.params['id'];
    this.id = id;
  }
  
  ngOnInit(){
    this.getCharacters();
  }

  getCharacters(){
    this.character$ = this.store.select(selectCharacter(this.id)).pipe(
      filter((character): character is Character => character !== undefined),
      map((character: Character) => character as Character)
    )
  }
}
