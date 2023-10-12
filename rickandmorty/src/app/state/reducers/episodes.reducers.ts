import { createReducer, on } from '@ngrx/store';

import { Episode } from 'src/app/interfaces/apiresponse.interface';
import { EpisodesApiActions } from '../actions/episodes.actions';

export const initialState: ReadonlyArray<Episode> = [];

export const episodesReducer = createReducer(
  initialState,
  on(EpisodesApiActions.retrievedEpisodesList, ( _state, {episodes} ) => episodes)
);