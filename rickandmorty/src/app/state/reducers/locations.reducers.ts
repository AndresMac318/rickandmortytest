import { createReducer, on } from '@ngrx/store';

import { Location } from 'src/app/interfaces/apiresponse.interface';
import { LocationsApiActions } from '../actions/locations.actions';

export const initialState: ReadonlyArray<Location> = [];

export const locationsReducer = createReducer(
  initialState,
  on(LocationsApiActions.retrievedLocationsList, ( _state, {locations} ) => locations )
  
);