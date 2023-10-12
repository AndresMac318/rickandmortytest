import { createActionGroup, props } from '@ngrx/store';
import { Episode } from 'src/app/interfaces/apiresponse.interface';

export const EpisodesApiActions = createActionGroup({
  source: 'Episodes API',
  events: {
    'Retrieved Episodes List': props<{ episodes: ReadonlyArray<Episode> }>(),
    'Retrieved Episode': props<{ episodeId: string }>(),
  },
});

