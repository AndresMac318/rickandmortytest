import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CharactersComponent } from './views/characters/characters.component';
import { DetailComponent } from './views/characters/detail/detail.component';
import { LocationsComponent } from './views/locations/locations.component';
import { LocationDetailComponent } from './views/locations/location-detail/location-detail.component';
import { EpisodesComponent } from './views/episodes/episodes.component';
import { EpisodeDetailComponent } from './views/episodes/episode-detail/episode-detail.component';

const routes: Routes = [
  { path: 'characters', component: CharactersComponent },
  { path: 'characters/:id', component: DetailComponent },
  { path: 'locations', component: LocationsComponent },
  { path: 'locations/:id', component: LocationDetailComponent },
  { path: 'episodes', component: EpisodesComponent },
  { path: 'episodes/:id', component: EpisodeDetailComponent },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
