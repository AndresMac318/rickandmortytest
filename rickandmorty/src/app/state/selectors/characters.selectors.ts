import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Character } from 'src/app/interfaces/apiresponse.interface';


export const selectCharactersState = createFeatureSelector<ReadonlyArray<Character>>('characters');

export const selectCharacter = (id: string) => createSelector(
  selectCharactersState,
  (characters) => {
      return characters.find(character => character.id === id)
  }
);

export const searchCharacters = (termino: string) => createSelector(
  selectCharactersState,
  (characters) => {
    const searchTerm = termino.toLowerCase();
    return characters.filter(character => {
      const nameMatch = character.name.toLowerCase().includes(searchTerm);
      const statusMatch = character.status.toLowerCase().includes(searchTerm);
      const speciesMatch = character.species.toLowerCase().includes(searchTerm);
      return nameMatch || statusMatch || speciesMatch;
    });
  }
);