import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Location } from 'src/app/interfaces/apiresponse.interface';


export const selectLocationsState = createFeatureSelector<ReadonlyArray<Location>>('locations');

export const selectLocation = (id: string) => createSelector(
    selectLocationsState,
    (locations) => {
        return locations.find(location => location.id === id)
    }
);

export const searchLocations = (termino: string) => createSelector(
    selectLocationsState,
    (locations) => {
        return locations.filter(location => location.name.toLowerCase().includes(termino.toLowerCase()));
    }
);
