import { createActionGroup, props } from '@ngrx/store';
import { Character } from 'src/app/interfaces/apiresponse.interface';


export const CharactersApiActions = createActionGroup({
  source: 'Characters API',
  events: {
    'Retrieved Characters List': props<{ characters: ReadonlyArray<Character> }>(),
    'Retrieved Character': props<{ characterId: string }>(),
  },
});
