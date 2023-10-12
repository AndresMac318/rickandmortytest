import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Episode } from 'src/app/interfaces/apiresponse.interface';


export const selectEpisodesState = createFeatureSelector<ReadonlyArray<Episode>>('episodes');

export const selectEpisode = (id: string) => createSelector(
    selectEpisodesState,
    (episodes) => {
        return episodes.find(episode => episode.id === id)
    }
);

export const searchEpisodes = (termino: string) => createSelector(
    selectEpisodesState,
    (episodes) => {
        return episodes.filter(episode => episode.name.toLowerCase().includes(termino.toLowerCase()));
    }
);
