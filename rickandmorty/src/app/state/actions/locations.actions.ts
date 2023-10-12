import { createActionGroup, props } from '@ngrx/store';
import { Location } from 'src/app/interfaces/apiresponse.interface';

export const LocationsApiActions = createActionGroup({
  source: 'Locations API',
  events: {
    'Retrieved Locations List': props<{ locations: ReadonlyArray<Location> }>(),
    'Retrieved Character': props<{ locationId: string }>(),
  }
})