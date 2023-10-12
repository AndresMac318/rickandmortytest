import { createReducer, on } from '@ngrx/store';

import { Character } from 'src/app/interfaces/apiresponse.interface';
import { CharactersApiActions } from '../actions/characters.actions';

export const initialState: ReadonlyArray<Character> = [];

export const charactersReducer = createReducer(
  initialState,
  on( CharactersApiActions.retrievedCharactersList, ( _state, { characters } ) => characters ),
);