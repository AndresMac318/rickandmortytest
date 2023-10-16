import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, catchError, of } from 'rxjs';
import { Character } from 'src/app/interfaces/apiresponse.interface';
import { DataAPIService } from 'src/app/services/data-api.service';
import { CharactersApiActions } from 'src/app/state/actions/characters.actions';
import { searchCharacters, selectCharactersState } from 'src/app/state/selectors/characters.selectors';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent {

  characters$: Observable<any> = new Observable();
  charactersTemp$: Observable<any> = new Observable();

  constructor(private dataApiSvc: DataAPIService, private store: Store<Character[]> , private router: Router){}

  ngOnInit(){
    this.dataApiSvc.getCharactersAPI()
    .pipe(
      catchError(error => {
        console.error('Ha ocurrido un error:', error);
        Swal.fire({
          icon: 'error',
          title: 'Ocurrio un error en la consulta!',
          text: `${error}`,
        });
        return of([]);
      })
    )
    .subscribe((resp: Character[]) => {
      this.store.dispatch(CharactersApiActions.retrievedCharactersList({characters: resp}))
    });

    this.characters$ = this.store.select(selectCharactersState);
    this.charactersTemp$ = this.store.select(selectCharactersState);

  }

  buscar(termino: string){
    if (termino.length === 0) {
      this.characters$ = this.charactersTemp$;
      return;
    }
    this.characters$ = this.store.select(searchCharacters(termino));
  }

  goDetail(id: string){
    this.router.navigateByUrl(`character/${id}`);
  }

}
